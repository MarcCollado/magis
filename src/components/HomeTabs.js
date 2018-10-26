import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Title2 } from '../styles/typography';
import { fakeAsbestos } from '../styles/colors';

const HomeTabs = ({ handleTabChange, tabState }) => (
  <Container>
    <Tab
      onClick={() => handleTabChange("unanswered")}
      selected={tabState === "unanswered"}
    >
      Unanswered
    </Tab>

    <Tab
      onClick={() => handleTabChange("answered")}
      selected={tabState === "answered"}
    >
      Answered
    </Tab>
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0.5em auto 0em;
`;

const Tab = styled(Title2)`
  border-bottom: ${props => props.selected ? `0.25em solid ${fakeAsbestos}` : "0.25em solid #FFF0"};
  border-top: 0.25em solid #FFF0;
  margin-right: 0.5em;
  padding: 0.25em;
  text-decoration: none;

  &:active {
    border-bottom: 0.25em solid ${fakeAsbestos};
  }
`;

HomeTabs.propTypes = {
  // from HomePage
  tabState: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default HomeTabs;
