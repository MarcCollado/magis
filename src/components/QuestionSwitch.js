import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import QuestionFeed from './QuestionFeed';

function TabContainer(props) {
  return (
    <Typography
      component="div"
      style={{ padding: 8 * 3 }}
    >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class QuestionSwitch extends React.Component {
  static propTypes = {
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
          <TabContainer>
            <QuestionFeed
              answered={value}
            />
          </TabContainer>}
        {value === 1 &&
          <TabContainer>
            <QuestionFeed
              answered={value}
            />
          </TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(QuestionSwitch);
