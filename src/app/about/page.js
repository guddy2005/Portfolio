"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiExpress,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiDocker,
  SiRedux,
  SiSass,
  SiBootstrap,
  SiPostman,
  SiGithub,
  SiFigma,
  SiRedis,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FiArrowUpRight } from "react-icons/fi";

/* ----------------------------
   Data
   ---------------------------- */
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "group-hover:text-sky-500",
        shadow: "hover:shadow-sky-500/30",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "group-hover:text-black dark:group-hover:text-white",
        shadow: "hover:shadow-black/20 dark:hover:shadow-white/20",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "group-hover:text-yellow-400",
        shadow: "hover:shadow-yellow-400/30",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "group-hover:text-blue-500",
        shadow: "hover:shadow-blue-500/30",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "group-hover:text-cyan-400",
        shadow: "hover:shadow-cyan-400/30",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "group-hover:text-fuchsia-500",
        shadow: "hover:shadow-fuchsia-500/30",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "group-hover:text-purple-500",
        shadow: "hover:shadow-purple-500/30",
      },
      {
        name: "SASS",
        icon: SiSass,
        color: "group-hover:text-pink-400",
        shadow: "hover:shadow-pink-400/30",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "group-hover:text-purple-600",
        shadow: "hover:shadow-purple-600/30",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "group-hover:text-green-500",
        shadow: "hover:shadow-green-500/30",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "group-hover:text-black dark:group-hover:text-white",
        shadow: "hover:shadow-black/20 dark:hover:shadow-white/20",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "group-hover:text-yellow-400",
        shadow: "hover:shadow-yellow-400/30",
      },
      {
        name: "Django",
        icon: SiDjango,
        color: "group-hover:text-green-700 dark:group-hover:text-green-500",
        shadow: "hover:shadow-green-500/30",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "group-hover:text-green-500",
        shadow: "hover:shadow-green-500/30",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "group-hover:text-blue-600",
        shadow: "hover:shadow-blue-600/30",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "group-hover:text-blue-500",
        shadow: "hover:shadow-blue-500/30",
      },
      {
        name: "Redis",
        icon: SiRedis,
        color: "group-hover:text-red-500",
        shadow: "hover:shadow-red-500/30",
      },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      {
        name: "Git & GitHub",
        icon: SiGit,
        color: "group-hover:text-orange-600",
        shadow: "hover:shadow-orange-600/30",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "group-hover:text-blue-500",
        shadow: "hover:shadow-blue-500/30",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "group-hover:text-black dark:group-hover:text-white",
        shadow: "hover:shadow-black/20 dark:hover:shadow-white/20",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "group-hover:text-orange-500",
        shadow: "hover:shadow-orange-500/30",
      },
      {
        name: "VS Code",
        icon: VscCode,
        color: "group-hover:text-blue-500",
        shadow: "hover:shadow-blue-500/30",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "group-hover:text-pink-500",
        shadow: "hover:shadow-pink-500/30",
      },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        color: "group-hover:text-orange-500",
        shadow: "hover:shadow-orange-500/30",
      },
      {
        name: "NumPy",
        icon: SiNumpy,
        color: "group-hover:text-blue-400",
        shadow: "hover:shadow-blue-400/30",
      },
      {
        name: "Pandas",
        icon: SiPandas,
        color: "group-hover:text-blue-600",
        shadow: "hover:shadow-blue-600/30",
      },
      {
        name: "Scikit-Learn",
        icon: SiScikitlearn,
        color: "group-hover:text-orange-400",
        shadow: "hover:shadow-orange-400/30",
      },
    ],
  },
];

