import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaCode,
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaDocker,
  FaGit,
  FaJs,
  FaChartBar,
  FaWordpress,
  FaPhp,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiFastapi,
  SiCelery,
  SiAntdesign,
  SiRedis,
  SiSqlalchemy,
  SiFigma,
  SiLatex,
  SiC,
  SiMysql,
  SiAxios,
} from "react-icons/si";
import {
  TbBrandCpp,
  TbBrandCSharp,
  TbGridDots,
  TbBinaryTree,
  TbPuzzle,
} from "react-icons/tb";
import { BsFiletypeDoc } from "react-icons/bs";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "core", name: "Core CS" },
    { id: "languages", name: "Languages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "tools", name: "Tools & Others" },
  ];

  const skills = [
    // Languages
    {
      name: "C Plus Plus",
      icon: <TbBrandCpp />,
      category: "languages",
      color: "text-[#00599C]",
    },
    {
      name: "Python",
      icon: <FaPython />,
      category: "languages",
      color: "text-[#3776AB]",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "languages",
      color: "text-[#F7DF1E]",
    },
    {
      name: "C Language",
      icon: <SiC />,
      category: "languages",
      color: "text-[#A8B9CC]",
    },
    {
      name: "Java",
      icon: <FaJava />,
      category: "languages",
      color: "text-[#007396]",
    },
    {
      name: "C Sharp",
      icon: <TbBrandCSharp />,
      category: "languages",
      color: "text-[#239120]",
    },
    {
      name: "PHP",
      icon: <FaPhp />,
      category: "languages",
      color: "text-[#777BB4]",
    },
    {
      name: "SQL",
      icon: <SiMysql />,
      category: "languages",
      color: "text-[#4479A1]",
    },

    // Frontend
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      category: "frontend",
      color: "text-[#E34F26]",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      category: "frontend",
      color: "text-[#1572B6]",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      category: "frontend",
      color: "text-[#61DAFB]",
    },
    {
      name: "React Query",
      icon: <FaReact />,
      category: "frontend",
      color: "text-[#FF4154]",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      category: "frontend",
      color: "text-[#06B6D4]",
    },
    {
      name: "Ant Design",
      icon: <SiAntdesign />,
      category: "frontend",
      color: "text-[#0170FE]",
    },
    {
      name: "AG Grid",
      icon: <TbGridDots />,
      category: "frontend",
      color: "text-[#167C3A]",
    },
    {
      name: "Recharts & Plotly",
      icon: <FaChartBar />,
      category: "frontend",
      color: "text-[#3F4F75] dark:text-[#6C8EEF]",
    },
    {
      name: "Axios",
      icon: <SiAxios />, // or <FaCloud /> or <TbApi />
      category: "frontend",
      color: "text-[#5A29E4]", // Axios's purple color
    },

    // Backend
    {
      name: "Node.js",
      icon: <FaNode />,
      category: "backend",
      color: "text-[#339933]",
    },
    {
      name: "FastAPI",
      icon: <SiFastapi />,
      category: "backend",
      color: "text-[#009688]",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
      category: "backend",
      color: "text-[#E10098]",
    },
    {
      name: "Celery",
      icon: <SiCelery />,
      category: "backend",
      color: "text-[#37814A]",
    },
    {
      name: "SQLAlchemy",
      icon: <SiSqlalchemy />,
      category: "backend",
      color: "text-[#D71F00]",
    },

    // Database
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      category: "database",
      color: "text-[#4169E1]",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      category: "database",
      color: "text-[#47A248]",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      category: "database",
      color: "text-[#4479A1]", // MySQL's official blue color
    },
    {
      name: "Redis",
      icon: <SiRedis />,
      category: "database",
      color: "text-[#DC382D]",
    },

    // Cloud & DevOps
    {
      name: "AWS",
      icon: <FaAws />,
      category: "cloud",
      color: "text-[#232F3E] dark:text-[#FF9900]",
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      category: "cloud",
      color: "text-[#2496ED]",
    },

    // Tools & Others
    {
      name: "Git",
      icon: <FaGit />,
      category: "tools",
      color: "text-[#F05032]",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      category: "tools",
      color: "text-[#F24E1E]",
    },
    {
      name: "LaTeX",
      icon: <SiLatex />,
      category: "tools",
      color: "text-[#008080]",
    },
    {
      name: "Office Add-ins Development",
      icon: <BsFiletypeDoc />,
      category: "tools",
      color: "text-[#D83B01]",
    },

    {
      name: "Data Structures",
      icon: <TbBinaryTree />,
      category: "core",
      color: "text-[#2C3E50] dark:text-[#3498DB]",
    },
    {
      name: "Algorithms",
      icon: <FaCode />,
      category: "core",
      color: "text-[#34495E] dark:text-[#E74C3C]",
    },
    {
      name: "Problem Solving",
      icon: <TbPuzzle />, // from react-icons/tb
      category: "core",
      color: "text-[#16A085]",
    },
  ];

  return (
    <div className="min-h-[80vh] py-12 sm:py-20 bg-gray-50 dark:bg-gray-900">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-base font-medium mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Skills & Expertise
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-normal pb-2 bg-[length:200%_auto] bg-gradient-to-r from-[#EC4899] via-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-orange-500 hover:via-green-500 hover:to-emerald-500 transition-all duration-500 bg-clip-text text-transparent hover:scale-[1.01] transform"
            whileHover={{ scale: 1.02 }}
          >
            Technical Arsenal
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From algorithms to full-stack development, here's my toolkit for
            building efficient solutions.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-primary-600 text-white dark:bg-primary-500 shadow-lg"
                    : "bg-white/80 text-gray-600 hover:bg-gray-100 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-700/80 backdrop-blur-lg"
                }
                hover:shadow-md
              `}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {skills
            .filter(
              (skill) =>
                activeCategory === "all" || skill.category === activeCategory,
            )
            .map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
              >
                <div
                  className={`text-2xl ${skill.color} bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg transition-transform duration-300 hover:rotate-12`}
                >
                  {skill.icon}
                </div>
                <span className="text-base text-gray-700 dark:text-gray-200 font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
