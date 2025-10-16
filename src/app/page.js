"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

// Install react-icons: npm install react-icons
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiLinkedin, // Added social icons
} from "react-icons/si";
import Image from "next/image";

// Animation variants (No changes)
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// Data (No changes)
const skills = [
  { name: "React", icon: <SiReact className="text-sky-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="dark:text-white text-black" />,
  },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
];
const featuredProjects = [
  {
    title: "AI-Powered Email Classifier",
    description:
      "A smart inbox that automatically categorizes emails using natural language processing, significantly improving productivity.",
    tags: ["React", "Python", "Express.js", "MongoDB"],
    imageUrl: "/images/emailClassifier.png",
  },
  {
    title: "Scalable Dashboard",
    description:
      "A multi-vendor marketplace with real-time inventory management, secure payments via Stripe, and a custom admin dashboard.",
    tags: ["React", "Node.js", "Material UI"],
    imageUrl: "/images/Dashboard.png",
  },
];

export default function Home() {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 font-body">
      {/* --- HERO SECTION REFINEMENT --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-400/20 dark:bg-primary-500/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-400/20 dark:bg-primary-500/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 lg:px-8 z-10 text-center"
        >
          <motion.h1
            variants={fadeIn}
            // Humne yahan height set ki hai taaki page shift na ho jab text delete ho
            className="font-heading text-4xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tighter text-neutral-800 dark:text-neutral-100 h-[1.2em]"
          >
            <TypeAnimation
              // Yeh sequence batata hai ki kya-kya type karna hai
              sequence={[
                "Guddy",
                2000, // 2 second rukega
                "",
                1000,
              ]}
              wrapper="span" // Taki styles apply ho
              speed={20} // Typing ki speed
              deletionSpeed={40} // Deletion ki speed
              cursor={true} // Blinking cursor dikhega
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="font-heading text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-8 font-semibold"
          >
            Full Stack Developer & Digital Architect
          </motion.p>
          {/* Increased max-width for better spacing */}
          <motion.p
            variants={fadeIn}
            className="text-lg max-w-3xl mx-auto mb-10 text-neutral-600 dark:text-neutral-400"
          >
            I transform complex ideas into elegant, high-performance digital
            solutions that are a joy to use.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex justify-center items-center gap-4"
          >
            <Link
              href="/portfolio"
              className="px-7 py-3 bg-primary-500 text-white font-bold rounded-full shadow-lg hover:bg-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Link>
          </motion.div>

          {/* NEW: Social links to make the section feel more complete */}
          <motion.div
            variants={fadeIn}
            className="mt-12 flex justify-center items-center gap-6"
          >
            <a
              href="https://github.com/guddy2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <SiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/guddy-thakur-65398024b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <SiLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- PADDING INCREASED IN ALL SECTIONS BELOW --- */}

      {/* About Me Section */}
      <section id="about" className="py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            <motion.div
              variants={fadeIn}
              className="lg:w-2/5 flex justify-center"
            >
              <div className="w-72 h-80 rounded-3xl relative shadow-xl transform -rotate-3 hover:rotate-2 transition-transform duration-500 ease-in-out">
                {/* This container needs to be relative for the `fill` prop to work */}
                <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-3xl transform rotate-6 border-4 border-neutral-50 dark:border-neutral-950 overflow-hidden">
                  {/* The Image component now fills the parent div */}
                  <Image
                    src={"/images/Profile.jpg"}
                    alt="A professional photo of Guddy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="lg:w-3/5 text-center lg:text-left"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 text-neutral-800 dark:text-neutral-100">
                Digital Artisan & Problem Solver
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                I am a passionate developer driven by a desire to build things
                that matter. My approach combines clean, scalable code with
                user-centric design to create applications that are not just
                functional, but delightful to interact with.
              </p>
              <div className="flex justify-center lg:justify-start items-center gap-4">
                <a
                  href="/Guddyresume.pdf"
                  download
                  className="px-6 py-3 bg-neutral-800 text-white dark:bg-neutral-100 dark:text-neutral-900 font-bold rounded-full hover:scale-105 transform transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 bg-neutral-100 dark:bg-neutral-900">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6 lg:px-8 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
            My Technical Arsenal
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
            I use a curated set of modern tools to bring ideas to life.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeIn}
                className="flex flex-col items-center gap-3 text-center group"
              >
                <div className="text-5xl transform transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section id="portfolio" className="py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="container mx-auto px-6 lg:px-8"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100">
            Featured Case Studies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeIn}
                className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden group border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-2xl hover:border-primary-500/30 flex flex-col"
              >
                <Link
                  href="/portfolio"
                  className="block flex flex-col flex-grow"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-heading text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300 text-xs font-bold px-3 py-1 rounded-full tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section
        id="contact-cta"
        className="py-28 bg-neutral-100 dark:bg-neutral-900"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-8 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            Have a project in mind, or just want to connect? I'd love to hear
            from you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary-500 text-white font-bold rounded-full shadow-lg hover:bg-primary-600 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
