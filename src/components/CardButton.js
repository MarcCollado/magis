import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fakeAsbestos } from '../styles/colors';

const CardButton = ({ children }) => (
  <Container>
    {children}
  </Container>
);

const Container = styled.div`
  border: 1px solid ${fakeAsbestos}22;
  border-radius: 0.25em;
  display: flex;
  align-items: center;
  padding: 0.5em 0em;
  text-align: center;
  width: 80%;
`;

CardButton.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CardButton;