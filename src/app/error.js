"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Button from "../components/ui/Button.js";

export default function Error({ error, reset }) {
  useEffect(() => {
  
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
        <div className="space-x-4">
          <Button onClick={reset} variant="default" size="lg">
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            size="lg"
          >
            Go Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
