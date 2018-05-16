import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
// relative imports
import SmallAvatar from './ui-library/SmallAvatar';

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

class Login extends Component {
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
                <SmallAvatar
                  imageURL={user.imageURL}
                  userName={user.userName}
                />
              </li>))}
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
      };
      return (tempUserDetails);
    })
  return {
    userDetails,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Login));
