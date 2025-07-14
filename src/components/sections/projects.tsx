'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Calendar, Users, Star } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'EPassport ERA System',
    category: 'Enterprise Application',
    description: 'Comprehensive passport and document management system with advanced media streaming capabilities and third-party integrations for European markets.',
    achievements: [
      'Led full-stack development team',
      'Integrated media streaming services',
      'Built third-party endpoints for France and UK',
      'Implemented real-time document processing'
    ],
    technologies: ['React', 'Azure Functions', '.NET Core', 'Power Apps', 'Azure AI', 'DevOps'],
    status: 'Production',
    year: '2023-2024',
    impact: 'Serving thousands of users across Europe'
  },
  {
    title: 'Horse Pedigree Application',
    category: 'Data Visualization',
    description: 'Interactive horse pedigree visualization system with 5-level genealogy tracking using Power Platform Components Framework.',
    achievements: [
      'Built custom PCF component in React',
      'Implemented React Query for data management',
      'Created interactive 5-level pedigree tree',
      'Optimized performance for large datasets'
    ],
    technologies: ['React', 'Power Platform', 'PCF', 'React Query', 'TypeScript'],
    github: 'https://github.com/faizanazhar/horse-pedigree',
    live: 'https://horse-pedigree.demo.com',
    status: 'Completed',
    year: '2023'
  },
  {
    title: 'AI-Powered Document Chat',
    category: 'AI/ML Solution',
    description: 'POC application that enables natural language conversations with documents using Azure OpenAI, resulting in successful client acquisition.',
    achievements: [
      'Integrated Azure OpenAI and Document Intelligence',
      'Implemented Azure Cognitive Search',
      'Built intuitive chat interface',
      'Led to successful client conversion'
    ],
    technologies: ['Azure OpenAI', 'Azure Document Intelligence', 'Azure Cognitive Search', 'React', 'FastAPI', 'Python'],
    github: 'https://github.com/faizanazhar/ai-document-chat',
    status: 'POC Success',
    year: '2024',
    impact: 'Led to new client acquisition'
  },
  {
    title: 'SQL Query to Natural Language',
    category: 'Open Source',
    description: 'Custom Dynamics 365 control that converts SQL queries into natural language using Hugging Face models.',
    achievements: [
      'Built custom Dynamics 365 PCF control',
      'Integrated Hugging Face transformers',
      'Implemented Docker containerization',
      'Open-sourced for community use'
    ],
    technologies: ['Dynamics 365', 'React', 'FastAPI', 'Hugging Face', 'Docker', 'Python'],
    github: 'https://github.com/faizanazhar/sql-to-text',
    status: 'Open Source',
    year: '2023'
  },
  {
    title: 'Online Hotel Management System',
    category: 'Web Application',
    description: 'Comprehensive hotel management platform with booking system, payment integration, and administrative dashboard.',
    achievements: [
      'Built complete booking and payment system',
      'Implemented real-time availability tracking',
      'Created admin dashboard for hotel management',
      'Integrated multiple payment gateways'
    ],
    technologies: ['Node.js', 'React', 'Firebase', 'Payment APIs', 'Real-time Database'],
    status: 'Production',
    year: '2021'
  },
  {
    title: 'Online Education System',
    category: 'EdTech Platform',
    description: 'Complete educational platform developed for Saudi client with course management, student tracking, and assessment tools.',
    achievements: [
      'Built scalable serverless architecture',
      'Implemented GraphQL API',
      'Created both web and mobile apps',
      'Delivered on time and budget'
    ],
    technologies: ['Node.js', 'React', 'React Native', 'GraphQL', 'Serverless', 'Firebase'],
    status: 'Production',
    year: '2020',
    impact: 'Serving 10,000+ students'
  }
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-padding mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work spanning enterprise applications, AI solutions, and open-source contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">
                    {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Open Source' ? 'bg-blue-500/20 text-blue-400' :
                    project.status === 'POC Success' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                      <span className="text-sm text-muted-foreground">&bull;</span>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                        aria-label="View Live Project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                {project.impact && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-muted-foreground">{project.impact}</span>
                  </div>
                )}

                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-background/50 text-muted-foreground px-2 py-1 rounded text-xs border border-border hover:border-primary/50 hover:text-primary transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="https://github.com/faizanazhar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-card border border-border px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects</span>
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}