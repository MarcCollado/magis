import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import UserImage from './UserImage';
import { handleSetAuthUser } from '../actions/auth';
import { Title1, BodyText, MetaText } from '../styles/typography';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleLogin = (e, id) => {
    const { dispatch } = this.props;
    dispatch(handleSetAuthUser(id));
  }

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
          {`Only logged users can vote, submit new questions or view leaderboards. Don't miss out on all the fun.`}
        </MetaText>
        <List>
          {userDetails
            .map(user => (
              <ListItem
                key={user.userName}
              >
                <StyledLink href='#'
                  onClick={e => this.handleLogin(e, user.userID)}
                >
                <UserImage
                  imageURL={user.imageURL}
                />
                </StyledLink>
                <MetaText>{user.userName}</MetaText>
              </ListItem>
            ))
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

const StyledLink = styled.a`
  text-decoration: none;
  flex-basis: 50%;
`;

Login.propTypes = {
  // from MapStateToProps
  userDetails: PropTypes.array.isRequired,
  authUser: PropTypes.string,
}

Login.defaultProps = {
  authUser: null,
}

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
