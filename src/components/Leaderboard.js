import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
// relative imports
import UserCard from './ui-library/UserCard';

const styles = {
  container: {
    width: '75%',
    margin: 'auto',
    // flexbox container properties
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  feed: {
    padding: 0,
    width: '100%',
    maxWidth: 480,
  },
};

class Leaderboard extends Component {
  static propTypes = {
    // from MapStateToProps
    userDetails: PropTypes.array.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
  }

  render() {
    const {
      classes,
      userDetails,
    } = this.props;

    return (
      <div className={classes.container}>
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
              </li>))
          }
        </ul>
      </div>
    );
  }
}

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
