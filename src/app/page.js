"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiLinkedin,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPython,
  SiDjango,
  SiKubernetes,
  SiVercel,
  SiPostman,
  SiGit,
  SiMysql,
  SiLinux,
  SiRedis,
  SiFirebase,
  SiTensorflow,
  SiNumpy,
  SiFigma,
  SiOpenai,
  SiFramer,
  SiBootstrap,
  SiSass,
  SiRedux,
  SiNestjs,
  SiSupabase,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import {
  HiDownload,
  HiMail,
  HiCode,
  HiSparkles,
  HiAcademicCap,
  HiLightningBolt,
  HiCursorClick,
  HiChip,
} from "react-icons/hi";

// Skill Bubble with individual icon glow
const SkillBubble = ({ Icon, color, size = 18 }) => {
  if (!Icon) return null;
  return (
    <div
      className={`p-2.5 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-full ${color} shadow-md dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] backdrop-blur-md hover:scale-110 transition-transform`}
    >
      <Icon size={size} />
    </div>
  );
};

// FIXED ORBIT: Icons now rotate on the ring and stay upright
const Orbit = ({
  radius,
  duration,
  reverse = false,
  skills,
  orbitColor,
  lightOrbitColor,
  glowClass = "orbit-glow",
}) => {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`absolute rounded-full border border-dashed flex items-center justify-center border-indigo-200 dark:border-indigo-400/40 ${glowClass}`}
      style={{
        width: radius * 2,
        height: radius * 2,
        "--light-orbit": lightOrbitColor || "rgba(99, 102, 241, 0.3)",
        "--dark-orbit": orbitColor || "rgba(99, 102, 241, 0.2)",
      }}
    >
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * (2 * Math.PI);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            {/* Counter-rotation to keep icons upright */}
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              <SkillBubble Icon={skill.icon} color={skill.color} />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default function Home() {
  // All your skills preserved
  const innerSkills = [
    { icon: SiReact, color: "text-sky-400" },
    { icon: SiNodedotjs, color: "text-green-500" },
    { icon: SiJavascript, color: "text-yellow-400" },
    { icon: SiMongodb, color: "text-green-600" },
  ];

  const middleSkills = [
    { icon: SiNextdotjs, color: "text-gray-800 dark:text-white" },
    { icon: SiExpress, color: "text-gray-600 dark:text-gray-300" },
    { icon: SiTypescript, color: "text-blue-500" },
    { icon: SiTailwindcss, color: "text-cyan-400" },
    { icon: SiPython, color: "text-yellow-500" },
    { icon: SiGit, color: "text-orange-500" },
  ];

  const outerSkills = [
    { icon: SiDocker, color: "text-blue-400" },
    { icon: SiOpenai, color: "text-emerald-500" },
    { icon: SiDjango, color: "text-green-700" },
    { icon: SiPostgresql, color: "text-blue-600" },
    { icon: SiMysql, color: "text-blue-500" },
    { icon: SiGithub, color: "text-gray-800 dark:text-white" },
    { icon: SiPostman, color: "text-orange-500" },
  ];

  const outermostSkills = [
    { icon: SiLinux, color: "text-yellow-600 dark:text-yellow-500" },
    { icon: SiRedis, color: "text-red-500" },
    { icon: SiFirebase, color: "text-yellow-500" },
    { icon: SiVercel, color: "text-gray-800 dark:text-white" },
    { icon: SiTensorflow, color: "text-orange-500" },
    { icon: SiNumpy, color: "text-blue-400" },
    { icon: SiFigma, color: "text-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030303] text-gray-900 dark:text-white selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Background Ambient Glow */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-400/20 dark:bg-indigo-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Left Side Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-white/5 border border-indigo-200 dark:border-white/10 mb-6 backdrop-blur-md">
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                Guddy Thakur • AI & ML Engineer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-gray-900 dark:text-white">
              HI, I'M{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                GUDDY
              </span>
            </h1>
            <div className="text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-8 h-8">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "AI & ML Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mb-10 leading-relaxed border-l-2 border-indigo-500/30 pl-6">
              B.Tech in AI & ML Student at AKGEC. I architect scalable backend
              systems and build intelligent solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/Guddyresume.pdf"
                download
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-black rounded-2xl hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
              >
                <HiDownload size={20} /> MY RESUME
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-300 dark:border-white/10 rounded-2xl font-black hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-gray-900 dark:text-white"
              >
                LET'S CONNECT
              </Link>
            </div>
          </motion.div>

          {/* Right Side - GLOWING ORBIT SYSTEM (Hidden on mobile) */}
          <div className="relative hidden md:flex items-center justify-center h-[500px] md:h-[650px]">
            {/* Center Label with Pulse Glow */}
            <div className="absolute z-10 flex flex-col items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-black text-gray-200 dark:text-white/20 tracking-widest uppercase select-none">
                SKILLS
              </h2>
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute text-5xl md:text-6xl font-black text-indigo-400 dark:text-indigo-500 blur-lg uppercase tracking-widest select-none"
              >
                SKILLS
              </motion.div>
            </div>

            {/* Orbits */}
            <Orbit
              radius={90}
              duration={15}
              skills={innerSkills}
              orbitColor="rgba(99, 102, 241, 0.3)"
              lightOrbitColor="rgba(99, 102, 241, 0.4)"
              glowClass="orbit-glow"
            />
            <Orbit
              radius={160}
              duration={25}
              reverse={true}
              skills={middleSkills}
              orbitColor="rgba(139, 92, 246, 0.2)"
              lightOrbitColor="rgba(139, 92, 246, 0.3)"
              glowClass="orbit-glow-purple"
            />
            <Orbit
              radius={230}
              duration={35}
              skills={outerSkills}
              orbitColor="rgba(168, 85, 247, 0.15)"
              lightOrbitColor="rgba(168, 85, 247, 0.25)"
              glowClass="orbit-glow-violet"
            />
            <Orbit
              radius={300}
              duration={45}
              reverse={true}
              skills={outermostSkills}
              orbitColor="rgba(192, 132, 252, 0.1)"
              lightOrbitColor="rgba(192, 132, 252, 0.2)"
              glowClass="orbit-glow-fuchsia"
            />
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section className="py-24 px-6 bg-white dark:bg-[#050505]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center text-indigo-600 dark:text-indigo-500 uppercase tracking-widest">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ExperienceCard
              date="Nov 2025 - Present"
              role="Full Stack Intern"
              company="Rabblehub Venture"
              desc="Architected scalable backend systems with Node.js. Optimized MongoDB queries leading to 25% faster response times."
            />
            <ExperienceCard
              date="June 2025 - Aug 2025"
              role="Full Stack Developer Intern"
              company="SoftiCation Technology"
              desc="Built SEO Automation tools using MERN. Designed responsive UI screens and integrated real-time REST APIs."
            />
          </div>
        </div>
      </section>

      {/* 3. MY STACK SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-[#030303] relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-16">
            <HiSparkles
              className="text-gray-400 dark:text-gray-500"
              size={24}
            />
            <span className="text-gray-500 dark:text-gray-400 font-semibold tracking-widest uppercase">
              My Stack
            </span>
          </div>

          {/* Stack Categories */}
          <div className="space-y-20">
            {/* FRONTEND */}
            <StackCategory
              title="FRONTEND"
              skills={[
                {
                  icon: SiJavascript,
                  name: "Javascript",
                  color: "text-yellow-400",
                },
                { icon: SiReact, name: "React", color: "text-sky-400" },
                { icon: SiRedux, name: "Redux", color: "text-purple-500" },
                {
                  icon: SiTailwindcss,
                  name: "Tailwind CSS",
                  color: "text-cyan-400",
                },
                {
                  icon: SiFramer,
                  name: "Framer Motion",
                  color: "text-pink-500",
                },
                { icon: SiSass, name: "SASS", color: "text-pink-400" },
                {
                  icon: SiBootstrap,
                  name: "Bootstrap",
                  color: "text-purple-600",
                },
              ]}
            />

            {/* BACKEND */}
            <StackCategory
              title="BACKEND"
              skills={[
                { icon: SiNodedotjs, name: "Node.Js", color: "text-green-500" },
                {
                  icon: SiExpress,
                  name: "Express.Js",
                  color: "text-gray-500 dark:text-gray-300",
                },
                { icon: SiPython, name: "Python", color: "text-yellow-500" },
                { icon: SiDjango, name: "Django", color: "text-green-700" },
              ]}
            />

            {/* DATABASE */}
            <StackCategory
              title="DATABASE"
              skills={[
                { icon: SiMysql, name: "MySQL", color: "text-blue-400" },
                {
                  icon: SiPostgresql,
                  name: "PostgreSQL",
                  color: "text-blue-500",
                },
                { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
              ]}
            />

            {/* TOOLS */}
            <StackCategory
              title="TOOLS"
              skills={[
                { icon: SiDocker, name: "Docker", color: "text-blue-400" },
                { icon: SiPostman, name: "Postman", color: "text-orange-500" },
                {
                  icon: SiVercel,
                  name: "Vercel",
                  color: "text-gray-800 dark:text-white",
                },
                {
                  icon: SiGithub,
                  name: "GitHub",
                  color: "text-gray-800 dark:text-white",
                },
                {
                  icon: VscCode,
                  name: "VS Code",
                  color: "text-blue-500",
                },
                { icon: SiFigma, name: "Figma", color: "text-pink-500" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4. KEY HIGHLIGHTS SECTION */}
      <section className="py-24 bg-white dark:bg-[#050505] relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - My Journey & Mission */}
            <div className="space-y-8">
              {/* My Journey Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl">
                    <SiReact className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Journey
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  I am a passionate software developer with a Bachelor of
                  Technology in Artificial Intelligence & Machine Learning from
                  Ajay Kumar Garg Engineering College, Ghaziabad. With a strong
                  foundation in web development using{" "}
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    React
                  </span>{" "}
                  and{" "}
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    Next.js
                  </span>
                  , I thrive on creating dynamic and intuitive applications that
                  enhance user experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My expertise extends to various technologies, including{" "}
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    Node.js
                  </span>{" "}
                  and{" "}
                  <span className="text-orange-500 dark:text-orange-400 font-semibold">
                    MongoDB
                  </span>
                  , allowing me to build robust, scalable applications tailored
                  to client needs. I have a diverse portfolio that includes
                  developing AI-powered tools and efficient automation
                  platforms.
                </p>
              </motion.div>

              {/* My Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl">
                    <HiLightningBolt className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Mission
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I am dedicated to solving real-world problems through
                  technology, and I constantly seek opportunities to learn and
                  grow in this ever-evolving field. My goal is to contribute to
                  projects that not only meet functional requirements but also
                  provide seamless interactions for users, creating applications
                  that inspire and engage.
                </p>
              </motion.div>
            </div>

            {/* Right Side - Key Highlights */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Key Highlights
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
              </div>

              {/* Highlight Cards Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <HighlightCard
                  icon={HiAcademicCap}
                  iconBg="from-orange-500 to-pink-500"
                  title="Education"
                  subtitle="B.Tech in AI & ML"
                />
                <HighlightCard
                  icon={SiReact}
                  iconBg="from-pink-500 to-rose-500"
                  title="MERN Expert"
                  subtitle="Full-Stack Development"
                />
                <HighlightCard
                  icon={HiChip}
                  iconBg="from-orange-400 to-amber-500"
                  title="ML Enthusiast"
                  subtitle="AI & Machine Learning"
                />
                <HighlightCard
                  icon={HiCursorClick}
                  iconBg="from-purple-500 to-indigo-500"
                  title="Focus"
                  subtitle="User-Centric Solutions"
                />
              </div>

              {/* Current Focus Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-[#1a1a1a] dark:to-[#2a2020] border border-gray-200 dark:border-white/10 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-500/20 rounded-lg">
                    <HiChip
                      className="text-orange-500 dark:text-orange-400"
                      size={20}
                    />
                  </div>
                  <span className="text-gray-900 dark:text-white font-semibold">
                    Current Focus
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Advancing career through inspiring projects that push the
                  boundaries of technology and create meaningful user
                  experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EDUCATION SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-[#030303] relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h2 className="text-[15vw] font-black text-gray-200/50 dark:text-white/[0.03] tracking-widest uppercase">
            EDUCATION
          </h2>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <p className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-widest uppercase mb-2">
              Academic Journey
            </p>
            <span className="inline-block px-4 py-1 border border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 text-sm rounded-full">
              2020 - 2027
            </span>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-400" />

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {/* B.Tech */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative pl-10 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-8 top-1 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-[0_0_20px_rgba(34,211,238,0.6)] z-10 ring-4 ring-gray-50 dark:ring-[#030303]" />

                {/* Card Container */}
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700/50 shadow-lg">
                  {/* Year Badge */}
                  <div className="inline-block mb-3 px-3 md:px-4 py-1 bg-cyan-100 dark:bg-cyan-400/10 border border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 text-xs md:text-sm font-medium rounded-full">
                    2023 - 2027
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl mt-0.5">🎓</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        Bachelor of Technology (AI & ML)
                      </h3>
                      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1">
                        Ajay Kumar Garg Engineering College, Ghaziabad
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 bg-cyan-100 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 text-xs md:text-sm rounded-full font-medium">
                        Pursuing
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Diploma */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-10 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-8 top-1 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-[0_0_20px_rgba(34,211,238,0.6)] z-10 ring-4 ring-gray-50 dark:ring-[#030303]" />

                {/* Card Container */}
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700/50 shadow-lg">
                  {/* Year Badge */}
                  <div className="inline-block mb-3 px-3 md:px-4 py-1 bg-cyan-100 dark:bg-cyan-400/10 border border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 text-xs md:text-sm font-medium rounded-full">
                    2020 - 2023
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl mt-0.5">🎓</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        Diploma in Computer Science & Engineering
                      </h3>
                      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1">
                        Govt. Polytechnic Bijnor
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 bg-green-100 dark:bg-green-400/10 text-green-600 dark:text-green-400 text-xs md:text-sm rounded-full font-medium">
                        Completed with 76%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* High School */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative pl-10 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-8 top-1 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-[0_0_20px_rgba(34,211,238,0.6)] z-10 ring-4 ring-gray-50 dark:ring-[#030303]" />

                {/* Card Container */}
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700/50 shadow-lg">
                  {/* Year Badge */}
                  <div className="inline-block mb-3 px-3 md:px-4 py-1 bg-cyan-100 dark:bg-cyan-400/10 border border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 text-xs md:text-sm font-medium rounded-full">
                    2020
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl mt-0.5">🎓</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        High School (Science)
                      </h3>
                      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1">
                        Indian National Public School
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 bg-green-100 dark:bg-green-400/10 text-green-600 dark:text-green-400 text-xs md:text-sm rounded-full font-medium">
                        Completed with 73%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER / JOIN NETWORK */}
      <footer className="py-28 bg-white dark:bg-[#030303] text-gray-900 dark:text-white text-center relative z-10 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          {/* Glowing Icon */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <SiGithub size={44} className="text-white" />
            </div>
          </div>

          {/* Heading with Glow */}
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight uppercase leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Join Networks
            </span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-xl max-w-2xl mx-auto px-6 mb-12">
            "Let's innovate together and build groundbreaking tech solutions."
          </p>

          {/* Social Links with Glow */}
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/guddy2005"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:border-gray-400 dark:hover:border-white/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
              <SiGithub
                size={36}
                className="relative text-gray-800 dark:text-white group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://linkedin.com/in/guddy-thakur-65398024b"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
              <SiLinkedin
                size={36}
                className="relative text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="mailto:Guddy0004@gmail.com"
              className="group relative p-5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:border-red-400 dark:hover:border-red-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
              <HiMail
                size={36}
                className="relative text-red-500 dark:text-red-400 group-hover:scale-110 transition-transform"
              />
            </a>
          </div>

          {/* Footer Credits */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 max-w-md mx-auto">
            <p className="text-gray-400 dark:text-gray-600 text-sm">
              Designed & Built by
            </p>
            <p className="text-gray-900 dark:text-white font-bold text-lg mt-1">
              Guddy Thakur © {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

// Support Components
function HighlightCard({ icon: Icon, iconBg, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-center hover:border-indigo-300 dark:hover:border-white/20 transition-all group"
    >
      <div
        className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
      >
        <Icon className="text-white" size={24} />
      </div>
      <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1">
        {title}
      </h4>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </motion.div>
  );
}

function StackCategory({ title, skills }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
      {/* Category Title */}
      <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
        {title}
      </h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 group">
            <skill.icon
              size={28}
              className={`${skill.color} group-hover:scale-110 transition-transform`}
            />
            <span className="text-gray-800 dark:text-white font-medium text-lg group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ date, role, company, desc }) {
  return (
    <div className="p-8 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-all group shadow-sm hover:shadow-md">
      <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm uppercase font-bold">
        {date}
      </span>
      <h3 className="text-2xl font-black text-gray-900 dark:text-white mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
        {role}
      </h3>
      <p className="text-gray-500 font-bold tracking-widest uppercase text-xs mt-1 mb-4">
        {company}
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
