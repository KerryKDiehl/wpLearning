import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">Dynamic Page</Header>
      <p>I was loaded async!</p>
      <Link to="/">Beam me up Scotty!</Link>
    </Layout>
  );
};

export default DynamicPage;
