import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
// relative imports
import QuestionActions from './QuestionActions';

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
  cta: {
    height: 50,
    textAlign: 'center',
    // flexbox container properties
    display: 'flex',
    justifyContent: 'center',
  },
};

class Question extends Component {
  static propTypes = {
    // from MapStateToProps
    questions: PropTypes.object.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
    // from QuestionFeed
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'ANSWERED',
      'UNANSWERED',
      'AWAITING_ANSWER',
      'SHOW_RESULTS',
    ]),
  };

  state = {
    status: this.props.status,
  }

  render() {
    const { questions, classes, id } = this.props;
    const { status } = this.state;
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
              src="or.webp"
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
        <QuestionActions
          id={id}
          status={status}
        >
        </QuestionActions>
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
