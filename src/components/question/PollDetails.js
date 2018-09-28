import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bianchiGreen } from '../../styles/colors';
import { Title2, MetaText } from '../../styles/typography';

class PollDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  countVotes(oneOrTwo) {
    const { questions, id } = this.props;
    const option = oneOrTwo === 1 ? 'optionOne' : 'optionTwo';
    return questions[id][option].votes.length;
  }

  render() {
    const { answer } = this.props;
    const optionOneCount = this.countVotes(1);
    const optionTwoCount = this.countVotes(2);
    const totalVotes = optionOneCount + optionTwoCount;
    const optionOnePercent = parseInt(100 * (optionOneCount / totalVotes), 10);
    const optionTwoPercent = parseInt(100 - optionOnePercent, 10);

    return (
      <div>
        <YourVote>
          <MetaText>
          {answer !== '' ? `${answer}` : ''}
          </MetaText>
        </YourVote>
        <PollResults>
          <OptionResults>
            <Title2>
              {`${optionOnePercent}%`}
            </Title2>
            <MetaText>
              {optionOneCount === 1
                ? `voted by ${optionOneCount} user`
                : `voted by ${optionOneCount} users`}
            </MetaText>
          </OptionResults>
          <OptionResults>
            <Title2>
              {`${optionTwoPercent}%`}
            </Title2>
            <MetaText>
              {optionTwoCount === 1
                ? `voted by ${optionTwoCount} user`
                : `voted by ${optionTwoCount} users`}
            </MetaText>
          </OptionResults>
        </PollResults>
      </div>
    );
  }
}

const YourVote = styled.div`
  background: ${bianchiGreen}88;
  border-radius: 0.25em;
  margin: 1em 0em;
  padding: 0.5em;
  text-align: center;
`;

const PollResults = styled.div`
  display: flex;
`;

const OptionResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0.5em 0em;
  padding: 0.25em 0.75em;
`;

function mapStateToProps({ questions, authUser }, { id }) {
  let answer = '';

  if (questions[id].optionOne.votes.includes(authUser)) {
    answer = '🙋‍ You voted for option one';
  } else if (questions[id].optionTwo.votes.includes(authUser)) {
    answer = 'You voted for option two 🙋‍';
  } else {
    answer = '';
  }

  return {
    answer,
    questions,
  };
}

PollDetails.propTypes = {
  // from connect
  questions: PropTypes.object.isRequired,
  answer: PropTypes.string.isRequired,
  // from Question
  id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PollDetails);
