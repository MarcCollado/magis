import React from 'react';
import PropTypes from 'prop-types';
// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ModeComment from '@material-ui/icons/ModeComment';
import ReplyAll from '@material-ui/icons/ReplyAll';
// styles
import { UserCard as styles } from '../../styles/styles';

const UserCard = ({
  classes,
  imageURL,
  userName,
  questionsAnswered,
  questionsPosted,
}) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={imageURL}
      title={userName}
    />
    <CardContent>
      <Typography
        style={{ marginBottom: 15 }}
        gutterBottom
        variant="headline"
        component="h2"
      >
        {userName}
      </Typography>

      <Typography component="p">
        <ModeComment
          style={{ width: 17, margin: '0 15 -7 0' }}
          color="primary"
        />
        Posted {questionsPosted} questions
      </Typography>
      <Typography
        style={{ marginTop: 8 }}
        component="p"
      >
        <ReplyAll
          style={{ width: 20, margin: '0 15 -7 0' }}
          color="primary"
        />
        Responded {questionsAnswered} questions
      </Typography>
    </CardContent>
  </Card>
);

UserCard.propTypes = {
  // from material-ui
  classes: PropTypes.object.isRequired,
  // from Leaderboard
  imageURL: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  questionsAnswered: PropTypes.number.isRequired,
  questionsPosted: PropTypes.number.isRequired,
};

export default withStyles(styles)(UserCard);
