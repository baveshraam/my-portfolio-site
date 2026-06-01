import React from 'react';
import { Metadata } from 'next';
import { Sora, Lora } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import AppLayout from './AppLayout';
import '../index.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Bavesh Raam S | Software Engineer & AI Systems Architect',
    template: '%s | Bavesh Raam S',
  },
  description: 'Portfolio of Bavesh Raam S - Software Engineer building production-grade agentic AI systems, distributed infrastructure, and full-stack applications. Currently at DRDO, Ministry of Defence.',
  keywords: ['Software Engineer', 'Agentic AI', 'LLM Infrastructure', 'Full Stack Developer', 'DRDO', 'MCP', 'Distributed Systems', 'AI', 'Machine Learning', 'React', 'Next.js', 'TypeScript', 'Python', 'Enterprise Architecture', 'Portfolio'],
  authors: [{ name: 'Bavesh Raam S' }],
  creator: 'Bavesh Raam S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baveshraam.dev',
    title: 'Bavesh Raam S | Software Engineer & AI Systems Architect',
    description: 'Portfolio of Bavesh Raam S - Software Engineer building production-grade agentic AI systems, distributed infrastructure, and full-stack applications.',
    siteName: 'Bavesh Raam S Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bavesh Raam S | Software Engineer & AI Systems Architect',
    description: 'Portfolio of Bavesh Raam S - Software Engineer building production-grade agentic AI systems, distributed infrastructure, and full-stack applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${sora.variable} ${lora.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-screen flex flex-col">
            <AppLayout>
              {children}
            </AppLayout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
