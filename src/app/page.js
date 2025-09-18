'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants remain the same, they work well
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    // Set explicit backgrounds for both light and dark modes
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Modern "Aurora" Background for LIGHT THEME ONLY */}
        <div className="absolute inset-0 -z-10 dark:hidden">
          <div className="absolute bg-purple-200/50 top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bg-indigo-200/50 top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bg-pink-200/50 -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Original Background for DARK THEME ONLY */}
        <div className="absolute inset-0 -z-10 hidden dark:block">
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
           <div className="absolute inset-0 backdrop-blur-sm" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 
            bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            dark:bg-none dark:text-white"
          >
            Hi, I'm <span className="dark:text-blue-400">GUDDY</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-8 font-medium"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            I create elegant solutions to complex problems, combining clean code with
            beautiful design to build exceptional digital experiences.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex justify-center items-center space-x-4"
          >
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300
              dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-indigo-500 text-indigo-500 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-colors duration-300
              dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}