import React from 'react';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Briefcase, Globe } from 'lucide-react';
import Button from '../ui/Button';
import { education } from '../../data/education';
import { experience } from '../../data/experience';

const About: React.FC = () => {
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
    <section className="py-16 md:py-24" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              I'm Bavesh Raam S, a Computer Science student specializing in Artificial Intelligence. 
              With a deep interest in machine learning and data science, I'm driven to create practical 
              AI solutions that tackle real-world challenges. My journey spans robotics, IoT, 
              web development, and more.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm passionate about leveraging technology to solve complex problems and constantly 
              expanding my knowledge in emerging technologies. Whether it's developing innovative 
              applications or exploring new AI algorithms, I'm always eager to learn and create.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <span className="text-blue-600 dark:text-blue-500 font-medium">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-2">
                    {edu.institution} {edu.gpa && `• CGPA: ${edu.gpa}`}
                  </p>
                  {edu.details && (
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1 mt-3">
                      {edu.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="text-xl font-semibold">{exp.position}</h4>
                    <span className="text-blue-600 dark:text-blue-500 font-medium">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    {exp.company}
                  </p>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold">Personal Details</h3>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-slate-500 dark:text-slate-400 text-sm">Languages</h4>
                  <p className="font-medium">English (Fluent), Tamil (Native), Hindi (Fluent)</p>
                </div>
                <div>
                  <h4 className="text-slate-500 dark:text-slate-400 text-sm">Location</h4>
                  <p className="font-medium">Trichy, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a href="/Bavesh_Raam_S.pdf" download>
                <Button variant="primary" size="lg">
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;