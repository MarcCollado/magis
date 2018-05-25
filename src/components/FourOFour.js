import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// styles
import { FourOFour as styles } from '../styles/styles';

const FourOFour = ({ classes }) => (
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

FourOFour.propTypes = {
  // from material-ui
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FourOFour);
