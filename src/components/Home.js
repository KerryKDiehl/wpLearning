import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Helloooo Everyone!</p>
      <p>
        <Link to="/dynamic">Head on over to the Dynamic Page!</Link>
      </p>
      <p>
        <Link to="/lost">I is lost</Link>
      </p>
    </Layout>
  );
};

export default Home;
