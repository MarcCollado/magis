import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreatePollButton = () => (
  <Button>
    <FontAwesomeIcon icon="plus" color="white" size="lg" />
  </Button>
);

const Button = styled.div`
  align-items: center;
  background: ${(props) => props.theme.coralRed};
  border-radius: 2.5em;
  bottom: 1em;
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
    background: #E2AFAC;
    box-shadow: ${(props) => `${props.theme.fakeAsbestos}88 0em 0.5em 1em 0em}`};
  }
`;

export default CreatePollButton;
