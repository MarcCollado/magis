import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
// relative imports
import { handleRegisterVote } from '../../actions/questions';

class PollIsVoting extends Component {
  static propTypes = {
    // from connect
    dispatch: PropTypes.func.isRequired,
    // from Question
    id: PropTypes.string.isRequired,
  };

  state = {
    toDetails: false,
  };

  handleOptionOne = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const option = 'optionOne';
    const payLoad = { id, option };
    dispatch(handleRegisterVote(payLoad));
    setTimeout(() => this.setState(() => ({
      toDetails: true,
    })), 1000);
  }

  handleOptionTwo = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const option = 'optionTwo';
    const payLoad = { id, option };
    dispatch(handleRegisterVote(payLoad));
    setTimeout(() => this.setState(() => ({
      toDetails: true,
    })), 1000);
  }

  render() {
    const cardStyles = {
      height: 50,
      width: '50%',
      textAlign: 'center',
      // flexbox container properties
      display: 'flex',
      justifyContent: 'center',
    };
    const { id } = this.props;
    const { toDetails } = this.state;

    if (toDetails === true) {
      return <Redirect to={`/questions/${id}/details`} />;
    }

    return (
      <CardActions
        className="card-actions"
      >
        <div style={cardStyles}>
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleOptionOne}
          >
            Vote Option One
          </Button>
        </div>
        <div style={cardStyles}>
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleOptionTwo}
          >
            Vote Option Two
          </Button>
        </div>
      </CardActions>
    );
  }
}

export default connect()(PollIsVoting);
