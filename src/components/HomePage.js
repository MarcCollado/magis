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
  whichVoted = (user, poll) => {
    if (poll.optionOne.votes.includes(user)) {
      return 1;
    } if (poll.optionTwo.votes.includes(user)) {
      return 2;
    }
    return null;
  }

  render() {
    const {
      authUser,
      polls,
      votedPollsIds,
      unvotedPollsIds,
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
            ? unvotedPollsIds.map((id) => (
              <ListItem
                key={id}
              >
                <OpenPoll
                  id={id}
                >
                  {polls[id]}
                </OpenPoll>
              </ListItem>))
            : votedPollsIds.map((id) => (
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
  polls: PropTypes.objectOf(PropTypes.object),
  votedPollsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  unvotedPollsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

HomePage.defaultProps = {
  authUser: null,
};

function mapStateToProps({ polls, authUser }) {
  // filter votes from the currently authUser
  console.log('POLLS', polls);
  const votedPollsIds = Object.keys(polls)
    .filter((i) => (
      polls[i].optionOne.votes.includes(authUser)
      || polls[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (polls[b].timestamp - polls[a].timestamp));

  // create a copy of [votedPollsIds] to extract the [unvotedPollsIds]
  const filteredIDs = [...votedPollsIds];

  const unvotedPollsIds = Object.keys(polls)
    .filter((i) => (!filteredIDs.includes(i)))
    // used to check for the complementary case
    // !polls[i].optionOne.votes.includes(authUser) &&
    // !polls[i].optionTwo.votes.includes(authUser)
    .sort((a, b) => (polls[b].timestamp - polls[a].timestamp));

  return {
    authUser,
    polls,
    votedPollsIds,
    unvotedPollsIds,
  };
}

export default connect(mapStateToProps)(HomePage);
