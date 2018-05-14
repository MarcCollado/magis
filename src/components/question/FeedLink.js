import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// imports from material-ui
import { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';

export default function FeedLink(props) {
  const { id, status } = props;
  const cardStyles = {
    height: 50,
    textAlign: 'center',
    // flexbox container properties
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#E8EAF6',
  };

  return (
    <CardActions
      className="card-actions"
      style={cardStyles}
    >
      {status === 'UserWillVote' ?
        <Link
          to={`/questions/${id}`}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <Button
            style={{ width: '100%' }}
            color="primary"
          >
            Vote
          </Button>
        </Link> :
        <Link
          to={`/questions/${id}/details`}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <Button
            style={{ width: '100%' }}
            color="primary"
          >
            Poll Details
          </Button>
        </Link>}
    </CardActions>
  );
}

FeedLink.propTypes = {
  // from Question
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    'UserWillVote',
    'UserDidVote',
  ]).isRequired,
};
