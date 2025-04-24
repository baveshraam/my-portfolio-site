import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-5 rounded-lg bg-white dark:bg-slate-800 shadow-md transition-all hover:shadow-xl"
    >
      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
        {skill.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;