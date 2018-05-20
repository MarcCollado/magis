import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
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
    const userVote = { id, option };
    dispatch(handleRegisterVote(userVote));
    setTimeout(() => this.setState(() => ({
      toDetails: true,
    })), 500);
  }

  handleOptionTwo = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const option = 'optionTwo';
    const userVote = { id, option };
    dispatch(handleRegisterVote(userVote));
    setTimeout(() => this.setState(() => ({
      toDetails: true,
    })), 500);
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
            style={{ width: '100%' }}
            color="primary"
            onClick={this.handleOptionOne}
          >
            Vote Option One
          </Button>
        </div>
        <div style={cardStyles}>
          <Button
            style={{ width: '100%' }}
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
