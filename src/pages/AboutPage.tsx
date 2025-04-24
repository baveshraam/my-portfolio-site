import React from 'react';
import Layout from '../components/layout/Layout';
import About from '../components/sections/About';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20">
        <About />
      </div>
    </Layout>
  );
};

export default AboutPage;