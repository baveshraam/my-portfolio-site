'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Briefcase, Globe } from 'lucide-react';
import type { Education, Experience, Profile } from '@/types';
import Button from '../ui/Button';

interface AboutProps {
  profile: Profile;
  education: Education[];
  experiences: Experience[];
}

const About: React.FC<AboutProps> = ({ profile, education, experiences }) => {
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
    <section className="py-24 md:py-32 scroll-mt-20" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">About Me</h2>
            <div className="h-1 w-20 bg-pine mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            {profile.aboutIntro.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg text-ink/70 leading-relaxed${
                  index === 0 ? ' mb-6' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-pine mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-clay/80"
                >
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <span className="text-pine font-medium">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-ink/70 mb-2">
                    {edu.institution} {edu.gpa && `• CGPA: ${edu.gpa}`}
                  </p>
                  {edu.details && (
                    <ul className="list-disc list-inside text-sm text-ink/70 space-y-1 mt-3">
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
              <Briefcase className="h-6 w-6 text-pine mr-3" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={`${exp.company}-${exp.duration}-${index}`} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-clay/80"
                >
                  <div className="flex justify-between flex-wrap gap-2">
                    <h4 className="text-xl font-semibold">{exp.position}</h4>
                    <span className="text-pine font-medium">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-ink/70 mb-3">
                    {exp.company}
                  </p>
                  <ul className="list-disc list-inside text-sm text-ink/70 space-y-1">
                    {exp.responsibilities.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <Globe className="h-6 w-6 text-pine mr-3" />
              <h3 className="text-2xl font-bold">Personal Details</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-clay/80 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-ink/60 text-sm">Languages</h4>
                  <p className="font-medium">
                    {profile.languages && profile.languages.length > 0
                      ? profile.languages.join(', ')
                      : 'English (Fluent), Tamil (Native), Hindi (Fluent)'}
                  </p>
                </div>
                <div>
                  <h4 className="text-ink/60 text-sm">Location</h4>
                  <p className="font-medium">
                    {profile.location || 'Trichy, Tamil Nadu, India'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a href="/BaveshRaamS.pdf" download>
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