import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
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
    backgroundColor: 'inherit',
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
            <Typography
              className={classes.one}
              variant="body1"
            >
              {optionOne}
            </Typography>
            <div className={classes.divider}>
              <Typography
                variant="button"
              >
                — or —
              </Typography>
            </div>
            <Typography
              className={classes.two}
              variant="body1"
            >
              {optionTwo}
            </Typography>
          </CardContent>
          <CardActions className={classes.cta}>
            <Typography
              variant="button"
              color="textSecondary"
            >
              Answer It
            </Typography>

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
