import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mehul-verma-3469821a1/",
      icon: <FaLinkedinIn className="w-6 h-6" />,
      tooltip: "Connect with me on LinkedIn",
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/mehulverma",
      icon: <SiLinktree className="w-6 h-6" />,
      tooltip: "Find all my important links",
    },
    {
      name: "GitHub",
      url: "https://github.com/mehulverma256",
      icon: <FaGithub className="w-6 h-6" />,
      tooltip: "Check out my projects on GitHub",
    },
    {
      name: "Email",
      url: "mailto:mehulverma256@gmail.com",
      icon: <HiMail className="w-6 h-6" />,
      tooltip: "Send me an email",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          {socialLinks.map((social) => (
            <Tippy
              key={social.name}
              content={social.tooltip}
              placement="top"
              animation="fade"
              theme="dark"
              className="shadow-lg"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {social.icon}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.div>
              </a>
            </Tippy>
          ))}
        </div>

        {/* Signature & Love */}
        <div className="text-center">
          <motion.div
            className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>Crafted with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-red-500 dark:text-red-400"
            >
              ❤️
            </motion.span>
            <span>by Mehul Verma</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
