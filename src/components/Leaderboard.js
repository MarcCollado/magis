import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import { Title1, BodyText, MetaText } from '../styles/typography';

// relative imports
import UserCard from './ui-library/UserCard';


const Leaderboard = ({ userDetails }) => (
  <Layout>
    <Title1>
      {`Leaderboard`}
    </Title1>
    <BodyText>
      {'Meet the app\'s top performers.'}
    </BodyText>
    <MetaText>
      {'The more questions they post and vote, the higher they rank 🏅'}
    </MetaText>
    <List>
      {userDetails
        .map(user => (
          <ListItem
            key={user.userName}
          >
            <UserCard
              imageURL={user.imageURL}
              userName={user.userName}
              questionsAnswered={user.questionsAnswered}
              questionsPosted={user.questionsPosted}
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

Leaderboard.propTypes = {
  // from connect
  userDetails: PropTypes.array.isRequired
};

function mapStateToProps({ users }) {
  const userDetails = Object.keys(users)
    .map((user) => {
      const tempUserDetails = {
        imageURL: users[user].avatarURL,
        userName: users[user].name,
        questionsAnswered: Object.keys(users[user].answers).length,
        questionsPosted: users[user].questions.length,
      };
      const rank = tempUserDetails.questionsAnswered + tempUserDetails.questionsPosted;
      tempUserDetails.userRank = rank;
      return (tempUserDetails);
    })
    .sort((a, b) => (
      b.userRank - a.userRank
    ));
  return {
    userDetails,
  };
}

export default connect(mapStateToProps)(Leaderboard);
