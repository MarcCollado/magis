import React, { Component } from 'react';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
// relative imports
import QuestionCard from './QuestionCard';

const styles = {
  container: {
    width: '85%',
    margin: 'auto',
    // flexbox container properties
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  feed: {
    marginTop: 15,
    padding: 0,
    width: '100%',
    maxWidth: 480,
  },
};

class QuestionPage extends Component {
  static propTypes = {
    // from material-ui
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes, match } = this.props;
    const id = match.params.id
    return (
      <div className={classes.container}>
        <div className={classes.feed}>
          <QuestionCard
            id={id}
            status="Unanswered"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(QuestionPage);
