'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Your projects data
const projects = [
    {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js and Node.js',
    image: '/images/project1.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    link: 'https://project1.com'
  },
  {
    id: 2,
    title: ' Dashboard',
    description: 'Real-time analytics dashboard for admin  to alanlyis the user visit at their website ',
    image: '/images/Dashboard.png',
    tags: ['React', 'Tailwind', 'Javascript'],
    link: 'https://admin-panel-o6ui.vercel.app/'
  },
  {
    id: 3,
    title: 'AI Powered Email Classifier',
    description: 'An AI-powered Email Classifier tool using machine learning',
    image: '/images/emailClassifier.png',
    tags: ['Python', 'TensorFlow', 'React'],
    link: 'https://email-classifier-frontend-opal.vercel.app/login'
  },
  {
    id: 4,
    title: 'Securevault',
    description: 'Secure Vault is your encrypted fortress for effortlessly storing, managing, and accessing all your passwords.',
    image: '/images/Securevault.png',
    tags: ['React', 'Node.js'],
    link: 'https://transcendent-brioche-8d299e.netlify.app/'
  },
  {
    id: 5,
    title: 'SkyBae',
    description: 'A weather app that provides real-time weather updates and forecasts for any location worldwide.',
    image: '/images/Skybae.png',
    tags: ['React', 'Node.js'],
    link: 'https://skybae.vercel.app/'
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Subtle Aurora Background - Consistent with Home Page */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute bg-purple-200/50 top-1/4 -left-32 w-[40rem] h-[40rem] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute bg-indigo-200/50 top-0 -right-40 w-[40rem] h-[40rem] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bg-pink-200/50 -bottom-32 left-20 w-[40rem] h-[40rem] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of projects that showcase my passion for creating modern,
            functional, and beautiful web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="h-full rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-blue-100 dark:bg-gray-800/50 backdrop-blur-lg shadow-sm hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      initial={false}
                      animate={{ scale: hoveredId === project.id ? 1.08 : 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      View Project
                      <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                        {' '}→
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}