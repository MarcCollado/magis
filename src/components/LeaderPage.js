import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LeaderCard from './LeaderCard';
import Layout from './Layout';
import { Title1, BodyText, MetaText } from '../styles/typography';

const LeaderPage = ({ userStats }) => (
  <Layout>
    <Title1>
      {`Leaderboard`}
    </Title1>
    <BodyText>
      {`Meet the app's top performers 🏅`}
    </BodyText>
    <MetaText>
      {`The more polls they post and vote, the higher they rank.`}
    </MetaText>
    <List>
      {userStats
        .map((user) => (
          <ListItem
            key={user.userName}
          >
            <LeaderCard
              imageURL={user.imageURL}
              userName={user.userName}
              pollsVoted={user.pollsVoted}
              pollsCreated={user.pollsCreated}
            />
          </ListItem>
        ))
      }
    </List>
  </Layout>
);

const List = styled.ul`
  padding: 0em;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

LeaderPage.propTypes = {
  // from connect
  userStats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps({ users }) {
  const userStats = Object.keys(users)
    .map((user) => ({
      imageURL: users[user].avatarURL,
      userName: users[user].name,
      pollsVoted: Object.keys(users[user].votes).length,
      pollsCreated: users[user].polls.length,
    }))
    .map((user) => ({
      ...user,
      rank: user.pollsVoted + user.pollsCreated,
    }))
    .sort((a, b) => (b.rank - a.rank));
  return {
    userStats,
  };
}

export default connect(mapStateToProps)(LeaderPage);
