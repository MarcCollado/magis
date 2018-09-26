import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fakeAsbestos } from '../styles/colors';

const Card = ({ children }) => (
  <Container>
    {children}
  </Container>
);

const Container = styled.div`
  align-items: center;
  border: 1px solid ${fakeAsbestos}22;
  border-radius: 0.25em;
  box-shadow: ${fakeAsbestos}22 0em 0.125em 0.25em 0em;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding: 0.5em 1em;
  transition: box-shadow 0.3s ease;

  &:hover, &:active {
    box-shadow: ${fakeAsbestos}22 0em 0.5em 1em 0em;
  }
`;

Card.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Card;