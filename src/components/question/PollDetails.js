import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
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
    // from material-ui
    classes: PropTypes.object.isRequired,
    // from Question
    id: PropTypes.string.isRequired,
  };


  countVotes(oneOrTwo) {
    const { questions, id } = this.props;
    const option = oneOrTwo === 1 ? 'optionOne' : 'optionTwo';
    return questions[id][option]["votes"].length;
  }

  render() {
    const { classes } = this.props;
    const optionOneCount = this.countVotes(1);
    const optionTwoCount = this.countVotes(2);
    const optionOnePercent = parseInt(100 * (optionOneCount / (optionOneCount + optionOneCount)));
    const optionTwoPercent = parseInt(100 - optionOnePercent);

    return (
      <div className={classes.container}>
        <div className={classes.options}>
          <Typography
            style={{ }}
            variant="display2"
          >
            {`${optionOnePercent}%`}
          </Typography>
          <Typography
            style={{ marginTop: 5 }}
            variant="caption"
          >
            voted for option one
          </Typography>
        </div>
        <div className={classes.options}>
          <Typography
            style={{ }}
            variant="display2"
          >
            {`${optionOnePercent}%`}
          </Typography>
          <Typography
            style={{ marginTop: 5 }}
            variant="caption"
          >
            voted for option two
          </Typography>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(PollDetails));
