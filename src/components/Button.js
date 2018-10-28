import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fakeAsbestos } from '../styles/colors';
import { BodyText } from '../styles/typography';

const Button = ({ children, primary }) => (
  <Container
    primary={primary}
  >
    <StyledBody
      primary={primary}
    >
      {children}
    </StyledBody>
  </Container>
);

const Container = styled.div`
  background: ${props => props.primary ? fakeAsbestos : "#FFF"};
  border: 2px solid ${fakeAsbestos};
  border-radius: 0.25em;
  display: flex;
  justify-content: center;
  margin: 0.5em 2em;
  width: 8em;
  transition: box-shadow 0.3s ease;

  &:hover, &:active {
    background: ${props => props.primary ? "#FFF" : fakeAsbestos};
  }
`;

const StyledBody = styled(BodyText)`
  color: ${props => props.primary ? "#FFF" : fakeAsbestos};

  ${Container}:hover & {
    color: ${props => props.primary ? fakeAsbestos : "#FFF"};
  }
`;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
};

export default Button;