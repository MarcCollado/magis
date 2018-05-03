import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
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
      <div className={classes.root}>
        <Tabs
          centered
          value={value}
          onChange={this.handleChange}
        >
          <Tab label="UNANSWERED" />
          <Tab label="ANSWERED" />
        </Tabs>
        {value === 0 &&
          <QuestionFeed
            answered={value}
          />
        }
        {value === 1 &&
          <QuestionFeed
            answered={value}
          />
        }
      </div>
    );
  }
}

export default withStyles(styles)(QuestionSwitch);
