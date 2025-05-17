import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Animation from "../assets/Animation.json"
import Lottie from "lottie-react";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-8 pb-0 sm:pt-12 sm:pb-0">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-r from-primary-600/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-4 lg:-mt-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-8">
            {/* Your existing left content code */}
            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-1 sm:space-y-3">
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <span className="bg-primary-100 dark:bg-primary-900/50 text-primary-600 pl-4 sm:ml-24 sm:pl-6 dark:text-primary-400 px-6 py-3 rounded-full text-base sm:text-lg md:text-xl font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300">
                  <motion.span
                    className="inline-block"
                    animate={{
                      rotate: [0, 20, -20, 20, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                  >
                    👋
                  </motion.span>
                  {` Hi there, I'm`}
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl pl-3 sm:pl-32 font-bold tracking-tight leading-normal pb-0 -mb-8 bg-[length:200%_auto] bg-gradient-to-r from-[#EC4899] via-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-orange-500 hover:via-green-500 hover:to-emerald-500 transition-all duration-500 bg-clip-text text-transparent hover:scale-[1.01] transform">
                Mehul Verma
              </h1>
            </motion.div>

            {/* Dynamic Title */}
            <motion.div
              variants={itemVariants}
              className="text-base sm:text-lg pl-3 sm:pl-32 lg:text-xl text-gray-600 dark:text-gray-300 font-medium -mt-8"
            >
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer 👨‍💻",
                    "Full Stack Developer ⚡",
                    "Indie Music Enthusiast 🎧",
                    "Pixel Perfect Designer 📸",
                    "Solo Travel Explorer 🌎",
                    "Gaming Aficionado 🎮",
                    "Minimalist at Heart ✨",
                    "Aesthetic Photographer 📱",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="text-base sm:text-lg pl-3 sm:pl-32 text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg transition-all duration-300"
            >
              <span className="block mb-2 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                I build exceptional digital experiences and solve complex
                problems through elegant code.
              </span>
              <span className="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300">
                Passionate about creating impactful solutions that make a
                difference.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col pl-1 sm:pl-32 sm:flex-row gap-4 w-full sm:w-auto"
            >
              {/* View My Work Button */}
              <Link
                to="/about"
                className="group relative px-6 sm:px-8  py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-purple-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <span className="relative flex items-center justify-center sm:justify-start gap-2">
                  About Me
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </span>
              </Link>

              {/* Resume Download Button */}
              {/* <motion.a
                href="https://drive.google.com/file/d/1UdTsuqi7-gCuH3Pzt2Od--pG-5j4Oy8L/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#EC4899] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <span className="relative flex items-center justify-center sm:justify-start gap-2">
                  Download Resume
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:translate-y-1 transition-transform"
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </motion.svg>
                </span>
              </motion.a> */}

              {/* Get in Touch Button */}
              <Link
                to="/contact"
                className="group relative px-6 sm:px-8 py-3 rounded-lg border-2 border-primary-600/30 dark:border-primary-400/30 text-gray-900 dark:text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:border-primary-600 dark:hover:border-primary-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] backdrop-blur-sm"
              >
                <span className="absolute inset-0 bg-primary-600/10 dark:bg-primary-400/10 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                <span className="relative flex items-center justify-center sm:justify-start gap-2">
                  Get in Touch
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </motion.svg>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-8 lg:mt-0 backdrop-blur-sm "
          >
            <div className="relative max-w-[80%] sm:max-w-[70%] md:max-w-full mx-auto ">
              {/* Your existing right content code */}
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-primary-400/30 to-purple-500/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                  className="absolute -bottom-4 -left-12 lg:-left-44 w-32 h-32 bg-gradient-to-r from-primary-600/30 to-blue-500/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Laptop SVG with enhanced animation lpatop*/}
              <motion.div
                className="w-full relative z-10 lg:-ml-12 xl:-ml-16"
                animate={{
                  y: [-10, 10],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Lottie 
                  animationData={Animation} 
                  className="w-full h-[90%] drop-shadow-2xl" 
                />
              </motion.div>

              {/* Optional: Add floating elements around the laptop chota gola upar then neeche */}
              <motion.div
                className="absolute top-1/4 right-0 w-8 h-8 bg-primary-400/20 rounded-full blur-sm"
                animate={{
                  y: [-10, 10],
                  x: [-5, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-6 lg:-left-24 w-6 h-6 bg-primary-600/20 rounded-full blur-sm"
                animate={{
                  y: [10, -10],
                  x: [5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
