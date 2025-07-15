'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My professional journey and roles in the software engineering industry.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline */}
                <div className="md:w-1/3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-white text-xl mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {exp.position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                      {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                      <span>{exp.location}</span>
                      {exp.remote && (
                        <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded">Remote</span>
                      )}
                    </p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:w-2/3">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-600 dark:text-gray-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {index !== experiences.length - 1 && (
                <div className="absolute left-1/3 top-full h-12 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
