import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
// relative imports
import { logOut } from '../actions/auth';
import SmallAvatar from './ui-library/SmallAvatar';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Nav extends React.Component {
  static propTypes = {
    // from connect
    dispatch: PropTypes.func.isRequired,
    // from MapStateToProps
    authUserURL: PropTypes.string.isRequired,
    authUserID: PropTypes.string.isRequired,
    authUserName: PropTypes.string.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
  };

  state = {
    // auth: this.props.authUserID !== '',
    anchorEl: null,
  };

  handleMenu = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOut = () => {
    this.props.dispatch(logOut());
    this.handleClose();
  }

  render() {
    const {
      classes,
      authUserID,
      authUserURL,
      authUserName,
    } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
        >
          <Toolbar>
            <IconButton
              aria-label="Menu"
              aria-owns={open ? 'menu-appbar' : null}
              className={classes.menuButton}
              color="inherit"
              onClick={this.handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleClose}
            >
              <NavLink to="/" exact activeClassName="active">
                <MenuItem onClick={this.handleClose}>Home</MenuItem>
              </NavLink>
              <NavLink to="/leaderboard" exact activeClassName="active">
                <MenuItem onClick={this.handleClose}>Leaderboard</MenuItem>
              </NavLink>
              {authUserID ?
                <NavLink to="/login" exact activeClassName="active">
                  <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
                </NavLink> :
                <NavLink to="/login" exact activeClassName="active">
                  <MenuItem onClick={this.handleClose}>Log In</MenuItem>
                </NavLink>}
            </Menu>
            <Typography
              className={classes.flex}
              color="inherit"
              variant="title"
            >
              Would You Rather
            </Typography>
            {authUserID === '' ?
              <div>
                <IconButton
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div> :
              <div>
                <SmallAvatar
                  imageURL={authUserURL}
                  userName={authUserName}
                />
              </div>}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

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

export default withStyles(styles)(connect(mapStateToProps)(Nav));
