import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fakeAsbestos } from '../styles/colors';

const UserImage = ({ imageURL, large }) => {
  if (imageURL) {
    return (
      <Container
        imageURL={imageURL}
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
  background-image: url(${(props) => props.imageURL});
  background-size: cover;
  border-radius: ${(props) => (props.large ? '2.5em' : '1.25em')};
  box-shadow: ${fakeAsbestos}22 0em 0.25em 0.25em 0em;
  margin-bottom: 1em;
  height: ${(props) => (props.large ? '5em' : '2.5em')};
  width: ${(props) => (props.large ? '5em' : '2.5em')};
`;

const IconContainer = styled.div`
  margin-bottom: 1em;
`;

UserImage.propTypes = {
  imageURL: PropTypes.string,
  large: PropTypes.bool,
};

UserImage.defaultProps = {
  imageURL: '',
  large: false,
};

export default UserImage;
