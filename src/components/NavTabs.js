import React from 'react';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// relative imports
import Feed from './Feed';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
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
        <Feed
          answered={value}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(NavTabs);
