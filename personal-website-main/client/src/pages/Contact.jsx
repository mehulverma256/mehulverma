import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import Lottie from "lottie-react";
import ContactAnimation from "../assets/lottie-animations/Contact.json";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import the styles
import emailjs from "@emailjs/browser";

const Contact = () => {
  // EmailJS credentials from environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Decorations */}
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
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"
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
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-base font-medium mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-normal pb-2 bg-[length:200%_auto] bg-gradient-to-r from-[#EC4899] via-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-orange-500 hover:via-green-500 hover:to-emerald-500 transition-all duration-500 bg-clip-text text-transparent hover:scale-[1.01] transform"
            whileHover={{ scale: 1.02 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-gray-300">
            I'm always open to discussing new projects and opportunities
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-full space-y-6"
            >
              {/* Container for all inputs */}
              <div className="space-y-6 flex-grow">
                {/* Name and Email */}
                <div className="space-y-6">
                  <div className="w-full">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                                 focus:ring-2 focus:ring-primary-500 focus:border-transparent
                                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                 transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                                 focus:ring-2 focus:ring-primary-500 focus:border-transparent
                                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                                 transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="w-full">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                               focus:ring-2 focus:ring-primary-500 focus:border-transparent
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               transition-colors duration-200"
                    placeholder="How can I help you?"
                  />
                </div>

                {/* Message */}
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="8"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                               focus:ring-2 focus:ring-primary-500 focus:border-transparent
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                               transition-colors duration-200 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
              </div>

              {/* Button and Status - Fixed at bottom */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative inline-flex items-center justify-center w-full py-4 px-6 rounded-xl text-white font-medium overflow-hidden transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-purple-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  <span className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5" /* ... */
                        />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </motion.button>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 text-center p-4 rounded-lg ${
                      submitStatus === "success"
                        ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                        : "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                    }`}
                  >
                    {submitStatus === "success"
                      ? "Message sent successfully!"
                      : "Failed to send message. Please try again."}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Direct Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Info
              </h2>
              <div className="space-y-6">
                <a
                  href="mailto:mehulverma256@gmail.com"
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <HiMail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">mehulverma256@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <HiLocationMarker className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm">Bhopal, India</p>
                  </div>
                </div>
                {/* Add this right after the Location div in your Contact Info card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  <a
                    href="https://drive.google.com/file/d/15-dpm4GOZaGcDgocW_dvcx1azSP48P2b/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 w-full rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-purple-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                    <span className="relative flex items-center justify-center gap-2 w-full">
                      Download Resume
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                        animate={{ y: [0, 2, 0] }}
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
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Find Me Online
              </h2>
              <div className="flex gap-4">
                {[
                  {
                    name: "LinkedIn",
                    icon: <FaLinkedinIn className="w-6 h-6" />,
                    url: "https://www.linkedin.com/in/mehul-verma-3469821a1/",
                    tooltip: "Connect with me on LinkedIn",
                  },
                  {
                    name: "Linktree",
                    icon: <SiLinktree className="w-6 h-6" />,
                    url: "https://linktr.ee/mehulverma",
                    tooltip: "Find all my important links",
                  },
                  {
                    name: "GitHub",
                    icon: <FaGithub className="w-6 h-6" />,
                    url: "https://github.com/mehulverma256",
                    tooltip: "Check out my projects on GitHub",
                  },
                ].map((social) => (
                  <Tippy
                    key={social.name}
                    content={social.tooltip}
                    placement="top"
                    animation="fade"
                    theme="dark"
                    className="shadow-lg"
                  >
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 flex items-center justify-center rounded-lg bg-gray-50/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/30 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  </Tippy>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex justify-center"
            >
              <Lottie
                animationData={ContactAnimation}
                loop={true}
                style={{ width: "100%", maxWidth: "300px" }} // Adjust size as needed
                className="pointer-events-none" // Prevents interaction with the animation
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
