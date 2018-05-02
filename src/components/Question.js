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
    minWidth: 275,
    marginBottom: 15,
  },
  divider: {

  },
  one: {
    maxWidth: '40%',
    float: 'left',
    textAlign: 'left',
  },
  two: {
    maxWidth: '40%',
    float: 'right',
    textAlign: 'right',
  },
  cta: {
    textAlign: 'center',
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
      <div>
        <Card className={classes.card}>
          <CardContent>
            <div>
              <Typography className={classes.one} component="p">
                {optionOne}
              </Typography>
            </div>
            <div>
              <Typography className={classes.two} component="p">
                {optionTwo}
              </Typography>
            </div>
            <div style={{ clear:"both" }}></div>
            <div>
              <CardActions>
                <Button className={classes.cta}>Answer It</Button>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Question));
