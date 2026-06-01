import { Suspense } from 'react';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Hero from '../components/sections/Hero';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import MotionWrap from '../components/ui/MotionWrap';
import { education, experiences, profile, projects, skills } from '@/data/portfolio';

// Revalidate every hour (Next.js 15 requires a static value here)
export const revalidate = 3600;

// Loading fallback component
function SectionLoader() {
  return (
    <div className="w-full py-24 flex items-center justify-center">
      <div className="animate-pulse text-slate-400">Loading...</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <MotionWrap className="w-full">
        <Hero
          fullName={profile.fullName}
          badgeText={profile.heroBadge}
          summary={profile.heroSummary}
        />
      </MotionWrap>
      
      <Suspense fallback={<SectionLoader />}>
        <MotionWrap className="w-full" id="about">
          <About profile={profile} education={education} experiences={experiences} />
        </MotionWrap>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <MotionWrap className="w-full" id="featured">
          <FeaturedProjects projects={projects} />
        </MotionWrap>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <MotionWrap className="w-full" id="projects">
          <Projects projects={projects}/>
        </MotionWrap>
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <MotionWrap className="w-full" id="skills">
          <Skills skills={skills} />
        </MotionWrap>
      </Suspense>
      
      <MotionWrap className="w-full" id="contact">
        <Contact />
      </MotionWrap>
    </main>
  );
}
