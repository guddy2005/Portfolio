"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiExpress,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiVercel,
  SiPrisma,
} from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

/* ----------------------------
   Data (unchanged, just reused)
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
        name: "JavaScript (ES6+)",
        icon: SiJavascript,
        color: "group-hover:text-yellow-400",
        shadow: "hover:shadow-yellow-400/30",
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
        color: "group-hover:text-blue-400",
        shadow: "hover:shadow-blue-400/30",
      },
      {
        name: "Django",
        icon: SiDjango,
        color: "group-hover:text-green-800 dark:group-hover:text-green-500",
        shadow: "hover:shadow-green-500/30",
      },
    ],
  },
  {
    title: "Databases & DevOps",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "group-hover:text-blue-600",
        shadow: "hover:shadow-blue-600/30",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "group-hover:text-green-500",
        shadow: "hover:shadow-green-500/30",
      },
      {
        name: "Git & GitHub",
        icon: SiGit,
        color: "group-hover:text-orange-600",
        shadow: "hover:shadow-orange-600/30",
      },

      {
        name: "Vercel",
        icon: SiVercel,
        color: "group-hover:text-black dark:group-hover:text-white",
        shadow: "hover:shadow-black/20 dark:hover:shadow-white/20",
      },
    ],
  },
];

const certificates = [
  {
    title: "Data Science with python",
    issuer: "Infosys Springboard",
    link: "/Datascience.pdf",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Great Learning",
    link: "/Java.pdf",
  },
  { title: "MERN Stack Development", issuer: "Udemy", link: "#" },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "#",
  },
];

const educationTimeline = [
  {
    year: "Pursuing",
    title: "Bachelor of Technology (AI&ML)",
    institution: "Ajay Kumar Garg Engineering College",
    description: "Ghaziabad, (UP)",
  },
  {
    year: "2020 - 2023",
    title: "Diploma in Computer Science & Engineering",
    institution: "Govt. Polytechnic Bijnor",
    description: "Completed with 76%.",
  },
  {
    year: "2020",
    title: "High School (Science)",
    institution: "Indian National Public School",
    description: "Completed with 73%.",
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
   TimelineItem (tweaked)
   ---------------------------- */
const TimelineItem = ({ year, title, institution, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="relative pl-8 pb-8 last:pb-0"
  >
    {/* vertical line */}
    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-indigo-200 dark:bg-indigo-900/50 -translate-x-1/2" />

    <div className="relative ml-4">
      {/* dot (safer Tailwind usage than arbitrary negative left) */}
      <div className="absolute -left-3 top-4 h-3 w-3 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-800" />

      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
        <span className="inline-block px-3 py-1 mb-4 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
          {year}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          {institution}
        </h4>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
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
        <div className="absolute bg-purple-200/50 top-0 -left-64 w-[50rem] h-[50rem] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute bg-indigo-200/50 -bottom-32 -right-32 w-[50rem] h-[50rem] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
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
            {" "}
            I am a final-year AIML student at AKGEC, passionate about technology
            and problem-solving. I enjoy building intelligent digital solutions
            and continuously exploring new tools to innovate and improve user
            experiences.{" "}
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
                        {/* Guard: if IconComponent is missing, don't crash */}
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

        {/* Internship */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Internship Experience
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Full-Stack Developer Intern
                </h3>
                <h4 className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">
                  SoftiCation Technology Pvt. Ltd.
                </h4>
              </div>
              <span className="inline-block text-right mt-2 sm:mt-0 px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full flex-shrink-0">
                June 2025 - August 2025
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              As a key contributor to the live{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                "Sweetvilla"
              </span>{" "}
              project, I successfully applied full-stack development principles
              in a fast-paced environment. I was recognized for my dedication
              and ability to quickly learn and deliver high-quality, scalable
              code that directly contributed to the project's success.
            </p>
            <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Key Contributions & Technologies:
            </h5>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Engineered and maintained robust backend services using{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Python
                </span>{" "}
                and the{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Django Framework
                </span>
                .
              </li>
              <li>
                Developed dynamic and responsive user interfaces with{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  React
                </span>
                , HTML, CSS, and{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  JavaScript
                </span>
                .
              </li>
              <li>
                Designed and integrated{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  REST APIs
                </span>{" "}
                for seamless data communication between the frontend and
                backend.
              </li>
              <li>
                Managed version control with{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Git/GitHub
                </span>{" "}
                and participated in the complete module lifecycle, from
                debugging and testing to final deployment.
              </li>
            </ul>
          </motion.div>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            My Education
          </h2>
          <div className="relative">
            {educationTimeline.map((item, index) => (
              <TimelineItem key={item.title} {...item} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
