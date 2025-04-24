import React from 'react';
import Layout from '../components/layout/Layout';
import Contact from '../components/sections/Contact';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20">
        <Contact />
      </div>
    </Layout>
  );
};

export default ContactPage;