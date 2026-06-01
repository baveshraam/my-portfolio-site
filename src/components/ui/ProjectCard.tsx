'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { Project } from '../../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const githubProfileUrl = 'https://github.com/baveshraam';
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-lg border border-clay/80 bg-white/85 shadow-sm shadow-ink/5 backdrop-blur transition-all duration-300 hover:border-pine/25 hover:shadow-lg hover:shadow-pine/10"
    >
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-1 rounded-full border border-pine/15 bg-sage text-pine"
            >
              {cat}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2 text-ink">
          {project.title}
        </h3>
        <p className="text-sm text-ink/70 mb-4">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-mist text-ink/70 border border-clay/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-mist text-ink/70 border border-clay/60">
              +{(project.technologies?.length || 0) - 3} more
            </span>
          )}
        </div>
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
  );
};

export default ProjectCard;
