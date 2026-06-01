
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Briefcase } from 'lucide-react';

const Contact: React.FC = () => {
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

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/baveshraam', 
      label: 'github.com/baveshraam',
      ariaLabel: 'GitHub' 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://linkedin.com/in/bavesh-raam-s', 
      label: 'linkedin.com/in/bavesh-raam-s',
      ariaLabel: 'LinkedIn' 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: 'mailto:baveshraamsv@gmail.com', 
      label: 'baveshraamsv@gmail.com',
      ariaLabel: 'Email' 
    },
  ];

  const availability = [
    'Full-Time Engineering Roles',
    'AI/ML Infrastructure Projects',
    'Research & Development Collaborations',
    'Open Source & Enterprise Consulting',
  ];

  return (
    <section className="py-24 md:py-32 scroll-mt-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Contact Me</h2>
            <div className="h-1 w-20 bg-pine mx-auto rounded-full"></div>
            <p className="mt-4 max-w-2xl mx-auto text-ink/70">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-lg shadow-sm border border-clay/80 p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="mb-6 text-ink/70">
                  Reach out directly through any of the links below. That&apos;s the real contact path.
                </p>

                <div className="space-y-5">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-pine mr-4 flex-shrink-0 mt-1">
                        {link.icon}
                      </div>
                      <div>
                        <a
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-semibold hover:text-pine transition-colors"
                          aria-label={link.ariaLabel}
                        >
                          {link.label}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-lg shadow-sm border border-clay/80 p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-pine mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-ink/70">
                        Coimbatore, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-pine mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:baveshraamsv@gmail.com"
                        className="font-semibold hover:text-pine transition-colors"
                      >
                        baveshraamsv@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-pine mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Available For</h4>
                      <ul className="space-y-2 text-ink/70">
                        {availability.map((item) => (
                          <li key={item} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-moss mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
