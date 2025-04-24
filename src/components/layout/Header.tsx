import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

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
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-6"> {/* Increased py-4 to py-6 */}
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-slate-900 dark:text-white flex items-center" // Changed text-xl to text-2xl, added flex
          >
            <span>Bavesh</span>
            <span className="ml-2 text-blue-600 dark:text-blue-500">Raam</span> {/* Added ml-2 for spacing */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2"> {/* Increased space-x-1 to space-x-2 */}
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600 dark:text-blue-500'
                    : 'text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-500'
                }`} // Changed text-sm to text-base
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3"> {/* Increased space-x-2 to space-x-3 */}
            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-2"> {/* Increased space-x-1 to space-x-2 */}
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? '_self' : '_blank'}
                  rel={link.download ? '' : 'noopener noreferrer'}
                  download={link.download}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-slate-700 dark:text-slate-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-slate-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-6"> {/* Increased py-4 to py-6 */}
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-500'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`} // Changed text-sm to text-base
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-4 flex justify-center space-x-4 border-t border-slate-200 dark:border-slate-700 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? '_self' : '_blank'}
                  rel={link.download ? '' : 'noopener noreferrer'}
                  download={link.download}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;