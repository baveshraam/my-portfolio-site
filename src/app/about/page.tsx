import { Metadata } from 'next';
import { experiences, profile } from '@/data/portfolio';
import { Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Bavesh Raam S',
  description: 'Learn more about Bavesh Raam S - Software Engineer specializing in Agentic AI Systems, Distributed Infrastructure, and Enterprise Platforms. Currently at DRDO.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-ink mb-4">
            About Me
          </h1>
          {profile.title && (
            <p className="text-xl text-pine mb-6">
              {profile.title}
            </p>
          )}
        </div>

        {/* Bio Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-ink mb-4">
            Introduction
          </h2>
          <div className="prose prose-lg max-w-none">
            {profile.aboutIntro.map((paragraph, index) => (
              <p
                key={index}
                className="text-ink/70 whitespace-pre-wrap"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Location and Languages */}
        {(profile.location || profile.languages) && (
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            {profile.location && (
              <div>
                <h3 className="text-xl font-bold text-ink mb-2">
                  Location
                </h3>
                <p className="text-ink/70">
                  {profile.location}
                </p>
              </div>
            )}
            {profile.languages && profile.languages.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-ink mb-2">
                  Languages
                </h3>
                <p className="text-ink/70">
                  {profile.languages.join(', ')}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Experience Section */}
        {experiences.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-ink mb-6">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.duration}-${index}`}
                  className="border-l-4 border-pine pl-6 py-2"
                >
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-pine mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ink">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-ink/70 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-ink/60 mb-3">
                        {exp.duration}
                      </p>
                      {exp.responsibilities.length > 0 && (
                        <ul className="list-disc list-inside space-y-2 text-ink/70">
                          {exp.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
