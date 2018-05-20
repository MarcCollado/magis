import React from 'react';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

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
  // from material-ui
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
