import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/portfolio';

type Props = {
  params: { id: string };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Bavesh Raam S`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.previewImage ? [project.previewImage] : [],
    },
  };
}

// Generate static params for all projects at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = projects.find((item) => item.id === params.id);
  const githubProfileUrl = 'https://github.com/baveshraam';
  const roboticArmDocUrl = 'https://four-wheeled-robotic-arm.vercel.app/';

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-pine hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Project header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-ink mb-4">
            {project.title}
          </h1>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category?.map((cat, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-sage text-pine rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-pine hover:bg-moss text-cream rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
            {(project.github || githubProfileUrl) && (
              <a
                href={project.github || githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-pine/40 hover:bg-mist text-pine rounded-lg transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                View Source
              </a>
            )}
            {project.id === 'robotic-arm-vehicle' && (
              <a
                href={roboticArmDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-pine hover:bg-mist text-pine rounded-lg transition-colors"
              >
                View Extensive Documentation
              </a>
            )}
          </div>
        </div>

        {/* Project image */}
        {/* Project description */}
        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-bold text-ink mb-4">
            About This Project
          </h2>
          <p className="text-ink/70 whitespace-pre-wrap">
            {project.fullDescription}
          </p>
        </div>

        {/* Technologies used */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-ink mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-mist text-ink/70 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-ink mb-4">
              Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-clay text-ink/70 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
