import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import firebase from 'firebase';

import Layout from './Layout';
import LoginButton from './LoginButton';
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
        <Nav>
          <LoginButton
            provider="Github"
            onClick={() => this.authenticate('Github')}
          >
          Log In With GitHub
          </LoginButton>
          <LoginButton
            provider="Twitter"
            onClick={() => this.authenticate('Twitter')}
            disabled
          >
          Log In With Twitter
          </LoginButton>
        </Nav>
      </Layout>
    );
  }
}

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

Login.propTypes = {
  authUser: PropTypes.string,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
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
