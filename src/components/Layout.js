import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  max-width: ${(props) => props.theme.maxWidth};
  min-width: ${(props) => props.theme.minWidth};
`;

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
