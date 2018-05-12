import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export default function FeedLink(props) {
  const { id, status } = props;
  const cardStyles = {
    height: 50,
    textAlign: 'center',
    // flexbox container properties
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <CardActions
      className="card-actions"
      style={cardStyles}
    >
      {status === 'UserWillVote'
        ? <Link
          to={`/questions/${id}`}
          style={{ textDecoration: 'none' }}
          >
          <Typography
            variant="button"
            color="textSecondary"
          >Vote It
          </Typography>
        </Link>
        : <Link
          to={`/questions/${id}/details`}
          style={{ textDecoration: 'none' }}
          >
          <Typography
            variant="button"
            color="textSecondary"
          >Poll Details
          </Typography>
        </Link>
      }
    </CardActions>
  );
}

FeedLink.propTypes = {
  // from Question
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    'UserWillVote',
    'UserDidVote',
  ]),
};
