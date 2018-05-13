import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
// relative imports
import SmallAvatar from './ui-library/SmallAvatar';
import Question from './question/Question';

const styles = {
  container: {
    width: '85%',
    margin: 'auto',
    // flexbox container properties
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  feed: {
    marginTop: 15,
    padding: 0,
    width: '100%',
    maxWidth: 480,
  },
};

class QuestionPage extends Component {
  static propTypes = {
    // from MapStateToProps
    realName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    // from material-ui
    classes: PropTypes.object.isRequired,
    // from Router
    match: PropTypes.object.isRequired,
  }

  render() {
    const {
      classes, match, realName, imageURL,
    } = this.props;
    const { id } = match.params;
    const { path } = match;

    return (
      <div className={classes.container}>
        <Typography
          style={{ marginTop: 20 }}
          variant="display1"
        >
          {path.includes('details') ?
          'Poll Details' :
          'Would You Rather'}
        </Typography>
        {/* <Typography
          style={{ marginTop: 20 }}
          variant="headline"
          >
          {path.includes('details')
            ? 'What people say'
            : 'It is time to vote'
          }
        </Typography> */}
        <div className={classes.feed}>
          {path.includes('details') ?
            <Question
              id={id}
              status="PollDetails"
            /> :
            <Question
              id={id}
              status="PollIsVoting"
            />}
        </div>
        <div style={{ marginTop: 10 }}>
          <Typography
            color="inherit"
            variant="caption"
          >
            {`Posted by ${realName}`}
          </Typography>
          {imageURL === '' ?
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
                imageURL={imageURL}
                userName={realName}
              />
            </div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, { match }) {
  const userName = questions[match.params.id].author;
  const realName = authUser === userName ? 'you' : users[userName].name;
  const imageURL = users[userName].avatarURL;
  return {
    realName,
    imageURL,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(QuestionPage));
