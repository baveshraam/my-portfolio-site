import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/projects">
            <Button variant="primary">Back to Projects</Button>
          </Link>
        </div>
      </Layout>
    );
  }

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
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen pt-20 pb-16"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.button
            variants={itemVariants}
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </motion.button>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            {project.detailImage && (
              <motion.div
                variants={itemVariants}
                className="w-full max-w-4xl mx-auto overflow-hidden"
              >
                <img
                  src={project.detailImage}
                  alt={project.title}
                  className="w-full h-auto object-contain object-center rounded-t-lg"
                />
              </motion.div>
            )}
            
            <div className="p-6 sm:p-8">
              <motion.div variants={itemVariants} className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  {project.fullDescription}
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-xl font-bold mb-3">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.role && (
                  <div>
                    <h2 className="text-xl font-bold mb-3">Role</h2>
                    <p className="text-slate-600 dark:text-slate-300">
                      {project.role}
                    </p>
                  </div>
                )}
              </motion.div>
              
              {project.contributions && (
                <motion.div variants={itemVariants} className="mb-8">
                  <h2 className="text-xl font-bold mb-3">Contributions</h2>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    {project.contributions.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {project.challenges && (
                <motion.div variants={itemVariants} className="mb-8">
                  <h2 className="text-xl font-bold mb-3">Challenges & Solutions</h2>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {project.results && (
                <motion.div variants={itemVariants} className="mb-8">
                  <h2 className="text-xl font-bold mb-3">Results & Impact</h2>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                    {project.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {project.id === 'robotic-arm' && project.externalLink && (
                <motion.div variants={itemVariants} className="mb-8">
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-blue-100 dark:bg-blue-900 rounded-lg text-center text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    Click here to see full project
                  </a>
                </motion.div>
              )}
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary">
                      <Github className="mr-2 h-5 w-5" />
                      GitHub Repository
                    </Button>
                  </a>
                )}
                
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ProjectDetailPage;