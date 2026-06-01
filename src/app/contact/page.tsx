'use client';

import { Github, Linkedin, Mail, MapPin, Briefcase } from 'lucide-react';

export default function ContactPage() {
  const contactLinks = [
    {
      icon: Github,
      label: 'github.com/baveshraam',
      href: 'https://github.com/baveshraam',
      ariaLabel: 'GitHub profile',
    },
    {
      icon: Linkedin,
      label: 'linkedin.com/in/bavesh-raam-s',
      href: 'https://linkedin.com/in/bavesh-raam-s',
      ariaLabel: 'LinkedIn profile',
    },
    {
      icon: Mail,
      label: 'baveshraamsv@gmail.com',
      href: 'mailto:baveshraamsv@gmail.com',
      ariaLabel: 'Email Bavesh',
    },
  ];

  const availability = [
    'Full-Time Engineering Roles',
    'AI/ML Infrastructure Projects',
    'Research & Development Collaborations',
    'Open Source & Enterprise Consulting',
  ];

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-ink mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-ink/70">
            Have a question or want to work together? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg p-6 border border-clay/80 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-pine flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-ink mb-2">Location</h3>
                  <p className="text-ink/70">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>

              {contactLinks.map((item) => (
                <div key={item.label} className="flex items-start gap-4 mb-6 last:mb-0">
                  <item.icon className="w-6 h-6 text-pine flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-ink mb-2">
                      {item.label.includes('@') ? 'Email' : item.label.includes('linkedin') ? 'LinkedIn' : 'GitHub'}
                    </h3>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-pine hover:underline"
                      aria-label={item.ariaLabel}
                    >
                      {item.label}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 border border-clay/80 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Available For</h3>
              <ul className="space-y-3">
                {availability.map((item) => (
                  <li key={item} className="flex items-center text-ink/80">
                    <Briefcase className="w-5 h-5 text-pine mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-ink/70">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
