import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Question from './Question';

const styles = {
  container: {
    width: '80%',
    maxWidth: 800,
    margin: 'auto',
    // flexbox container properties
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    answered: PropTypes.number,
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <ul>
          {this.props.answered === 0
            ? this.props.unansweredQuestionsID
              .map(id => (
                <li key={id} style={{ listStyleType: "none" }}>
                  <Question id={id} />
                </li>))
            : this.props.answeredQuestionsID
            .map(id => (
              <li key={id} style={{ listStyleType: "none" }}>
                <Question id={id} />
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
