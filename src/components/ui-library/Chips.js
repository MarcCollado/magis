import React from 'react';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from '@material-ui/icons/Face';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function Chips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Chip
        className={classes.chip}
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>}
        label="Basic Chip"
      />
    </div>
  );
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chips);
