'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Building } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer (Full Stack) & Technical Consultant',
    company: 'Tekenable Ltd',
    location: 'Remote, Ireland',
    duration: 'Feb 2022 - Present',
    type: 'Full-time',
    description: 'Leading development and technical consulting for complex enterprise solutions',
    achievements: [
      'Successfully delivered and led the development of EPassport ERA system',
      'Developed and managed Power Apps solutions pipelines for multiple environments',
      'Created custom connectors in C# for Power Apps integration',
      'Built media stream service for ERA and third-party endpoints for France and UK',
      'Developed horse pedigree application for 5 levels using PCF in React with React Query',
      'Implemented CI/CD pipelines for Azure Functions and Power Platform Components',
      'Created POC (chat with docs) using Azure OpenAI that led to successful client acquisition'
    ],
    technologies: [
      'Azure OpenAI', 'Azure Document Intelligence', 'Azure Cognitive Search', 
      'React', 'FastAPI', '.NET Core', 'Python', 'Angular', 'Power Apps', 
      'Azure Functions', 'DevOps', 'Docker'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'Code Breakers',
    location: 'Remote, USA',
    duration: 'Oct 2020 - Jan 2022',
    type: 'Full-time',
    description: 'Developed comprehensive web and mobile applications for various clients',
    achievements: [
      'Built complete online hotel management system with booking and payment integration',
      'Developed online taxi system with real-time tracking and GPS integration',
      'Implemented responsive designs and mobile-first approach',
      'Integrated Google Maps API for location-based services'
    ],
    technologies: [
      'Node.js', 'React', 'React Native', 'Google Maps API', 'Firebase'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'AlphaSquad',
    location: 'Onsite, Islamabad',
    duration: 'Jan 2020 - Sep 2020',
    type: 'Full-time',
    description: 'Developed and deployed major educational platform for international client',
    achievements: [
      'Built comprehensive Online Education System for Saudi client',
      'Implemented modern serverless architecture using GraphQL',
      'Developed both web and mobile applications',
      'Delivered project on time and within budget'
    ],
    technologies: [
      'Node.js', 'React', 'React Native', 'Serverless', 'GraphQL', 'Firebase'
    ]
  }
];

const internships = [
  {
    title: 'Cybersecurity Analyst Intern',
    company: 'National Centre for Cyber Security, Air University',
    location: 'Islamabad',
    duration: 'May 2020 - Jul 2020',
    description: 'Specialized in malware analysis and reverse engineering',
    achievements: [
      'Analyzed malware using IDA Pro and Ghidra',
      'Examined and understood malicious executable files',
      'Contributed to cybersecurity research projects'
    ],
    technologies: ['IDA Pro', 'Ghidra', 'Malware Analysis', 'Reverse Engineering']
  },
  {
    title: 'Machine Learning Research Intern',
    company: 'Air University Center of Smart Data',
    location: 'Islamabad',
    duration: 'Sep 2019 - Jul 2020',
    description: 'Research focused on biomedical text analysis and drug interaction prediction',
    achievements: [
      'Trained ML models to identify drug-drug interactions (DDIs) in biomedical texts',
      'Achieved F1-score of 73%, comparable to leading research in the domain',
      'Published research findings and contributed to academic papers'
    ],
    technologies: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn', 'TensorFlow']
  }
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles and the impact I&apos;ve made
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-8">Professional Roles</h3>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-border"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm border border-border hover:border-primary/50 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internships & Research */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-semibold mb-8">Internships & Research</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2">{internship.title}</h4>
                <div className="flex flex-col space-y-2 text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">{internship.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{internship.duration}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{internship.description}</p>
                
                <div className="space-y-3">
                  <ul className="space-y-1">
                    {internship.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-1">
                    {internship.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}