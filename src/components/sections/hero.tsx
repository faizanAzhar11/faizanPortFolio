'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent)]" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce-slow"></div>

      <div className="container-padding mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-500/20 shadow-2xl transition-transform duration-300 group-hover:scale-105 bg-primary-100 dark:bg-primary-900">
                {/* Using a div with initials as fallback since image might not exist */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700 text-white text-4xl font-bold">
                  FA
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
                Faizan Azhar
              </span>
            </h1>
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                Senior Full Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                AI Engineer & Technical Consultant
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I create high-quality, scalable solutions using modern technologies like{' '}
            <span className="text-primary-600 dark:text-primary-400 font-medium">Azure</span>,{' '}
            <span className="text-primary-600 dark:text-primary-400 font-medium">React</span>, and{' '}
            <span className="text-primary-600 dark:text-primary-400 font-medium">AI/ML</span>.
            Passionate about innovation and delivering exceptional user experiences.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Remote, Ireland</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+923435391151</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center space-x-6"
          >
            <Link
              href="https://github.com/faizanazhar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
            <Link
              href="https://linkedin.com/in/faizanazhar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
            <Link
              href="mailto:faziazhar1@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Work Together
            </Link>
            <Link
              href="#projects"
              className="border border-border px-8 py-3 rounded-lg hover:bg-muted transition-all duration-300 font-medium hover:scale-105"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border border-border hover:border-primary transition-colors duration-300"
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}