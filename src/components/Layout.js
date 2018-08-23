import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Header, Container, Divider, Icon,
} from 'semantic-ui-react';

import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          Webpack learnings
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with
        {' '}
        <Icon name="heart" color="red" />
        {' '}
        by ME
      </p>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
