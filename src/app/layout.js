"use client";
import { Inter, Manrope, Calistoga } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import PageTransition from "../components/animations/PageTransition";
import Loading from "../components/ui/Loading";
import { personalInfo } from "../lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-calistoga",
});
const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body
        className={`${inter.variable} ${manrope.variable} ${calistoga.variable} bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <AnimatePresence>
          {isLoading ? (
            <motion.div key="loader" exit={{ opacity: 0 }}>
              <Loading />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Link
                        href="/"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        {personalInfo.name}
                      </Link>
                    </motion.div>
                    <div className="hidden md:flex items-center space-x-8">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Link
                            href={item.path}
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                      <motion.button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isDarkMode ? (
                          <SunIcon className="h-5 w-5 text-yellow-500" />
                        ) : (
                          <MoonIcon className="h-5 w-5 text-gray-700" />
                        )}
                      </motion.button>
                    </div>
                    <div className="md:hidden flex items-center">
                      <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300"
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {isMenuOpen ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          )}
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="md:hidden overflow-hidden"
                    >
                      <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                        {navItems.map((item, index) => (
                          <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <Link
                              href={item.path}
                              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                        <motion.button
                          onClick={toggleTheme}
                          className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: navItems.length * 0.1,
                          }}
                        >
                          {isDarkMode ? "Light Mode" : "Dark Mode"}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>

              <main className="pt-16">
                <PageTransition>{children}</PageTransition>
              </main>

              <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600 dark:text-gray-400">
                      © {new Date().getFullYear()} {personalInfo.name}. All
                      rights reserved.
                    </div>
                    <div className="flex space-x-6">
                      {Object.entries(personalInfo.socialLinks).map(
                        ([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          >
                            {platform.charAt(0).toUpperCase() +
                              platform.slice(1)}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </footer>

              <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute">
                <div className="fixed inset-0 opacity-0 dark:opacity-[0.03]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
