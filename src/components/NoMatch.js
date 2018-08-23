import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const noMatch = () => {
  return (
    <Layout>
      <Icon name="minus circle" size="big" />
      <strong>Page not found</strong>
      <p>
        <Link to="/">Bring me home please!</Link>
      </p>
    </Layout>
  );
};

export default noMatch;
