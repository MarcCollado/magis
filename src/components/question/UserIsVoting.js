import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
// relative imports
import { handleAnswerQuestion } from '../../actions/questions';

class UserIsVoting extends Component {
  static propTypes = {
    // from Question
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'UserIsVoting',
    ]),
  };

  handleOptionOne = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const option = 'optionOne'
    dispatch(handleAnswerQuestion(id, option));
  }

  handleOptionTwo = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const option = 'optionTwo'
    dispatch(handleAnswerQuestion(id, option));
  }

  render() {
    const cardStyles = {
      height: 50,
      textAlign: 'center',
      // flexbox container properties
      display: 'flex',
      justifyContent: 'center',
    };

    return (
      <CardActions
        className="card-actions"
        style={cardStyles}
      >
        <Button
          variant="raised"
          color="primary"
          onClick={this.handleOptionOne}
        >
          Vote Option One
        </Button>
        <Button
          variant="raised"
          color="secondary"
          onClick={this.handleOptionTwo}
        >
          Vote Option Two
        </Button>
      </CardActions>
    );
  }
}

export default connect()(UserIsVoting);
