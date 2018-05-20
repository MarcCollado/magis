import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  voted: {
    width: '100%',
    height: 30,
    backgroundColor: '#E8EAF6',
    textAlign: 'center',
  },
  container: {
    // flexbox container properties
    display: 'flex',
    justifyContent: 'center',
  },
  options: {
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    // flexbox container properties
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

class PollDetails extends Component {
  static propTypes = {
    // from MapStateToProps
    questions: PropTypes.object.isRequired,
    answer: PropTypes.string.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
    // from Question
    id: PropTypes.string.isRequired,
  };


  countVotes(oneOrTwo) {
    const { questions, id } = this.props;
    const option = oneOrTwo === 1 ? 'optionOne' : 'optionTwo';
    return questions[id][option].votes.length;
  }

  render() {
    const { classes, answer } = this.props;
    const optionOneCount = this.countVotes(1);
    const optionTwoCount = this.countVotes(2);
    const totalVotes = optionOneCount + optionTwoCount;
    const optionOnePercent = parseInt(100 * (optionOneCount / totalVotes), 10);
    const optionTwoPercent = parseInt(100 - optionOnePercent, 10);

    return (
      <div>
        <div className={classes.voted}>
          <Typography
            style={{ paddingTop: 6 }}
            variant="caption"
            color="default"
          >
            {answer !== '' ? `${answer}` : ''}
          </Typography>
        </div>
        <div className={classes.container}>
          <div className={classes.options}>
            <Typography
              style={{ marginBottom: 5 }}
              variant="display2"
            >
              {`${optionOnePercent}%`}
            </Typography>
            <Typography
              style={{ marginBottom: 12 }}
              variant="caption"
            >
              {optionOneCount === 1
                ? `voted by ${optionOneCount} user`
                : `voted by ${optionOneCount} users`}
            </Typography>
          </div>
          <div className={classes.options}>
            <Typography
              style={{ marginBottom: 5 }}
              variant="display2"
            >
              {`${optionTwoPercent}%`}
            </Typography>
            <Typography
              style={{ marginBottom: 12 }}
              variant="caption"
            >
              {optionTwoCount === 1
                ? `voted by ${optionTwoCount} user`
                : `voted by ${optionTwoCount} users`}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authUser }, { id }) {
  let answer = '';

  if (questions[id].optionOne.votes.includes(authUser)) {
    answer = '🙋‍ You voted for option one';
  } else if (questions[id].optionTwo.votes.includes(authUser)) {
    answer = 'You voted for option two 🙋‍';
  } else {
    answer = '';
  }
  return {
    answer,
    questions,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(PollDetails));
