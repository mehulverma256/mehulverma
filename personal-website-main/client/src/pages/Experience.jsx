import { motion } from "framer-motion";
import AutocashLogo from "../assets/Autocash.jpeg";
import PhilipsLogo from "../assets/Philips.jpeg";
import MadieeGamesLogo from "../assets/MadieeGames.jpeg";

const Experience = () => {
  const experiences = [
    {
      company: "Autocash.ai",
      companyLogo: AutocashLogo,
      position: "Software Engineer",
      duration: "Jul 2023 - Present",
      location: "Hyderabad, IN",
      description: [
        "Built and migrated a financial data aggregation system from Node.js to FastAPI, leveraging PostgreSQL and SQLAlchemy ORM, which streamlined user onboarding by eliminating manual bank account and transaction imports, reducing data entry time by 70% and improving system reliability",
        "Implemented a self-signup flow using AWS Amplify and Cognito, automating manual database operations and reducing customer onboarding time from 30 minutes to 5 minutes, enhancing user experience and operational efficiency",
        "Developed RESTful APIs for core business features (cash forecasting, transaction management, and holiday adjustment) using FastAPI and PostgreSQL, implementing complex business logic for financial data processing",
        "Created responsive frontend interfaces using ReactJS, GraphQL, and modern UI libraries (Ant Design, Tailwind CSS), delivering 15+ features including interactive financial dashboards with ReCharts and AG Grid, boosting engagement by 40%. Streamlined data handling with React Query and Axios, reducing API calls by 25%, and added dark mode support",
        "Collaborated in agile development cycles with the founding team, implementing user feedback to improve features and fix bugs, contributing to 95% positive feedback from early users and driving product adoption",
        "Led development of auxiliary projects, including the company website using WordPress and PHP, and Microsoft Excel Add-in integration (built with Node.js using Yeoman), enabling direct API access for financial data manipulation and expanding platform accessibility for business users",
      ],
      tech: [
        "FastAPI",
        "PostgreSQL",
        "AWS",
        "React",
        "GraphQL",
        "Ant Design",
        "Tailwind CSS",
        "React Query",
        "Celery",
      ],
      category: "Full Stack Development",
    },
    {
      company: "Philips",
      companyLogo: PhilipsLogo,
      position: "Software Engineering Intern",
      duration: "Jan 2023 - Jul 2023",
      location: "Bangalore, IN",
      description: [
        "Implemented an audit logging system for a legacy DICOM (C-STORE) service, significantly improving traceability and security compliance. Achieved 90% code coverage through rigorous unit testing, enhancing system reliability",
        "Streamlined the process of removing PHI (Protected Health Information) within DICOM web services, achieving full HIPAA compliance and fortifying data privacy protocols while reducing manual processing time by 30 hours monthly",
        "Ensured 'A' grade code quality by adhering to TICS coding standards. Gained hands-on experience with automated API testing methodologies, utilizing .NET Core, C#, and REST APIs",
      ],
      tech: [".NET Core", "C#", "REST APIs", "DICOM", "Unit Testing"],
      category: "Backend Development",
    },
    {
      company: "Madiee Games",
      companyLogo: MadieeGamesLogo,
      position: "Software Engineering Intern",
      duration: "Dec 2021 - Jan 2022",
      location: "Remote",
      description: [
        "Developed prototype platform with real-time chat & video conferencing (Zoom Web SDK) for MADIEE to attract investors",
        "Built full-stack solution using ReactJS, TailwindCSS, and Node.js to showcase company's educational game offerings",
      ],
      tech: ["React.js", "Node.js", "Tailwind CSS", "Zoom Web SDK"],
      category: "Full Stack Development",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
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
            Work Experience
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-normal pb-2 bg-[length:200%_auto] bg-gradient-to-r from-[#EC4899] via-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-orange-500 hover:via-green-500 hover:to-emerald-500 transition-all duration-500 bg-clip-text text-transparent hover:scale-[1.01] transform"
            whileHover={{ scale: 1.02 }}
          >
            My Professional Journey
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            Building impactful solutions and growing as a developer
          </motion.p>
        </motion.div>
        {/* Experience Timeline */}
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Company Header */}
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-gray-100 dark:border-gray-700"
                    >
                      <img
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      {exp.duration}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 justify-end">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <motion.div className="mb-6" whileHover={{ scale: 1.05 }}>
                  <span className="px-4 py-1.5 text-sm bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full font-medium">
                    {exp.category}
                  </span>
                </motion.div>

                {/* Key Contributions */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Contributions
                  </h4>
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium">
                          {i + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: 0.05 * techIndex }}
                        className="px-4 py-2 bg-gradient-to-r from-primary-50/30 to-primary-100/30 dark:from-gray-700/50 dark:to-gray-600/50 rounded-lg text-primary-800 dark:text-primary-300 font-medium hover:from-primary-100/40 hover:to-primary-200/40 dark:hover:from-gray-600/60 dark:hover:to-gray-500/60 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        {/* Resume Download Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://drive.google.com/file/d/1UdTsuqi7-gCuH3Pzt2Od--pG-5j4Oy8L/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#EC4899] to-purple-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
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
        </motion.div>

        {/* Optional: Connect Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Want to discuss opportunities? Let's connect on{" "}
            <a
              href="https://www.linkedin.com/in/siddharth-singh-7155131a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              LinkedIn
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
