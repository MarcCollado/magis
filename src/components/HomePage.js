import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import HomeTabs from './HomeTabs';
import OpenPoll from './OpenPoll';
import VotedPoll from './VotedPoll';
import { BodyText } from '../styles/typography';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: 0 };
  }

  handleTabChange = (value) => {
    this.setState({ feed: value });
  };

  // determines which option the authUser voted for, and passes it down to
  // VotedPoll via props, so it can highlight the voted option
  // returns 1 for optionOne, 2 for optionTwo
  whichVoted = (authUser, poll) => {
    if (poll.votes[authUser] !== undefined) {
      return poll.votes[authUser];
    }
    return null;
  }


  render() {
    const {
      authUser,
      polls,
      votedPollsIDs,
      unvotedPollsIDs,
    } = this.props;

    const { feed } = this.state;

    return (
      <Layout>
        <HomeTabs
          tabState={feed}
          handleTabChange={this.handleTabChange}
        />
        <BodyText>
          {feed === 0
            ? `Tap your option to vote for it 📨`
            : `Tap the poll to check its details 📈`
          }
        </BodyText>
        <List>
          {feed === 0
            ? unvotedPollsIDs.map((id) => (
              <ListItem
                key={id}
              >
                <OpenPoll
                  id={id}
                >
                  {polls[id]}
                </OpenPoll>
              </ListItem>))
            : votedPollsIDs.map((id) => (
              <ListItem
                key={id}
              >
                <VotedPoll
                  id={id}
                  voted={this.whichVoted(authUser, polls[id])}
                >
                  {polls[id]}
                </VotedPoll>
              </ListItem>))
          }
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
  authUser: PropTypes.string,
  polls: PropTypes.shape(PropTypes.object).isRequired,
  votedPollsIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  unvotedPollsIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

HomePage.defaultProps = {
  authUser: null,
};

function mapStateToProps({ authUser, polls }) {
  if (authUser) {
    // filter votes from the currently authUser
    const votedPollsIDs = Object.keys(polls)
      .filter((key) => (polls[key].votes !== undefined ? authUser in polls[key].votes : false))
      .sort((a, b) => (polls[b].timestamp - polls[a].timestamp));
    // create a copy of [votedPollsIDs] to extract the [unvotedPollsIDs]
    const filteredIDs = [...votedPollsIDs];
    const unvotedPollsIDs = Object.keys(polls)
      .filter((key) => (!filteredIDs.includes(key)))
      .sort((a, b) => (polls[b].timestamp - polls[a].timestamp));

    return {
      authUser,
      polls,
      votedPollsIDs,
      unvotedPollsIDs,
    };
  }
  // if no user is logged in then...
  const votedPollsIDs = [];
  const unvotedPollsIDs = Object.keys(polls);

  return {
    authUser,
    polls,
    votedPollsIDs,
    unvotedPollsIDs,
  };
}

export default connect(mapStateToProps)(HomePage);
