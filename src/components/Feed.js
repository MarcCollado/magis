import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Question from './question/Question';

const Feed = ({
  answeredIDs,
  unansweredIDs,
  answered,
}) => (
  <List>
  {answered === 0 ?
      unansweredIDs
    .map(id => (
      <ListItem
        key={id}
      >
        <Question
          id={id}
          status="UserWillVote"
        />
      </ListItem>)) :
      answeredIDs
    .map(id => (
      <ListItem
        key={id}
      >
        <Question
          id={id}
          status="UserDidVote"
        />
      </ListItem>))}
  </List>
);

const List = styled.ul`
  padding: 0em;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

Feed.propTypes = {
  // from connect
  answeredIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  unansweredIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  // from NavTabs
  answered: PropTypes.number.isRequired,
};

function mapStateToProps({ questions, authUser }) {
  const answeredIDs = Object.keys(questions)
    .filter(i => (
      questions[i].optionOne.votes.includes(authUser) ||
      questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  const unansweredIDs = Object.keys(questions)
    .filter(i => (
      !questions[i].optionOne.votes.includes(authUser) &&
      !questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  return {
    answeredIDs,
    unansweredIDs,
  };
}

export default connect(mapStateToProps)(Feed);
