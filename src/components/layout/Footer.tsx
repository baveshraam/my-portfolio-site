import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/baveshraam', 
      label: 'GitHub' 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://www.linkedin.com/in/bavesh-raam-s-0a589528b/', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: 'mailto:baveshraamsv@gmail.com', 
      label: 'Email' 
    },
    { 
      icon: <FileText className="h-5 w-5" />, 
      href: '/Bavesh_Raam_S.pdf', 
      label: 'Resume', 
      download: true 
    },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="text-xl font-bold text-slate-900 dark:text-white">
              Bavesh<span className="text-blue-600 dark:text-blue-500">Raam</span>
            </Link>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              AI Enthusiast & Full Stack Developer
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              A goal-driven CSE student passionate about AI, machine learning, and data science.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? '_self' : '_blank'}
                  rel={link.download ? '' : 'noopener noreferrer'}
                  download={link.download}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Trichy, Tamil Nadu, India
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Bavesh Raam S. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;