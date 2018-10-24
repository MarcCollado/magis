import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardButton from '../CardButton';
import { fakeAsbestos } from '../../styles/colors';

const HomeLink = ({ id, status }) => (
  status === 'Vote' ? (
    <StyledLink
      to={`/questions/${id}`}
    >
      <CardButton primary>Vote</CardButton>
    </StyledLink>
    ) : (
    <StyledLink
      to={`/questions/${id}/details`}
    >
      <CardButton>See Details</CardButton>
    </StyledLink>
    )
);

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${fakeAsbestos};

  &:visited, :hover, :active {
    color: ${fakeAsbestos};
  }
`;

HomeLink.propTypes = {
  // from Question
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    'Vote',
    'SeeDetails',
  ]).isRequired,
};

export default HomeLink;