import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TogglePollButton = (props) => {
  const { handleToggleView, viewAll } = props;
  return (
    <Button
      viewAll={viewAll}
      onClick={handleToggleView}
    >
      {viewAll
        ? <FontAwesomeIcon icon="globe-americas" color="white" size="lg" />
        : <FontAwesomeIcon icon="user" color="white" size="lg" />
      }
    </Button>
  );
};

const Button = styled.div`
  align-items: center;
  background: ${(props) => (props.viewAll ? props.theme.electricBlue : props.theme.fakeAsbestos)};
  border-radius: 2.5em;
  bottom: 4.5em;
  box-shadow: ${(props) => props.theme.boxShadow88};
  display: flex;
  height: 3em;
  justify-content: center;
  position: fixed;
  right: 1em;
  width: 3em;
  transition: background, box-shadow 0.3s ease;
  z-index: 1000;

  &:hover, &:active {
    box-shadow: ${(props) => `${props.theme.fakeAsbestos}88 0em 0.5em 1em 0em}`};
  }
`;

TogglePollButton.propTypes = {
  handleToggleView: PropTypes.func.isRequired,
  viewAll: PropTypes.bool.isRequired,
};

export default TogglePollButton;
