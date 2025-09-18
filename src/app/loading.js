'use client';

import { motion } from 'framer-motion';

const loadingCircleVariants = {
  start: {
    y: "0%"
  },
  end: {
    y: "100%"
  }
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut"
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="text-center">
        <motion.div
          className="flex justify-center space-x-2"
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          {[1, 2, 3].map((_, i) => (
            <motion.span
              key={i}
              className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            />
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-sm text-gray-600 dark:text-gray-400"
        >
          Loading amazing content...
        </motion.p>
      </div>
    </div>
  );
}
