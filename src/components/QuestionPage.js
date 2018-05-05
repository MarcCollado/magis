import React, { Component } from 'react';

class QuestionPage extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h3>ID: {match.params.id}</h3>
        <h3>URL: {match.url}</h3>
      </div>
    );
  }
}
export default QuestionPage;
