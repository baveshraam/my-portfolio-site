import { Metadata } from 'next';
import { skills } from '@/data/portfolio';
import { Code2, Database, Wrench, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills | Bavesh Raam S',
  description: 'Technical skills and expertise in Full Stack Development, AI/ML, and more',
};

// Icon mapping for categories
const getCategoryIcon = (category: string) => {
  const normalizedCategory = category.toLowerCase();
  if (normalizedCategory.includes('programming') || normalizedCategory.includes('language')) {
    return Code2;
  }
  if (normalizedCategory.includes('database') || normalizedCategory.includes('data')) {
    return Database;
  }
  if (normalizedCategory.includes('ai') || normalizedCategory.includes('ml') || normalizedCategory.includes('machine')) {
    return Brain;
  }
  return Wrench;
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-ink mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-ink/70">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => {
            const Icon = getCategoryIcon(skillGroup.category);
            return (
              <div
                key={skillGroup.category}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-clay/80"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-pine" />
                  <h2 className="text-xl font-bold text-ink">
                    {skillGroup.category}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, index) => (
                    <span
                      key={`${skillGroup.category}-${skill}-${index}`}
                      className="px-3 py-1 text-sm bg-mist text-ink/70 rounded-md border border-clay/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
