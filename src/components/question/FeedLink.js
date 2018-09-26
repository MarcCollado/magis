import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CardButton from '../CardButton'

export default function FeedLink(props) {
  const { id, status } = props;

  return (
    <CardButton>
      {status === 'UserWillVote' ?
        <Link
          to={`/questions/${id}`}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          Vote
        </Link> :
        <Link
          to={`/questions/${id}/details`}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          Poll Details
        </Link>
      }
    </CardButton>
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
