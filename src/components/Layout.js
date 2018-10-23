import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import {
//   mobile, tablet, desktop,
// } from '../utils/breakpoints';
// import {
//   black, fakeAsbestos, turquoise, eggShell,
// } from '../utils/colors';
// import {
//   Title1, Title2, Title3, BodyText, BodyLink, MetaText,
// } from '../utils/theme';

const Layout = ({ children }) => (
  <Container>
    {children}
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 0em 2em;
  max-width: 480px;
`;

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
