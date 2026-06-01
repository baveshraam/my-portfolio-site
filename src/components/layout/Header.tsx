'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
  }, [pathname]);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' },
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-6 w-6" />,
      href: 'https://github.com/baveshraam', 
      label: 'GitHub' 
    },
    { 
      icon: <Linkedin className="h-6 w-6" />,
      href: 'https://linkedin.com/in/bavesh-raam-s', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Mail className="h-6 w-6" />,
      href: 'mailto:baveshraamsv@gmail.com', 
      label: 'Email' 
    },
    { 
      icon: <FileText className="h-6 w-6" />,
      href: '/BaveshRaamS.pdf', 
      label: 'Resume', 
      download: true 
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-clay/70'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
            Bavesh <span className="text-pine">Raam</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-pine'
                    : 'text-ink/70 hover:text-pine'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? '_self' : '_blank'}
                  rel={link.download ? '' : 'noopener noreferrer'}
                  download={link.download}
                  className="p-2 rounded-full hover:bg-mist transition-colors text-ink/70 hover:text-pine"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-md text-ink/70"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-cream shadow-lg"
        >
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-4 py-4 rounded-md text-lg font-medium transition-colors ${
                    pathname === link.path
                      ? 'bg-sage text-pine'
                      : 'text-ink/70 hover:bg-mist'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-4 flex justify-center space-x-4 border-t border-clay/70 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? '_self' : '_blank'}
                  rel={link.download ? '' : 'noopener noreferrer'}
                  download={link.download}
                  className="p-2 rounded-full hover:bg-mist transition-colors text-ink/70 hover:text-pine"
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