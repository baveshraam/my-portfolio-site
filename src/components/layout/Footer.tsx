import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

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
      href: 'https://linkedin.com/in/bavesh-raam-s', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: 'mailto:baveshraamsv@gmail.com', 
      label: 'Email' 
    },
    { 
      icon: <FileText className="h-5 w-5" />, 
      href: '/BaveshRaamS.pdf', 
      label: 'Resume', 
      download: true 
    },
  ];

  return (
    <footer className="bg-mist py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="text-xl font-semibold text-ink">
              Bavesh<span className="text-pine">Raam</span>
            </Link>
            <p className="mt-2 text-sm text-ink/70">
              AI Systems Evaluation & ML Engineering
            </p>
            <p className="mt-4 text-sm text-ink/70">
              Focused on evaluation frameworks, reliable ML systems, and real-world deployments.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-ink">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-ink/70 hover:text-pine transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-ink">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? '_self' : '_blank'}
                  rel={link.download ? '' : 'noopener noreferrer'}
                  download={link.download}
                  className="p-2 rounded-full hover:bg-cream transition-colors text-ink/70 hover:text-pine"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-ink/70">
              Coimbatore, Tamil Nadu, India
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-clay/70 text-center text-sm text-ink/60">
          © {new Date().getFullYear()} Bavesh Raam S. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;