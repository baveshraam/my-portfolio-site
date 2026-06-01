'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, Star } from 'lucide-react';
import Button from '../ui/Button';
import type { Project } from '@/types';

interface FeaturedProjectsProps {
  projects: Project[];
}

// Featured project titles to highlight (order matters)
const FEATURED_TITLES = [
  'Open Notebook',
  'Small Vessel Detection',
  'VisualVerse',
  'Namma Vayal',
  'Smart City Traffic Congestion Prediction',
  'Doc-Patient Connect',
];

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const githubProfileUrl = 'https://github.com/baveshraam';
  // Match projects by title (case-insensitive partial match)
  const featuredProjects = FEATURED_TITLES.map(title =>
    projects.find(p => p.title.toLowerCase().includes(title.toLowerCase()))
  ).filter(Boolean) as Project[];

  // Fallback: if no matches found, use first 6 projects
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 6);

  if (displayProjects.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-mist scroll-mt-20" id="featured">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-moss" />
              <span className="text-sm font-semibold text-moss uppercase tracking-wider">
                Highlights
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Featured Projects</h2>
            <div className="h-1 w-20 bg-pine mx-auto rounded-full"></div>
            <p className="mt-4 max-w-2xl mx-auto text-ink/70">
              Production-grade systems spanning agentic AI, full-stack engineering, data science, and embedded systems.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-lg border border-clay/80 bg-white/85 shadow-md shadow-ink/5 backdrop-blur transition-all duration-300 hover:border-pine/25 hover:shadow-lg hover:shadow-pine/10"
              >
                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-sage text-pine font-medium">
                      Featured
                    </span>
                    {project.category?.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                      className="text-xs px-2 py-1 rounded-full border border-moss/15 bg-mist text-moss"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-ink">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink/70 mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-full bg-mist text-ink/70 border border-clay/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 4 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-mist text-ink/70 border border-clay/60">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center">
                    <Link href={`/projects/${project.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    <div className="flex space-x-2">
                      {(project.github || githubProfileUrl) && (
                        <a
                          href={project.github || githubProfileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-mist transition-colors text-ink/70 hover:text-pine"
                          aria-label="View GitHub repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-mist transition-colors text-ink/70 hover:text-pine"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects link */}
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Link href="/projects">
              <Button variant="primary" size="lg">
                View All Projects →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
