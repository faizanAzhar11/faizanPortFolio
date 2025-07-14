'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Users, Lightbulb, Award } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Expertise',
    description: 'Expert in modern web technologies including React, Next.js, .NET Core, and cloud platforms.'
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Led development teams and successfully delivered complex projects for international clients.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Passionate about AI/ML integration and creating cutting-edge solutions using Azure AI services.'
  },
  {
    icon: Award,
    title: 'Microsoft Certified',
    description: 'Multiple Microsoft certifications in Azure AI, Data Science, and Power Platform.'
  }
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated software developer with a passion for creating high-quality products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated software developer who loves creating high-quality products in competitive environments. 
                Currently working as a <strong className="text-foreground">Senior Software Engineer & Technical Consultant</strong> at 
                Tekenable Ltd, where I lead development teams and deliver innovative solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across <strong className="text-foreground">full-stack development</strong>, 
                <strong className="text-foreground"> cloud architecture</strong>, and 
                <strong className="text-foreground"> AI/ML integration</strong>. I have successfully delivered 
                projects ranging from enterprise applications to AI-powered solutions, consistently exceeding client expectations.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With a Bachelor&apos;s degree in Software Engineering from Air University Islamabad and multiple Microsoft certifications, 
                I bring both theoretical knowledge and practical experience to every project. I&apos;m passionate about innovation and 
                always seeking new challenges and opportunities to grow.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg">
                <span className="font-medium">3+ Years Experience</span>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg">
                <span className="font-medium">50+ Projects Delivered</span>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg">
                <span className="font-medium">Microsoft Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '5', label: 'Certifications' },
            { number: '10+', label: 'Technologies' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}