'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../ui/SkillCard';
import type { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const skillsData = skills;
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
    <section className="py-24 md:py-32 bg-mist scroll-mt-20" id="skills">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-pine mx-auto rounded-full"></div>
            <p className="mt-4 max-w-2xl mx-auto text-ink/70">
              A comprehensive list of my technical skills and areas of expertise.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillsData.map((skill) => (
              <motion.div key={skill.category} variants={itemVariants}>
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