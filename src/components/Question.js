import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    width: 320,
    height: 200,
    marginBottom: 15,
  },
  content: {
    height: 120,
    backgroundColor: '#FAFAFA',
    // flexbox container properties
    display: 'flex',
    alignItems: 'center',
  },
  one: {
    width: '40%',
    textAlign: 'left',
  },
  divider: {
    textAlign: 'center',
    width: '20%',
  },
  two: {
    width: '40%',
    textAlign: 'right',
  },
  cta: {
    height: 50,
    textAlign: 'center',
    backgroundColor: '#009688',
    // flexbox container properties
    display: 'flex',
    justifyContent: 'center',
  }
};

class Question extends Component {
  static propTypes = {
    // from MapStateToProps
    questions: PropTypes.object.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
    // from QuestionFeed
    id: PropTypes.string.isRequired,
  };

  render() {
    const { questions, classes, id } = this.props;
    const optionOne = questions[id].optionOne.text;
    const optionTwo = questions[id].optionTwo.text;

    return (
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography className={classes.one}>
              {optionOne}
            </Typography>
            <div className={classes.divider}>
              — or —
            </div>
            <Typography className={classes.two}>
              {optionTwo}
            </Typography>
          </CardContent>
          <CardActions className={classes.cta}>
            <Button>Answer It</Button>

          </CardActions>

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
