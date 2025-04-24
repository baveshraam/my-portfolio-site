import React from 'react';
import Layout from '../components/layout/Layout';
import Projects from '../components/sections/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20">
        <Projects />
      </div>
    </Layout>
  );
};

export default ProjectsPage;