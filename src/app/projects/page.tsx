import { Metadata } from 'next';
import { projects } from '@/data/portfolio';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects | Bavesh Raam S',
  description: 'Explore projects in agentic AI systems, full-stack engineering, distributed infrastructure, data science, and enterprise software by Bavesh Raam S',
};

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
