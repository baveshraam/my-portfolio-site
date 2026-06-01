'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative rounded-lg border border-clay/80 bg-white/85 p-5 shadow-sm shadow-ink/5 backdrop-blur transition-all duration-300 hover:border-moss/30 hover:shadow-lg hover:shadow-moss/10"
    >
      <h3 className="relative z-10 text-xl font-bold mb-3 text-ink transition-colors duration-300 group-hover:text-pine">
        {skill.category}
      </h3>
      <div className="relative z-10 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1 rounded-full border border-pine/15 bg-sage text-pine"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
