import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { logOut } from '../actions/auth';
import { fakeAsbestos } from '../styles/colors';
import { MetaText } from '../styles/typography';

class Navbar extends React.Component {
  handleLogOut = () => {
    this.props.dispatch(logOut());
  }

  render() {
    const {
      authUserID,
      authUserURL,
      authUserName,
    } = this.props;

    return (
      <Container>
      <Nav>
        <MenuItems>
          <StyledNavLink
            exact to="/"
            activeStyle={{
              borderBottom: `0.25em solid #FFF4`,
            }}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            exact to="/leaderboard"
            activeClassName="selected"
            activeStyle={{
              borderBottom: `0.25em solid #FFF4`,
            }}
          >
            Leaderboard
          </StyledNavLink>
        </MenuItems>

        {authUserID ?
        <LoginItems>
            <LoginTip>Logged as {authUserName}</LoginTip>
          <StyledNavLink
            to="/login"
            onClick={this.handleLogOut}
          >
            Logout
          </StyledNavLink>
        </LoginItems> :
        <LoginItems>
          <LoginTip>Have an account?</LoginTip>
          <StyledNavLink
            to="/login"
          >
            Login
          </StyledNavLink>
        </LoginItems>
        }
      </Nav>
      </Container>
    );
  }
}

const Container = styled.div`
  background: ${fakeAsbestos};
  display: flex;
  justify-content: center;
`;

const Nav = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  min-width: 450px;
  max-width: 600px;
`;

const MenuItems = styled.div`
  align-items: baseline;
  background: ${fakeAsbestos};
  display: flex;
  justify-content: flex-start;
  padding: 0.5em;

  &:first-child {
    margin-left: 1em;
  }
`;

const LoginItems = styled.div`
  align-items: baseline;
  background: ${fakeAsbestos};
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  padding: 0.5em;

  &:last-child {
    margin-right: 1em;
  }
`;

const StyledNavLink = styled(NavLink)`
  border-bottom: 0.25em solid #FFF0;
  border-top: 0.25em solid #FFF0;
  color: #FFF;
  font-family: 'Fira Mono', monospace;
  font-size: 0.9em;
  font-weight: 700;
  margin: 0.5em;
  padding: 0.25em;
  text-decoration: none;
  text-transform: lowercase;

  &:hover {
    border-bottom: 0.25em solid #FFF;
  }
`;

const LoginTip = styled(MetaText)`
  font-size: 0.7em;
  color: #FFF6;
`;

Navbar.propTypes = {
  // from connect
  dispatch: PropTypes.func.isRequired,
  // from MapStateToProps
  authUserURL: PropTypes.string.isRequired,
  authUserID: PropTypes.string.isRequired,
  authUserName: PropTypes.string.isRequired,
};

function mapStateToProps({ authUser, users }) {
  if (authUser !== null) {
    const loggedUser = users[authUser];
    return {
      authUserURL: loggedUser.avatarURL,
      authUserID: loggedUser.id,
      authUserName: loggedUser.name,
    };
  }
  return {
    authUserURL: '',
    authUserID: '',
    authUserName: '',
  };
}

export default connect(mapStateToProps)(Navbar);
