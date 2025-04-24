import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../ui/SkillCard';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
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
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50" id="skills">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
              A comprehensive list of my technical skills and areas of expertise.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;