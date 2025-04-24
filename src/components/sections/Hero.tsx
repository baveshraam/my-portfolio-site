import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, BrainCircuit, Database } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full px-4 py-1 text-sm font-medium"
            >
              AI Enthusiast & Full Stack Developer
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Bavesh Raam S
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl"
            >
              A goal-driven CSE student passionate about AI, machine learning, 
              and data science. Building solutions that matter.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View Projects
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden z-10">
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">bavesh.dev</div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-blue-50 dark:bg-slate-700 rounded-lg">
                    <BrainCircuit className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-4" />
                    <div>
                      <h3 className="font-semibold">Artificial Intelligence</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Machine Learning, Data Science</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-purple-50 dark:bg-slate-700 rounded-lg">
                    <Code className="h-10 w-10 text-purple-600 dark:text-purple-400 mr-4" />
                    <div>
                      <h3 className="font-semibold">Full Stack Development</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">React, Node.js, Python</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-green-50 dark:bg-slate-700 rounded-lg">
                    <Database className="h-10 w-10 text-green-600 dark:text-green-400 mr-4" />
                    <div>
                      <h3 className="font-semibold">Database Systems</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">SQL, MongoDB, Firebase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;