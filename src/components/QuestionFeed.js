import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
// relative imports
import Question from './Question';

const styles = {
  container: {
    width: '85%',
    margin: 'auto',
    // flexbox container properties
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  feed: {
    padding: 0,
    width: '100%',
    maxWidth: 480,
  },
};

class QuestionFeed extends Component {
  static propTypes = {
    // from MapStateToProps
    unansweredQuestionsID: PropTypes.arrayOf(PropTypes.string).isRequired,
    answeredQuestionsID: PropTypes.arrayOf(PropTypes.string).isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
    // from QuestionSwitch
    answered: PropTypes.number.isRequired,
  }

  render() {
    const {
      answeredQuestionsID,
      unansweredQuestionsID,
      classes,
      answered,
    } = this.props;

    return (
      <div className={classes.container}>
        <ul className={classes.feed}>
          {answered === 0
            ? unansweredQuestionsID
              .map(id => (
                <li
                  key={id}
                  style={{ listStyleType: 'none' }}
                >
                  <Question
                    id={id}
                    status="UNANSWERED"
                  />
                </li>))
            : answeredQuestionsID
            .map(id => (
              <li
                key={id}
                style={{ listStyleType: 'none' }}
              >
                <Question
                  id={id}
                  status="ANSWERED"
                />
              </li>))
          }
        </ul>
      </div>
    );
  }
}

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

export default withStyles(styles)(connect(mapStateToProps)(QuestionFeed));
