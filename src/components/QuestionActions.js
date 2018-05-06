import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
// relative imports
import { handleAnswerQuestion } from '../actions/questions';

const styles = {
  cta: {
    height: 50,
    textAlign: 'center',
    // flexbox container properties
    display: 'flex',
    justifyContent: 'center',
  },
};

class QuestionActions extends Component {
  static propTypes = {
    // from MapStateToProps
    // questions: PropTypes.object.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
    // from Question
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'ANSWERED',
      'UNANSWERED',
      'AWAITING_ANSWER',
      'SHOW_RESULTS',
    ]),
  };

  handleVote = (e) => {
    e.preventDefault();

    const { dispatch, id } = this.props;

    dispatch(handleAnswerQuestion(id, "optionOne"));
  }

  render() {
    const { classes, id, status } = this.props;

    const dynamicRender = function() {
      if (status === 'UNANSWERED') {
        return (
          <CardActions className={classes.cta}>
            <Link
              to={`/questions/${id}`}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="button"
                color="textSecondary"
              >
                Answer It
              </Typography>
            </Link>
          </CardActions>
        );
      } else if (status === 'ANSWERED') {
        return (
          <CardActions className={classes.cta}>
            <Link
              to={`/questions/${id}`}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="button"
                color="textSecondary"
              >
                View Results
              </Typography>
            </Link>
          </CardActions>
        );
      } else if (status === 'AWAITING_ANSWER') {
        return (
          <Button
            variant="raised"
            color="primary"
            onClick={this.handleVote}
          >
            Vote
          </Button>
        );
      }
    }
    return (
      dynamicRender()
    );
  }
}

export default withStyles(styles)(connect()(QuestionActions));
