import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiAntdesign,
  SiReactquery,
  SiCodemirror, // Added for CodeMirror
} from "react-icons/si";
import taskManagerImage from "../assets/project-images/TaskManager.png";
import codeCollabImage from "../assets/project-images/CodeSync.png";

const Projects = () => {
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

  const projects = [
    {
      title: "Real-Time Code Collaboration Platform",
      description:
        "Built a multi-user, real-time code editor with seamless collaborative coding. Integrated CodeMirror and JDoodle API for code editing and compilation in 15+ programming languages.",
      tech: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        {
          name: "Socket.IO",
          icon: <SiSocketdotio className="text-[#010101]" />,
        },
        {
          name: "CodeMirror",
          icon: <SiCodemirror className="text-[#D30707]" />,
        },
      ],
      github: "your-github-link",
      live: "your-live-demo-link",
      image: codeCollabImage,
    },
    {
      title: "Task Manager Application",
      description:
        "Built a full-stack task management app enabling users to add, edit, and manage tasks with JWT authentication. Optimized data fetching using React Query, utilized Ant Design for intuitive UI, and built backend with NodeJS and MongoDB.",
      tech: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        {
          name: "Ant Design",
          icon: <SiAntdesign className="text-[#0170FE]" />,
        },
        {
          name: "React Query",
          icon: <SiReactquery className="text-[#FF4154]" />,
        },
      ],
      github: "your-github-link",
      live: "your-live-demo-link",
      image: taskManagerImage,
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
            Portfolio
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-normal pb-2 bg-[length:200%_auto] bg-gradient-to-r from-[#EC4899] via-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-orange-500 hover:via-green-500 hover:to-emerald-500 transition-all duration-500 bg-clip-text text-transparent hover:scale-[1.01] transform"
            whileHover={{ scale: 1.02 }}
          >
            Featured Projects
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-gray-300">
            Showcasing my technical expertise and creativity
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Optional: Project Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-sm font-medium text-primary-600 dark:text-primary-400 backdrop-blur-sm">
                    Featured Project
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: 0.05 * techIndex }}
                        className="px-4 py-2 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg text-gray-700 dark:text-gray-300 font-medium border border-gray-100 dark:border-gray-600 flex items-center gap-2"
                      >
                        <span className="text-xl">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-300 font-medium"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300 font-medium"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <motion.a
            href="https://github.com/SIDTK365"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-purple-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            <span className="relative flex items-center gap-2">
              <FaGithub className="w-6 h-6" />
              View More on GitHub
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
