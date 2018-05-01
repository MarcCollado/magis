import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Question from './Question';

class QuestionFeed extends Component {
  static propTypes = {
    questionsID: PropTypes.arrayOf(PropTypes.string).isRequired,
    answered: PropTypes.number,
  }

  render() {
    return (
      <div>
        <ul className="question-feed">
          {/* if this.props.anwered ==>  answeredQuestionsID
          else ==> unansweredQuestionsID*/}
          {this.props.questionsID
            .map(id => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    //answeredQuestionsID
    //unansweredQuestionsID
    questionsID: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
}

export default connect(mapStateToProps)(QuestionFeed);
