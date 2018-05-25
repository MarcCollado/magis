import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// relative imports
import UserCard from './ui-library/UserCard';
// styles
import { Leaderboard as styles } from '../styles/styles';

const Leaderboard = ({ classes, userDetails }) => (
  <div className={classes.container}>
    <Typography
      style={{ marginTop: 20 }}
      variant="display1"
    >
      Leaderboard
    </Typography>
    <Typography
      style={{ marginTop: 15, textAlign: 'center' }}
      variant="body1"
    >
      {'Meet the app\'s top performers.'}
    </Typography>
    <Typography
      style={{ marginTop: 10, textAlign: 'center' }}
      variant="caption"
    >
      {'The more questions they post and vote, the higher they rank 🏅'}
    </Typography>
    <ul className={classes.feed}>
      {userDetails
        .map(user => (
          <li
            key={user.userName}
            style={{ listStyleType: 'none' }}
          >
            <UserCard
              imageURL={user.imageURL}
              userName={user.userName}
              questionsAnswered={user.questionsAnswered}
              questionsPosted={user.questionsPosted}
            />
          </li>))}
    </ul>
  </div>
);

Leaderboard.propTypes = {
  // from MapStateToProps
  userDetails: PropTypes.array.isRequired,
  // from material-ui
  classes: PropTypes.object.isRequired,
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

export default withStyles(styles)(connect(mapStateToProps)(Leaderboard));
