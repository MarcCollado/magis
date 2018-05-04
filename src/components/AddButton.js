import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
  absolute: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

function AddButton(props) {
  const { classes } = props;
  return (
    <Tooltip title="Add Question">
      <Button
        variant="fab"
        color="secondary"
        className={classes.absolute}
      >
        <AddIcon />
      </Button>
    </Tooltip>
  );
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
