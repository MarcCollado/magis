import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fakeAsbestos } from '../styles/colors';

const CardButton = ({ children, onClick }) => (
  <Container
    onClick={onClick}
  >
    {children}
  </Container>
);

const Container = styled.div`
  align-items: center;
  border: 1px solid ${fakeAsbestos}22;
  border-radius: 0.25em;
  display: flex;
  justify-content: center;
  margin: 0em 0.5em;
  padding: 0.5em 1em;
  text-align: center;

  &:hover {
    border: 1px solid ${fakeAsbestos};
  }
`;

CardButton.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default CardButton;