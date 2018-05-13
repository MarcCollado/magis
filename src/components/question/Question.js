import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
// relative imports
import FeedLink from './FeedLink';
import PollIsVoting from './PollIsVoting';
import PollDetails from './PollDetails';

const styles = {
  card: {
    marginBottom: 15,
  },
  content: {
    height: 120,
    backgroundColor: '#FAFAFA',
    // flexbox container properties
    display: 'flex',
    alignItems: 'center',
  },
  question: {
    width: '38%',
  },
  or: {
    width: '24%',
    textAlign: 'center',
  },
};

class Question extends Component {
  static propTypes = {
    // from MapStateToProps
    questions: PropTypes.object.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
    // from Feed
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'UserWillVote',
      'UserDidVote',
      'PollIsVoting',
      'PollDetails',
    ]).isRequired,
  };

  state = {
    status: this.props.status,
  }

  renderActions() {
    const { status } = this.state;
    const { id } = this.props;

    switch (status) {
      case 'UserDidVote':
        return (
          <FeedLink
            id={id}
            status={status}
          />
        );
      case 'PollIsVoting':
        return (
          <PollIsVoting
            id={id}
          />
        );
      case 'PollDetails':
        return (
          <PollDetails
            id={id}
          />
        );
      default:
        return (
          <FeedLink
            id={id}
            status={status}
          />
        );
    }
  }
  render() {
    const { questions, classes, id } = this.props;
    const optionOne = questions[id].optionOne.text;
    const optionTwo = questions[id].optionTwo.text;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography
            className={classes.question}
            style={{ textAlign: 'left' }}
            variant="body1"
          >
            {optionOne}
          </Typography>
          <div className={classes.or}>
            <img
              alt="or"
              src="/or.webp"
              style={{ width: 35 }}
            />
          </div>
          <Typography
            className={classes.question}
            style={{ textAlign: 'right' }}
            variant="body1"
          >
            {optionTwo}
          </Typography>
        </CardContent>

        {this.renderActions()}

      </Card>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Question));
