'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Code, BrainCircuit, Database, FileText } from 'lucide-react';
import Button from '../ui/Button';

interface HeroProps {
  fullName?: string;
  badgeText?: string;
  summary?: string;
}

const Hero: React.FC<HeroProps> = ({ fullName, badgeText, summary }) => {
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
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-24 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex w-fit items-center rounded-full border border-pine/20 bg-white/70 px-4 py-1 text-sm font-medium text-pine shadow-sm backdrop-blur"
            >
              {badgeText || 'Software Engineer & AI Systems Architect'}
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif"
            >
              {fullName || "Bavesh Raam S"}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-ink/70 max-w-xl"
            >
              {summary ||
                'Software engineer building production-grade agentic AI systems, distributed infrastructure, and full-stack applications. Currently at DRDO, Ministry of Defence.'}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button variant="primary" size="lg">
                  View Projects
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>
              <a href="/BaveshRaamS.pdf" download>
                <Button variant="secondary" size="lg">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-pine/12 via-moss/10 to-coral/10 blur-2xl"></div>
            
            <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-2xl shadow-pine/15">
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-pine via-moss to-ember"></div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-coral"></div>
                    <div className="w-3 h-3 rounded-full bg-ember"></div>
                    <div className="w-3 h-3 rounded-full bg-moss"></div>
                  </div>
                  <div className="text-xs text-white/50">bavesh.dev</div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.06] p-4">
                    <BrainCircuit className="h-10 w-10 text-moss mr-4" />
                    <div>
                      <h3 className="font-semibold text-white">Agentic AI Systems</h3>
                      <p className="text-sm text-white/60">LLM Infrastructure, MCP Orchestration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.06] p-4">
                    <Code className="h-10 w-10 text-pine mr-4" />
                    <div>
                      <h3 className="font-semibold text-white">Full Stack Engineering</h3>
                      <p className="text-sm text-white/60">React, Next.js, Python, TypeScript</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.06] p-4">
                    <Database className="h-10 w-10 text-ember mr-4" />
                    <div>
                      <h3 className="font-semibold text-white">Distributed Systems</h3>
                      <p className="text-sm text-white/60">Vector DBs, FAISS, Air-Gapped Deployments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
