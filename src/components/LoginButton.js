import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fakeAsbestos } from '../styles/colors';
import { BodyText } from '../styles/typography';

const LoginButton = ({
  children, disabled, onClick, provider,
}) => {
  const colorMatrix = {
    Github: '#333',
    Twitter: '#38A1F3',
  };

  return (
    <Button
      color={colorMatrix[provider]}
      disabled={disabled}
      onClick={onClick}
    >
      <StyledBody theme={provider}>
        {children}
      </StyledBody>
    </Button>
  );
};

const Button = styled.button`
  background: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 0.25em;
  color: ${(props) => props.color};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

const StyledBody = styled(BodyText)`
  color: ${(props) => (props.provider === 'Github' || 'Twitter' ? '#FFF' : fakeAsbestos)};
`;

LoginButton.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  provider: PropTypes.oneOf(['Github', 'Twitter']).isRequired,
};

LoginButton.defaultProps = {
  disabled: false,
};

export default LoginButton;
