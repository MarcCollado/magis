import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { coralRed, fakeAsbestos } from '../styles/colors';

const AddButton = () => (
  <Button>
    <Icon>
      <FontAwesomeIcon icon="plus" color="white" size="lg"/>
    </Icon>
  </Button>
);

const Button = styled.div`
  align-items: center;
  background: ${coralRed};
  border-radius: 2.5em;
  bottom: 1em;
  box-shadow: ${fakeAsbestos}88 0em 0.125em 0.25em 0em;
  display: flex;
  height: 4em;
  justify-content: center;
  position: fixed;
  right: 1em;
  width: 4em;
  transition: background, box-shadow 0.3s ease;

  &:hover, &:active {
    background: #E2AFAC;
    box-shadow: ${fakeAsbestos}88 0em 0.5em 1em 0em;
  }
`;

const Icon = styled.div`

`;

export default AddButton;