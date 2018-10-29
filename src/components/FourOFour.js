import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';
import Layout from './Layout';
import { fakeAsbestos } from '../styles/colors';
import { Title1, BodyText, MetaText } from '../styles/typography';

const FourOFour = () => (
  <Layout>
    <Title1>
      {`404`}
    </Title1>
    <BodyText>
      {`Yikes... this URL doesn't belong to any question 😞`}
    </BodyText>
    <img
      src="/minions.jpg"
      alt="minions"
      style={{ width: '80%' }}
    />
    <MetaText>
      {`You can either keep staring at these cute Minions or go back home and have fun voting more polls 🎉`}
    </MetaText>
    <StyledLink to="/">
      <Button>
        {`👈 Back Home`}
      </Button>
    </StyledLink>
  </Layout>
);

const StyledLink = styled(Link)`
  color: ${fakeAsbestos};
  text-decoration: none;

  &:visited, :hover, :active {
    color: ${fakeAsbestos};
  }
`;

export default FourOFour;
