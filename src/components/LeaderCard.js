import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fakeAsbestos } from '../styles/colors';
import { Title2, BodyText } from '../styles/typography';

const LeaderCard = ({ imageURL, userName, pollsCreated, pollsVoted }) => (
  <Container>
    <PictureContainer
      imageURL={imageURL}
    />
    <InfoContainer>
      <LeaderName>
        {userName}
      </LeaderName>
      <BodyText>
        {`🎲 ${pollsCreated} polls created`}
      </BodyText>
      <BodyText>
        {`📨 ${pollsVoted} polls voted`}
      </BodyText>
    </InfoContainer>
  </Container>
)

const Container = styled.div`
  align-items: center;
  border-radius: 1em;
  box-shadow: ${fakeAsbestos}22 0em 0.25em 0.25em 0em;
  display: flex;
  margin-bottom: 2em;
  overflow: hidden;
`;

const PictureContainer = styled.div`
  background-image: url(${props => props.imageURL});
  background-size: cover;
  height: 15em;
  width: 15em;
`;

const InfoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  padding: 0.5em 1.5em;
`;

const LeaderName = styled(Title2)`
  color: ${fakeAsbestos};
`;

LeaderCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  pollsCreated: PropTypes.number.isRequired,
  pollsVoted: PropTypes.number.isRequired,
};

export default LeaderCard;