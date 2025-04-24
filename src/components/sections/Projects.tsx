import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import Button from '../ui/Button';

type Category = 'All' | 'AI' | 'Data Science' | 'Web Dev' | 'IoT' | 'Robotics';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  
  const categories: Category[] = ['All', 'AI', 'Data Science', 'Web Dev', 'IoT', 'Robotics'];
  
  // Removed useMemo to simplify and ensure re-computation on every render
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.category.some(cat => 
          cat.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        )
      );

  // Debugging logs
  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Projects:", filteredProjects.map(p => p.title));
  console.log("All Projects:", projects.map(p => p.title));
  console.log("Categories in Projects:", projects.map(p => p.category));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 md:py-24" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible" // Changed from whileInView to animate to ensure consistent triggering
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
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
                onClick={() => {
                  console.log('Current selectedCategory:', selectedCategory);
                  console.log('Clicking category:', category);
                  setSelectedCategory(category);
                }}
                className={selectedCategory === category ? '' : 'opacity-80'}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={selectedCategory} // Added key to force re-render when category changes
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible" // Ensure each card animates on render
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <p className="text-center col-span-3 text-slate-600 dark:text-slate-300">
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