import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Question from './Question';

class QuestionFeed extends Component {
  static propTypes = {
    // from MapStateToProps
    unansweredQuestionsID: PropTypes.arrayOf(PropTypes.string).isRequired,
    answeredQuestionsID: PropTypes.arrayOf(PropTypes.string).isRequired,
    // from QuestionSwitch
    answered: PropTypes.number,
  }

  render() {
    return (
      <div>
        <ul className="question-feed">
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

export default connect(mapStateToProps)(QuestionFeed);
