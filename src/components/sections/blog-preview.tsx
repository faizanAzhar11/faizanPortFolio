'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Building Scalable Azure AI Solutions',
    excerpt: 'Learn how to architect and deploy AI solutions using Azure OpenAI and Cognitive Services for enterprise applications.',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    slug: 'building-scalable-azure-ai-solutions',
    featured: true
  },
  {
    title: 'Next.js 15 Performance Optimization Guide',
    excerpt: 'Comprehensive guide to optimizing Next.js applications for Core Web Vitals and superior user experience.',
    date: 'Nov 28, 2024',
    readTime: '12 min read',
    category: 'Web Development',
    slug: 'nextjs-15-performance-optimization',
    featured: false
  },
  {
    title: 'Power Platform Integration Patterns',
    excerpt: 'Best practices for integrating Power Apps with external APIs and custom connectors using .NET.',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    category: 'Power Platform',
    slug: 'power-platform-integration-patterns',
    featured: false
  }
];

export default function BlogPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge about modern web development, AI, and cloud technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group ${
                post.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Category & Date */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className={`font-semibold group-hover:text-primary transition-colors duration-300 ${
                  post.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {post.title}
                </h3>
                
                <p className={`text-muted-foreground leading-relaxed ${
                  post.featured ? 'text-base' : 'text-sm'
                }`}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200 group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to read more articles about web development, AI, and technology?
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 bg-card border border-border px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            <span>View All Articles</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}