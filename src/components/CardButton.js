import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fakeAsbestos, bianchiGreen } from '../styles/colors';
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
  background: ${bianchiGreen}88;
  border-radius: 1.25em;
  box-shadow: ${fakeAsbestos}22 0em 0.125em 0.25em 0em;
  display: flex;
  justify-content: center;
  margin: 0.25em 0.5em 0.75em;
  min-width: 7em;
  padding: 0.25em 1em;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover, &:active {
    box-shadow: ${fakeAsbestos}22 0em 0.5em 1em 0em;
  }
`;

const StyledLink = styled(BodyText)`
  color: ${fakeAsbestos};
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