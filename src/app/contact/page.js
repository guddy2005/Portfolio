'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

// Data remains the same
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/guddy2005',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/guddy-thakur-65398024b',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const contactInfo = [
  { icon: <EnvelopeIcon className="w-8 h-8 text-indigo-500" />, label: 'Email', value: 'guddy0004@gmail.com', link: 'mailto:guddy0004@gmail.com' },
  { icon: <PhoneIcon className="w-8 h-8 text-indigo-500" />, label: 'Phone', value: '+91 9310459187', link: 'tel:+919310459187' },
  { icon: <MapPinIcon className="w-8 h-8 text-indigo-500" />, label: 'Location', value: 'Noida, UP, India', link: 'https://maps.google.com/?q=Noida,Uttar+Pradesh,India' },
];


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute bg-purple-200/50 top-0 -left-64 w-[50rem] h-[50rem] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bg-indigo-200/50 -bottom-32 -right-32 w-[50rem] h-[50rem] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? I'd love to connect with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-3 bg-gray-200 dark:bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 bg-white dark:bg-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-indigo-500" placeholder="Name" />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400">Name</label>
              </div>
              <div className="relative">
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 text-gray-900  bg-white dark:bg-gray-900  dark:text-white placeholder-transparent focus:outline-none focus:border-indigo-500" placeholder="Email" />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400">Email</label>
              </div>
              <div className="relative">
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900  text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-indigo-500" placeholder="Subject" />
                <label htmlFor="subject" className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400">Subject</label>
              </div>
              <div className="relative pt-2">
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4} className="peer w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900  text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-indigo-500" placeholder="Your Message" />
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400">Your Message</label>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transform transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && <p className="text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>}
              {submitStatus === 'error' && <p className="text-red-600 dark:text-red-400 text-center">An error occurred. Please try again.</p>}
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info) => (
              <a key={info.label} href={info.link} target="_blank" rel="noopener noreferrer" className="group flex items-start space-x-5 p-5 bg-gray-200 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors duration-300">
                <div className="flex-shrink-0">{info.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{info.label}</h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{info.value}</p>
                </div>
              </a>
            ))}
            <div className="flex justify-center space-x-6 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}