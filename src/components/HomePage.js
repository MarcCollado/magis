import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CreatePollButton from './CreatePollButton';
import Layout from './Layout';
import HomeTabs from './HomeTabs';
import OpenPoll from './OpenPoll';
import TogglePollButton from './TogglePollButton';
import VotedPoll from './VotedPoll';
import { BodyText } from '../styles/typography';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: 0, viewAll: true };
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

  handleToggleView = () => {
    this.setState((prevState) => ({
      viewAll: !prevState.viewAll,
    }));
  }

  showTheRightList = (state, props) => {
    const {
      authUser,
      polls,
      votedPollsIDs,
      unvotedPollsIDs,
      ownUnvotedPollsIDs,
    } = props;
    const { feed, viewAll } = state;
    if (feed === 0) {
      return viewAll
        ? unvotedPollsIDs.map((id) => (
          <ListItem
            key={id}
          >
            <OpenPoll
              id={id}
            >
              {polls[id]}
            </OpenPoll>
          </ListItem>
        )) : ownUnvotedPollsIDs.map((id) => (
          <ListItem
            key={id}
          >
            <OpenPoll
              id={id}
            >
              {polls[id]}
            </OpenPoll>
          </ListItem>
        ));
    }
    return votedPollsIDs.map((id) => (
      <ListItem
        key={id}
      >
        <VotedPoll
          id={id}
          voted={this.whichVoted(authUser, polls[id])}
        >
          {polls[id]}
        </VotedPoll>
      </ListItem>
    ));
  }

  render() {
    const { feed, viewAll } = this.state;
    const {
      authUser,
      polls,
      votedPollsIDs,
      unvotedPollsIDs,
      ownUnvotedPollsIDs,
    } = this.props;

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
          {this.showTheRightList(this.state, this.props)}
          {authUser && (
          <TogglePollButton
            viewAll={viewAll}
            handleToggleView={this.handleToggleView}
          />
          )}
          {authUser && <Link to="/create"><CreatePollButton /></Link>}
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
  ownUnvotedPollsIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
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
    const ownUnvotedPollsIDs = Object.keys(polls)
      .filter((key) => (!filteredIDs.includes(key) && polls[key].createdBy === authUser))
      .sort((a, b) => (polls[b].timestamp - polls[a].timestamp));

    return {
      authUser,
      polls,
      votedPollsIDs,
      unvotedPollsIDs,
      ownUnvotedPollsIDs,
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
