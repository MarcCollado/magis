import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import FourOFour from './FourOFour';
import Layout from './Layout';
import PollStats from './PollStats';
import UnbiasedPoll from './UnbiasedPoll';
import UserImage from './UserImage';

import { fakeAsbestos } from '../styles/colors';
import { Title1, BodyText, MetaText } from '../styles/typography';

const PollDetails = ({
  location,
  match,
  poll,
  displayName,
  avatarURL,
  errorPage,
}) => {
  const { voted } = location.state;
  const { id } = match.params;

  // sanity check the id of the URL matches the one on the poll
  if ((errorPage) || (id !== poll.pollID)) {
    return (
      <FourOFour />
    );
  }

  return (
    <Layout>
      <Title1>Poll Details</Title1>
      <BodyText>
        {voted === 1
          ? `👇 You voted for the option one`
          : `You voted for the option two 👇`
        }
      </BodyText>
      <UnbiasedPoll>
        {poll}
      </UnbiasedPoll>
      <MetaText>
        {`Posted by ${displayName}`}
      </MetaText>
      <UserImage
        avatarURL={avatarURL}
        large
      />
      <PollStats>
        {poll}
      </PollStats>
      <StyledLink to="/">
        <Button>
          {`👈 Back Home`}
        </Button>
      </StyledLink>
    </Layout>
  );
};

const StyledLink = styled(Link)`
  color: ${fakeAsbestos};
  margin-top: 0.5em;
  text-decoration: none;

  &:visited, :hover, :active {
    color: ${fakeAsbestos};
  }
`;

PollDetails.propTypes = {
  // mapStateToProps
  displayName: PropTypes.string,
  avatarURL: PropTypes.string,
  errorPage: PropTypes.bool.isRequired,
};

PollDetails.defaultProps = {
  displayName: '',
  avatarURL: '',
};

function mapStateToProps({ authUser, polls, users }, { match }) {
  if (polls[match.params.id] === undefined) {
    const errorPage = true;
    return {
      errorPage,
    };
  }
  const poll = polls[match.params.id];
  const creatorID = polls[match.params.id].createdBy;
  const creatorName = users[creatorID].userName;
  const { userID, userName } = users[authUser];
  const displayName = userID === creatorID ? 'you' : creatorName;
  const { avatarURL } = users[creatorID];
  const errorPage = false;
  return {
    poll,
    displayName,
    avatarURL,
    errorPage,
  };
}

export default connect(mapStateToProps)(PollDetails);
