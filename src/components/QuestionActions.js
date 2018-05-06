import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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
    // from QuestionCard
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Answered', 'Unanswered']),
  };

  state = {
    status: this.props.status,
  };

  render() {
    const { classes, id } = this.props;
    const { status } = this.state;

    return (
      status === 'Unanswered' ? (
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
      ) : (
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
      )
    );
  }
}

export default withStyles(styles)(QuestionActions);