const experiences = [
  {
    role: "Full Stack Intern",
    company: "Rabblehub Venture",
    duration: "Nov 2024 - Present",
    description:
      "Currently working as a Full Stack Intern, architecting scalable backend systems and building modern web applications.",
    contributions: [
      "Architected scalable backend systems with Node.js and Express.js for handling high-traffic applications.",
      "Optimized MongoDB queries leading to 25% faster response times for 1,000+ users.",
      "Developed RESTful APIs for seamless frontend-backend communication.",
      "Implemented authentication and authorization using JWT tokens.",
      "Collaborated with the team using Git/GitHub for version control and code reviews.",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "REST APIs"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "SoftiCation Technology Pvt. Ltd.",
    duration: "June 2024 - Aug 2024",
    description:
      'As a key contributor to the live "Sweetvilla" project, I successfully applied full-stack development principles in a fast-paced environment.',
    contributions: [
      "Engineered and maintained robust backend services using Python and the Django Framework.",
      "Developed dynamic and responsive user interfaces with React, HTML, CSS, and JavaScript.",
      "Designed and integrated REST APIs for seamless data communication between the frontend and backend.",
      "Managed version control with Git/GitHub and participated in the complete module lifecycle.",
      "Built SEO Automation tools using MERN stack for automated reporting.",
    ],
    technologies: ["Python", "Django", "React", "JavaScript", "Git/GitHub"],
  },
];

const certificates = [
  {
    title: "Data Science with Python",
    issuer: "Infosys Springboard",
    link: "/Datascience.pdf",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Great Learning",
    link: "/Java.pdf",
  },
  {
    title: "Snowflake Data Warehousing",
    issuer: "Snowflake",
    link: "/snowflake.pdf",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Google",
    link: "/genai.pdf",
  },
];

const educationTimeline = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Technology (AI & ML)",
    institution: "Ajay Kumar Garg Engineering College",
    description: "Ghaziabad, Uttar Pradesh - Pursuing",
  },
  {
    year: "2020 - 2023",
    title: "Diploma in Computer Science & Engineering",
    institution: "Govt. Polytechnic Bijnor",
    description: "Completed with 76%",
  },
  {
    year: "2020",
    title: "High School (Science)",
    institution: "Indian National Public School",
    description: "Completed with 73%",
  },
];

/* ----------------------------
   Motion variants
   ---------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

/* ----------------------------
   TimelineItem
   ---------------------------- */
const TimelineItem = ({ year, title, institution, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="relative pl-10 md:pl-16 pb-6 md:pb-8 last:pb-0"
  >
    {/* vertical line */}
    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 via-indigo-500 to-indigo-400 dark:from-indigo-500 dark:via-indigo-400 dark:to-indigo-500" />

    {/* dot */}
    <div className="absolute left-4 md:left-6 top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-indigo-500 transform -translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.6)] z-10 ring-4 ring-white dark:ring-gray-900" />

    {/* Card */}
    <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 dark:border-gray-700/50">
      {/* Year Badge */}
      <span className="inline-block px-3 md:px-4 py-1 mb-3 text-xs md:text-sm font-medium bg-indigo-100 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-500/50 rounded-full">
        {year}
      </span>

      {/* Content */}
      <div className="flex items-start gap-3">
        <span className="text-xl md:text-2xl mt-0.5">🎓</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
            {institution}
          </p>
          <span
            className={`inline-block mt-2 px-3 py-1 text-xs md:text-sm rounded-full font-medium ${
              description.includes("Pursuing")
                ? "bg-cyan-100 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400"
                : "bg-green-100 dark:bg-green-400/10 text-green-600 dark:text-green-400"
            }`}
          >
            {description}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ----------------------------
   ExperienceCard
   ---------------------------- */
const ExperienceCard = ({
  role,
  company,
  duration,
  description,
  contributions,
  technologies,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8"
  >
    <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {role}
        </h3>
        <h4 className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">
          {company}
        </h4>
      </div>
      <span className="inline-block text-right mt-2 sm:mt-0 px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full flex-shrink-0">
        {duration}
      </span>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
      Key Contributions & Technologies:
    </h5>
    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
      {contributions.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

/* ----------------------------
   Main Component
   ---------------------------- */
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute bg-purple-200/50 dark:bg-purple-900/20 top-0 -left-64 w-[50rem] h-[50rem] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute bg-indigo-200/50 dark:bg-indigo-900/20 -bottom-32 -right-32 w-[50rem] h-[50rem] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am a final-year AI & ML student at AKGEC, passionate about
            technology and problem-solving. I enjoy building intelligent digital
            solutions and continuously exploring new tools to innovate and
            improve user experiences.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/Guddyresume.pdf"
              download
              className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            My Technical Skills
          </h2>
          <div className="space-y-12">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center md:text-left">
                  {category.title}
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-wrap justify-center md:justify-start gap-3"
                >
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className={`group flex items-center gap-3 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl ${skill.shadow}`}
                      >
                        {IconComponent ? (
                          <IconComponent
                            className={`text-2xl text-gray-500 dark:text-gray-400 transition-colors duration-300 ${skill.color}`}
                            aria-hidden
                          />
                        ) : (
                          <div className="w-6 h-6 bg-gray-300 rounded" />
                        )}
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Work Experience
          </h2>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Certifications & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                  <FiArrowUpRight className="text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-gray-200">
            My Education
          </h2>
          <div className="relative max-w-3xl mx-auto">
            {educationTimeline.map((item, index) => (
              <TimelineItem key={item.title} {...item} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
