import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

class FourOFour extends Component {
  static propTypes = {
    // from material-ui
    classes: PropTypes.object.isRequired,
  }

  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.container}>
        <Typography
          style={{ marginTop: 20 }}
          variant="display1"
        >
          404
        </Typography>
        <Typography
          style={{ textAlign: 'center', marginTop: 15 }}
          variant="body1"
        >
          {'Yikes... this URL doesn\'t belong to any question 😞'}

        </Typography>
        <div
          style={{ textAlign: 'center', marginTop: 15 }}
        >
          <img
            src="/minions.jpg"
            alt="minions"
            style={{ width: '80%' }}
          />
        </div>
        <Typography
          style={{ marginTop: 10, textAlign: 'center' }}
          variant="caption"
        >
          {'You can either keep staring at these Minions or go back home and have fun voting more questions 🎉'}
        </Typography>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            style={{ marginTop: 20 }}
            variant="outlined"
            className={classes.button}
          >
            {'Go 🔙 Home'}
          </Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(connect()(FourOFour));
