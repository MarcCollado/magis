import React from 'react';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
// relative imports
import QuestionFeed from './QuestionFeed';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

class QuestionSwitch extends React.Component {
  static propTypes = {
    // from material-ui
    classes: PropTypes.object.isRequired,
  };

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
        <Tabs
          centered
          fullWidth
          indicatorColor="primary"
          textColor="primary"
          value={value}
          onChange={this.handleChange}
        >
          <Tab label="UNANSWERED" />
          <Tab label="ANSWERED" />
        </Tabs>
        <QuestionFeed
          answered={value}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(QuestionSwitch);
