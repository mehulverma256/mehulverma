import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerAnimation from "../assets/lottie-animations/DeveloperAnimation.json";
import { BsBriefcase, BsCode, BsLaptop, BsServer } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import {
  FaGithub,
  FaSpotify,
  FaPlane,
  FaGamepad,
  FaCamera,
} from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"; // Add this line
import { useTheme } from "next-themes"; // If you're using theme

const About = () => {
  const { theme } = useTheme(); // If you're using theme

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

  const codingProfiles = [
    {
      icon: <SiLeetcode className="text-2xl text-[#FFA116]" />, // LeetCode's official color
      platform: "LeetCode",
      stats: "570+ Problems",
      rank: "365 Days Badge",
      url: "https://leetcode.com/crazifire/",
    },
    {
      icon: <SiGeeksforgeeks className="text-2xl text-[#2F8D46]" />, // GFG's official color
      platform: "GeeksforGeeks",
      stats: "500+ Problems ",
      rank: "Coding Enthusiast",
      url: "https://www.geeksforgeeks.org/user/crazifire/",
    },
  ];

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

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-base font-medium mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            About Me
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-normal pb-2 bg-[length:200%_auto] bg-gradient-to-r from-[#EC4899] via-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-orange-500 hover:via-green-500 hover:to-emerald-500 transition-all duration-500 bg-clip-text text-transparent hover:scale-[1.01] transform"
            whileHover={{ scale: 1.02 }}
          >
            Hi, I'm Mehul Verma
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            Software Engineer & Full Stack Developer
          </motion.p>
        </motion.div>
        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Journey Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <BsBriefcase className="text-primary-600" />
                My Journey
              </h2>

              {/* Timeline for Journey */}
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-primary-500/30">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500"></div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    Software Engineer at Spectar Group
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                    2023 - Present
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building scalable web applications and leading frontend
                    development initiatives.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-primary-500/30">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500"></div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    <HiAcademicCap className="inline mr-2" />
                    B.Tech in Computer Science and Engineering (CSE)
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                    National Institute of Technology, Bhopal (NIT Bhopal)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    GPA: 9.28/10
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <HiAcademicCap className="text-primary-600" />
                Achievements
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "CODECAMP 2.0 Virtual Hackathon",
                    description:
                      "Secured 3rd place among 800+ participants in the hackathon organized by ISTE SRM",
                    icon: "🥉",
                    year: "2021",
                  },
                  {
                    title: "CODECHEF SNACKDOWN",
                    description:
                      "Ranked 1288th globally in Online Qualifiers among 30,000+ candidates",
                    icon: "🌐",
                    year: "2021",
                  },
                  {
                    title: "CODECHEF CHAPTER'S APPETIZER",
                    description: "Secured 47th place out of 1000+ participants",
                    icon: "🏅",
                    year: "2021",
                  },
                  {
                    title: "Elite Typing Proficiency",
                    description:
                      "120 WPM average typing speed (Top 1% globally) | Winner of KEYBOARD ARENA typing contest",
                    icon: "⚡",
                    badge: "Top 1%",
                  },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Coding Profiles Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <BsCode className="text-primary-600" />
                Coding Profiles
              </h2>

              {/* Profiles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {codingProfiles.map((profile, index) => (
                  <motion.a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex flex-col items-center gap-3 cursor-pointer group transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-600 group-hover:bg-primary-50 dark:group-hover:bg-gray-500 transition-colors duration-300">
                      {profile.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {profile.platform}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {profile.stats}
                    </p>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                      {profile.rank}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* GitHub Contributions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <FaGithub className="text-primary-600" />
                    GitHub Contributions
                  </h3>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/mehulverma256"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
                  >
                    @mehulverma256
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-lg bg-white dark:bg-gray-700/50 p-4"
                >
                  <GitHubCalendar
                    username="mehulverma256"
                    colorScheme={theme === "dark" ? "dark" : "light"}
                    fontSize={12}
                    blockSize={8}
                    blockMargin={4}
                    style={{
                      width: "100%",
                      minHeight: "150px",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 h-full flex flex-col"
          >
            {/* Lottie Animation Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/10 rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-600/10 rounded-full blur-xl" />

              <div className="relative h-[400px] flex items-center justify-center">
                <Lottie
                  animationData={developerAnimation}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* What I Do Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex-1 overflow-auto"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 sticky top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg z-10 py-2">
                <BsLaptop className="text-primary-600" />
                What I Do
              </h2>

              <div className="space-y-6 overflow-y-auto max-h-[calc(100%-4rem)]">
                {[
                  {
                    icon: <BsServer className="text-xl" />,
                    title: "Backend Development",
                    description:
                      "Build scalable and efficient backend systems with focus on performance and reliability",
                  },
                  {
                    icon: <BsCode className="text-xl" />,
                    title: "Frontend Development",
                    description:
                      "Create responsive and intuitive user interfaces using modern frameworks and best practices",
                  },
                  {
                    icon: <BsLaptop className="text-xl" />,
                    title: "Full Stack Development",
                    description:
                      "Develop end-to-end web applications with seamless integration between frontend and backend",
                  },
                  {
                    icon: <BsCode className="text-xl" />,
                    title: "API Development",
                    description:
                      "Design and implement RESTful APIs with proper documentation and security measures",
                  },
                  {
                    icon: <BsServer className="text-xl" />,
                    title: "Database Design",
                    description:
                      "Experience with both SQL and NoSQL databases, optimizing for performance and scalability",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Beyond Coding Section - Full Width */}
        <motion.div variants={itemVariants} className="max-w-7xl mx-auto mt-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Beyond Coding
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaSpotify className="text-2xl" />,
                  title: "Music Taste",
                  items: [
                    "Meltt",
                    "Khruangbin",
                    "Men I Trust",
                    "L'Impératrice",
                    "The Marías",
                  ],
                },
                {
                  icon: <FaPlane className="text-2xl" />,
                  title: "Travel Goals",
                  items: [
                    "Gedi and street food meetup w the homies 🔥",
                    "Late Night City Exploration 🌃",
                    "Solo Flight Hopping Adventures ✈️",
                    "Metro Hopping 🚇",
                    "Spontaneous Road Trip Scenes 🛣️",
                  ],
                },
                {
                  icon: <FaGamepad className="text-2xl" />,
                  title: "Gaming",
                  items: [
                    "GTA IV & V",
                    "Red Dead Redemption 2",
                    "Max Payne Series",
                    "Cities: Skylines",
                    "WWE 2K Series",
                  ],
                },
                {
                  icon: <FaCamera className="text-2xl" />,
                  title: "Photography",
                  items: [
                    "Lo-fi Urban Scenes 🌆",
                    "Pixel Perfectionist 📸",
                    "Urban Vibes Explorer 🌃",
                    "Street Stories ✨",
                    "Dream Pop Aesthetics 🎯",
                  ],
                },
              ].map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex flex-col items-center gap-3"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400"
                  >
                    {interest.icon}
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {interest.title}
                  </h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 text-center space-y-1">
                    {interest.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
