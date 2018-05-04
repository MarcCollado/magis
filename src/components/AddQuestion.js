import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    // flexbox container properties
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class AddQuestion extends React.Component {
  state = {
    name: 'Cat in the Hat',
    text: '',
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({
      text,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="option-one"
          label="First Option"
          placeholder=""
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="option-two"
          label="Second Option"
          placeholder=""
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange}
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
};

export default withStyles(styles)(AddQuestion)
