import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardButton from '../CardButton';
import { fakeAsbestos } from '../../styles/colors';

export default function FeedLink(props) {
  const { id, status } = props;

  return (
    <Container>
      <CardButton>
        {status === 'UserWillVote'
          ? (
            <StyledLink
              to={`/questions/${id}`}
            >
            {`Vote`}
            </StyledLink>
          )
          : (
            <StyledLink
              to={`/questions/${id}/details`}
            >
            {`Poll Details`}
            </StyledLink>
          )
        }
      </CardButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: ${fakeAsbestos};
  text-decoration: none;

  &:visited, :hover, :active {
    color: inherit;
  }
`;

FeedLink.propTypes = {
  // from Question
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    'UserWillVote',
    'UserDidVote',
  ]).isRequired,
};
