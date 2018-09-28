import React from 'react';
import PropTypes from 'prop-types';
// imports from material-ui
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// relative imports
import Feed from './Feed';
import Layout from './Layout';

class NavTabs extends React.Component {
  static propTypes = {
    // from material-ui
    classes: PropTypes.object.isRequired,
  };

  state = {
    value: 0,
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default NavTabs;
