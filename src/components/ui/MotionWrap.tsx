'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default MotionWrap;
