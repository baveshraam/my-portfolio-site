'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import type { Project } from '@/types';

type Category = 'All' | 'AI' | 'Data Science' | 'Web Dev' | 'IoT' | 'Robotics' | 'Infrastructure';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  
  const categories: Category[] = ['All', 'AI', 'Data Science', 'Web Dev', 'IoT', 'Robotics', 'Infrastructure'];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.category.some(cat => 
          cat.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        )
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced from 0.1 for faster rendering
        delayChildren: 0.1     // Reduced from 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 }, // Reduced from y: 20 for smoother animation
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.3,  // Reduced from 0.5
        ease: "easeOut" 
      }
    }
  };

  return (
    <section className="py-24 md:py-32 scroll-mt-20" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Added margin for earlier trigger
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">My Projects</h2>
            <div className="h-1 w-20 bg-pine mx-auto rounded-full"></div>
            <p className="mt-4 max-w-2xl mx-auto text-ink/70">
              Explore my portfolio of projects spanning AI, data science, web development, and more.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? '' : 'opacity-80'}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={selectedCategory} // Added key to force re-render when category changes
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  variants={itemVariants}
                >
                  <ProjectCard 
                    project={{
                      id: project.id,
                      title: project.title,
                      shortDescription: project.shortDescription,
                      fullDescription: project.fullDescription,
                      technologies: project.technologies,
                      category: project.category,
                      previewImage: project.previewImage,
                      github: project.github,
                      demo: project.demo,
                    }} 
                  />
                </motion.div>
              ))
            ) : (
              <p className="text-center col-span-3 text-ink/60">
                No projects found for this category.
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;