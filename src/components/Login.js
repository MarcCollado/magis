import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import SmallAvatar from './ui-library/SmallAvatar';
import Typography from 'material-ui/Typography';
// relative imports
// import { handleInitialData } from '../actions/shared';
import { handleSetAuthUser } from '../actions/auth';

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
    // from connect
    dispatch: PropTypes.func.isRequired,
    // from MapStateToProps
    userDetails: PropTypes.array.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
  }

  state = {
    redirect: false,
  }

  login = (e, id) => {
    const { dispatch } = this.props;
    dispatch(handleSetAuthUser(id));
    this.setState(() => ({
        redirect: true,
      }))
  }

  render() {
    const {
      classes,
      userDetails,
      authUser,
      location,
    } = this.props;
    const { redirect } = this.state;
    const { from } = location.state || { from: { pathname: '/' } }

    if (redirect === true) {
      console.log("AUTH >>> ", authUser);
      console.log("FROM >>> ", from);
      <Redirect to={from} />
    }

    return (
      <div className={classes.container}>
        <ul className={classes.feed}>
          {userDetails
            .map(user => (
              <li
                key={user.userName}
                style={{ listStyleType: 'none' }}
                onClick={e => this.login(e, user.userID)}
              >
                <SmallAvatar
                  imageURL={user.imageURL}
                  userName={user.userName}
                />
                <Typography
                  style={{ marginBottom: 10, textAlign: 'center' }}
                  variant="caption"
                  color="default"
                >
                  {user.userName}
                </Typography>
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
        userID: users[user].id,
      };
      return (tempUserDetails);
    })
  return {
    userDetails,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Login));
