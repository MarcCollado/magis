import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
// relative imports
import Question from './question/Question';
// styles
import { Feed as styles } from '../styles/styles';

const Feed = ({
  answeredQuestionsID,
  unansweredQuestionsID,
  classes,
  answered,
}) => (
  <div className={classes.container}>
    <ul className={classes.feed}>
      {answered === 0 ?
          unansweredQuestionsID
        .map(id => (
          <li
            key={id}
            style={{ listStyleType: 'none' }}
          >
            <Question
              id={id}
              status="UserWillVote"
            />
          </li>)) :
          answeredQuestionsID
        .map(id => (
          <li
            key={id}
            style={{ listStyleType: 'none' }}
          >
            <Question
              id={id}
              status="UserDidVote"
            />
          </li>))}
    </ul>
  </div>
);

Feed.propTypes = {
  // from MapStateToProps
  unansweredQuestionsID: PropTypes.arrayOf(PropTypes.string).isRequired,
  answeredQuestionsID: PropTypes.arrayOf(PropTypes.string).isRequired,
  // from material-ui
  classes: PropTypes.object.isRequired,
  // from NavTabs
  answered: PropTypes.number.isRequired,
};

function mapStateToProps({ questions, authUser }) {
  const userHasAnswered = Object.keys(questions)
    .filter(i => (
      questions[i].optionOne.votes.includes(authUser) ||
      questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  const userHasNotAnswered = Object.keys(questions)
    .filter(i => (
      !questions[i].optionOne.votes.includes(authUser) &&
      !questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  return {
    answeredQuestionsID: userHasAnswered,
    unansweredQuestionsID: userHasNotAnswered,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Feed));
