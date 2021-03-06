import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserImage = ({ avatarURL, large }) => {
  if (avatarURL) {
    return (
      <Container
        avatarURL={avatarURL}
        large={large}
      />
    );
  }
  return (
    <IconContainer>
      <FontAwesomeIcon icon="user-circle" size="4x" color="#888" />
    </IconContainer>
  );
};

const Container = styled.div`
  background-image: url(${(props) => props.avatarURL});
  background-size: cover;
  border-radius: ${(props) => (props.large ? '2.5em' : '1.25em')};
  box-shadow: ${(props) => (props.theme.boxShadow22)};
  margin-bottom: 1em;
  height: ${(props) => (props.large ? '5em' : '2.5em')};
  width: ${(props) => (props.large ? '5em' : '2.5em')};
`;

const IconContainer = styled.div`
  margin-bottom: 1em;
`;

UserImage.propTypes = {
  avatarURL: PropTypes.string,
  large: PropTypes.bool,
};

UserImage.defaultProps = {
  avatarURL: '',
  large: false,
};

export default UserImage;
