import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bianchiGreen, seriousYellow, fakeAsbestos } from '../styles/colors';
import { BodyText } from '../styles/typography';

const UnbiasedPoll = ({ children: poll }) => {
  const options = [poll.options.optionOne, poll.options.optionTwo];
  return (
    <Container>
      <OptionContainer>
        <OptionText>
          {options[0]}
        </OptionText>
      </OptionContainer>
      <OptionContainer
        right
      >
        <OptionText
          right
        >
          {options[1]}
        </OptionText>
      </OptionContainer>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  border-radius: 1em;
  box-shadow: ${fakeAsbestos}22 0em 0.25em 0.25em 0em;
  display: flex;
  margin-bottom: 2em;
  overflow: hidden;
`;

const OptionContainer = styled.div`
  align-items: center;
  background: ${(props) => (props.right ? `${seriousYellow}` : `${bianchiGreen}`)};
  display: flex;
  flex-basis: 50%;
  height: 12em;
  justify-content: ${(props) => (props.right ? 'flex-end' : 'flex-start')};
  padding: 0.5em 1em;
`;

const OptionText = styled(BodyText)`
  color: ${fakeAsbestos};
  text-align: ${(props) => (props.right ? 'right' : 'left')};
`;

// Add an (OR) div in the middle of the Poll
// const OR = styled.div``;

UnbiasedPoll.propTypes = {
  children: PropTypes.object.isRequired,
};

export default UnbiasedPoll;
