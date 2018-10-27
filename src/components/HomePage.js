import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import HomeTabs from './HomeTabs';
import Question from './question/Question';
import PollCard from './PollCard';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: "unanswered" };
  }

  handleTabChange = (value) => {
    this.setState({ feed: value });
  };

  render() {
    const {
      answeredIDs,
      unansweredIDs,
    } = this.props;

    const { feed } = this.state;

    return (
      <Layout>
        <HomeTabs
          tabState={feed}
          handleTabChange={this.handleTabChange}
        >
        </HomeTabs>
        <PollCard></PollCard>
        <List>
          {feed === "unanswered" ?
            unansweredIDs.map(id => (
              <ListItem
                key={id}
              >
                <Question
                  id={id}
                  status="Vote"
                />
              </ListItem>)) :
            answeredIDs.map(id => (
              <ListItem
                key={id}
              >
                <Question
                  id={id}
                  status="SeeDetails"
                />
              </ListItem>))}
        </List>
      </Layout>
    );
  }
}

const List = styled.ul`
  padding: 0em;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

HomePage.propTypes = {
  // from connect
  answeredIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  unansweredIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps({ questions, authUser }) {
  // filter votes from the currently authUser
  const answeredIDs = Object.keys(questions)
    .filter(i => (
      questions[i].optionOne.votes.includes(authUser) ||
      questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  // create a copy of [answeredIDs] to extract the [unansweredIDs]
  const filteredIDs = [...answeredIDs];

  const unansweredIDs = Object.keys(questions)
    .filter(i => (!filteredIDs.includes(i)))
      // used to check for the complementary case
      // !questions[i].optionOne.votes.includes(authUser) &&
      // !questions[i].optionTwo.votes.includes(authUser)
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  return {
    answeredIDs,
    unansweredIDs,
  };
}

export default connect(mapStateToProps)(HomePage);
