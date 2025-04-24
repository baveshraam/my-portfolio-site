
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
      href: 'https://www.linkedin.com/in/bavesh-raam-s-0a589528b/', 
      label: 'linkedin.com/in/baveshraam',
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
    <section className="py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
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
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
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
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
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
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
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
                      <p className="mt-4 text-green-600 dark:text-green-400 text-sm">
                        Your message has been sent successfully!
                      </p>
                    )}
                    
                    {submitStatus === 'error' && (
                      <p className="mt-4 text-red-600 dark:text-red-400 text-sm">
                        An error occurred. Please try again later.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        Trichy, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                  
                  {socialLinks.map((link, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-blue-600 dark:text-blue-500 mr-4 flex-shrink-0">
                        {link.icon}
                      </div>
                      <div>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
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
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      Internship Opportunities
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      Freelance Projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      Research Collaborations
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      Open Source Contributions
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