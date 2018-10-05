import React from 'react';
// imports from material-ui
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// relative imports
import PollList from './PollList';
import Layout from './Layout';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

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
        <PollList
          answered={value}
        />
      </Layout>
    );
  }
}

export default HomePage;
