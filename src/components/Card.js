import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = ({ children }) => (
  <Container>
    {children}
  </Container>
);

const Container = styled.div`
  align-items: center;
  border: 1px solid ${(props) => props.theme.fakeAsbestos}22;
  border-radius: 0.25em;
  box-shadow: ${(props) => props.theme.boxShadow};
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding: 0.5em 1em;
`;

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
