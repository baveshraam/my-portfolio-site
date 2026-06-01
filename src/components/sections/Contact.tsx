
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

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
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-ink/70 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-clay/80 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-moss/40"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-ink/70 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-clay/80 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-moss/40"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-ink/70 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 rounded-md border border-clay/80 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-moss/40 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    
                    {submitStatus === 'success' && (
                      <p className="mt-4 text-moss text-sm">
                        Your message has been sent successfully!
                      </p>
                    )}
                    
                    {submitStatus === 'error' && (
                      <p className="mt-4 text-red-700 text-sm">
                        An error occurred. Please try again later.
                      </p>
                    )}
                  </div>
                </form>
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
                  
                  {socialLinks.map((link, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-pine mr-4 flex-shrink-0">
                        {link.icon}
                      </div>
                      <div>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-pine transition-colors"
                          aria-label={link.ariaLabel}
                        >
                          {link.label}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h4 className="font-semibold mb-4">Available For:</h4>
                  <ul className="space-y-2 text-ink/70">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-moss mr-2"></div>
                      Full-Time Engineering Roles
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-moss mr-2"></div>
                      AI/ML Infrastructure Projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-moss mr-2"></div>
                      Research & Development Collaborations
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-moss mr-2"></div>
                      Open Source & Enterprise Consulting
                    </li>
                  </ul>
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