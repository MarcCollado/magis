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
  realName,
  imageURL,
  errorPage,
}) => {
  const { poll, voted } = location.state;
  const { id } = match.params;

  // sanity check the id of the URL matches the one on the poll
  if ((errorPage) || (id !== poll.id)) {
    return (
      <FourOFour />
    );
  }

  return (
    <Layout>
      <Title1>
        Poll Details
      </Title1>
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
        {`Posted by ${realName}`}
      </MetaText>
      <UserImage
        imageURL={imageURL}
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
  realName: PropTypes.string,
  imageURL: PropTypes.string,
  errorPage: PropTypes.bool.isRequired,
};

PollDetails.defaultProps = {
  realName: '',
  imageURL: '',
};

function mapStateToProps({ questions, users, authUser }, { match }) {
  if (questions[match.params.id] === undefined) {
    const errorPage = true;
    return {
      errorPage,
    };
  }
  const userName = questions[match.params.id].author;
  const realName = authUser === userName ? 'you' : users[userName].name;
  const imageURL = users[userName].avatarURL;
  const errorPage = false;
  return {
    realName,
    imageURL,
    errorPage,
  };
}

export default connect(mapStateToProps)(PollDetails);
