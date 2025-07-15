'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import { personalInfo } from '../../data/personal-info';

const About: React.FC = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "7+ Years Experience",
      description: "Deep expertise in modern web technologies"
    },
    {
      icon: FaUsers,
      title: "Team Leadership",
      description: "Led multiple development teams successfully"
    },
    {
      icon: FaLightbulb,
      title: "Innovation Focus",
      description: "Continuous learning and adapting to new technologies"
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "60% reduction in loading times achieved"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Building Digital Experiences That Matter
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                With over 7 years of experience in software engineering, I specialize in creating 
                scalable web applications using cutting-edge technologies. My journey has taken me 
                through various domains including fintech, e-commerce, and healthcare.
              </p>
              
              <p>
                I&apos;m passionate about clean code, innovative solutions, and mentoring the next 
                generation of developers. My expertise spans across React, Vue.js, TypeScript, 
                and modern architectural patterns like micro-frontends.
              </p>
              
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical workshops and mentoring sessions.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a 
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Let&apos;s Connect
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="text-white text-xl" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
