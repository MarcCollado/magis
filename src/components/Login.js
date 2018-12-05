import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import firebase from 'firebase';

import Layout from './Layout';
import UserImage from './UserImage';
import { handleSetAuthUser } from '../actions/auth';
import { Title1, BodyText, MetaText } from '../styles/typography';
import { auth } from '../utils/firebase';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  authHandler = async (authData, provider = 'Github') => {
    const { dispatch } = this.props;

    switch (provider) {
      case 'Github': {
        const userID = authData.user.uid;
        const userEmail = authData.user.email;
        const userName = authData.user.displayName;
        const avatarURL = authData.additionalUserInfo.profile.avatar_url;
        const authProvider = authData.credential.providerId;
        const userData = {
          userID, userEmail, userName, avatarURL, authProvider,
        };
        dispatch(handleSetAuthUser(userData));
        break;
      }
      case 'Twitter': {
        break;
      }
      default:
        break;
    }
    return null;
    // 1 .Look up the current store in the firebase database
    // 2. Claim it if there is no owner
    // 3. Set the state of the inventory component to reflect the current user
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    auth
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    const {
      authUser,
      userDetails,
      location,
    } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };

    if (authUser !== null) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <Layout>
        <Title1>
          {`Login`}
        </Title1>
        <BodyText>
          {`Please, select a user to login 👩‍🚀`}
        </BodyText>
        <MetaText>
          {`Only logged users can vote, submit new polls or view leaderboards. Don't miss out on all the fun.`}
        </MetaText>

        <nav className="login">
          <button className="github" onClick={() => this.authenticate('Github')}>
            Log In With GitHub
          </button>
          <button className="twitter" onClick={() => this.authenticate('Twitter')}>
            Log In With Twitter
          </button>
        </nav>
        {/* <List>
          {userDetails
            .map((user) => (
              <ListItem
                key={user.userName}
              >
                <StyledLink
                  href="#"
                  onClick={(e) => this.handleLogin(e, user.userID)}
                >
                  <UserImage imageURL={user.imageURL} />
                </StyledLink>
                <MetaText>
                  {user.userName}
                </MetaText>
              </ListItem>
            ))
          }
        </List> */}
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

const StyledLink = styled.a`
  text-decoration: none;
`;

Login.propTypes = {
  // from MapStateToProps
  userDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
  authUser: PropTypes.string,
};

Login.defaultProps = {
  authUser: null,
};

function mapStateToProps({ users, authUser }) {
  const userDetails = Object.keys(users)
    .map((user) => ({
      imageURL: users[user].avatarURL,
      userName: users[user].name,
      userID: users[user].id,
    }));
  return {
    authUser,
    userDetails,
  };
}

export default connect(mapStateToProps)(Login);
