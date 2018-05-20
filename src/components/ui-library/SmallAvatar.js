import React from 'react';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    // flexbox container properties
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 15,
  },
};

function SmallAvatar(props) {
  const { classes, imageURL, userName } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt={userName}
        src={imageURL}
        className={classes.avatar}
      />
    </div>
  );
}

SmallAvatar.propTypes = {
  // from material-ui
  classes: PropTypes.object.isRequired,
  // from Nav
  imageURL: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default withStyles(styles)(SmallAvatar);
