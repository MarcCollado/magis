import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fakeAsbestos, bianchiGreen } from '../styles/colors';

const CardButton = ({ children, primary }) => (
  <Container
    primary={primary}
  >
    {children}
  </Container>
);

const Container = styled.div`
  background: ${props => props.primary ? bianchiGreen : "#FFF"};
  border: 1px solid ${props => props.primary ? "#FFF0" : fakeAsbestos};
  border-radius: 1.5em;
  box-shadow: ${fakeAsbestos}22 0em 0.125em 0.25em 0em;
  display: flex;
  justify-content: center;
  margin: 0.5em 2em;
  min-width: 6em;
  padding: 0.75em 1em;
  transition: box-shadow 0.3s ease;

  &:hover, &:active {
    box-shadow: ${fakeAsbestos}22 0em 0.5em 1em 0em;
  }
`;

CardButton.propTypes = {
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

CardButton.defaultProps = {
  primary: false,
};

export default CardButton;