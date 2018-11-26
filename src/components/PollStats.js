import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { electricBlue } from '../styles/colors';
import { Title2, BodyText } from '../styles/typography';

const countVotes = (poll) => {
  const votes = [poll.optionOne.votes.length, poll.optionTwo.votes.length];
  return votes;
};

const PollStats = ({ children }) => {
  const votes = countVotes(children);
  // over engineered (but cool) way to sum the two elements of an array
  const totalVotes = [...votes].reduce((a, b) => a + b, 0);
  const optionOnePer = parseInt(100 * (votes[0] / totalVotes), 10);
  const optionTwoPer = parseInt(100 - optionOnePer, 10);

  return (
    <Container>
      <Title2>Poll Stats</Title2>
      <BodyText>
        {votes === 1
          ? `You're the only one that has participated in this poll so far.`
          : `${totalVotes} people participated in this poll. ${optionOnePer}% voted for option one,
          while ${optionTwoPer}% voted for option two.`
        }
      </BodyText>
    </Container>
  );
};

const Container = styled.div`
  background: ${electricBlue}22;
  border-radius: 0.5em;
  margin: 1em 3em;
  padding: 0.5em 1.5em;
  text-align: center;
`;

PollStats.propTypes = {
  // from PollDetails
  children: PropTypes.object.isRequired,
};

export default PollStats;
