import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md transition-all hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        {project.previewImage && (
          <img
            src={project.previewImage}
            alt={project.title}
            className="w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105"
          />
        )}
        <div className="absolute top-0 right-0 p-2 flex space-x-2">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <Link to={`/projects/${project.id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
          <div className="flex space-x-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
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
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;