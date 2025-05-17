import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import home from "../assets/home.json"
import Lottie from "lottie-react";
const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => setMounted(true), []);

  // Animation variants
  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-lg dark:shadow-gray-800/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-16 w-auto md:h-18 lg:h-20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ height: '100%', width: 'auto' }}
              >
                <Lottie
                  animationData={home}
                  loop={true}
                  autoplay={true}
                  style={{ height: '100%', width: '100%' }}
                  rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice'
                  }}
                />
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${
                        location.pathname === item.path
                          ? "bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Desktop Resume Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://drive.google.com/file/d/15-dpm4GOZaGcDgocW_dvcx1azSP48P2b/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-primary-600 to-primary-500 text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-purple-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <span className="relative flex items-center gap-1">
                  Resume
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                    animate={{ y: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </motion.svg>
                </span>
              </a>
            </motion.div>

            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg ml-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === "dark" ? (
                  <motion.span
                    initial={{ rotate: -45 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    🌞
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ rotate: 45 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    🌙
                  </motion.span>
                )}
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ☰
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden py-2 space-y-1"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors
                        ${
                          location.pathname === item.path
                            ? "bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Resume Button */}
              <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://drive.google.com/file/d/15-dpm4GOZaGcDgocW_dvcx1azSP48P2b/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block px-4 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-primary-600 to-primary-500 text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-purple-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  <span className="relative flex items-center gap-2">
                    Download Resume
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                      animate={{ y: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </motion.svg>
                  </span>
                </a>
              </motion.div>

              {/* Mobile Theme Toggle */}
              {mounted && (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-full text-left px-4 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {theme === "dark"
                    ? "Switch to Light Mode 🌞"
                    : "Switch to Dark Mode 🌙"}
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
