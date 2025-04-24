import React from 'react';
import Layout from '../components/layout/Layout';
import Skills from '../components/sections/Skills';

const SkillsPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20">
        <Skills />
      </div>
    </Layout>
  );
};

export default SkillsPage;