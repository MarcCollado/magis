import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fakeAsbestos } from '../styles/colors';
import { BodyText } from '../styles/typography';

const CardButton = ({ children, onClick }) => (
  <Container
    onClick={onClick}
  >
    <StyledLink>
      {children}
    </StyledLink>
  </Container>
);

const Container = styled.div`
  align-items: center;
  border: 1px solid ${fakeAsbestos}22;
  border-radius: 0.25em;
  display: flex;
  justify-content: center;
  margin: 0em 0.5em;
  padding: 0.25em 1em;
  text-align: center;

  &:hover {
    background: ${fakeAsbestos}22;
  }
`;

const StyledLink = styled(BodyText)`
  color: ${fakeAsbestos}88;
  line-height: 0em;
  text-decoration: none;

  &:visited, :hover, :active {
    color: inherit;
  }
`;

CardButton.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default CardButton;