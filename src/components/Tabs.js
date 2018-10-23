import React from 'react';
import styled from 'styled-components';

import { Title3 } from '../styles/typography';
import { fakeAsbestos } from '../styles/colors';

const Tabs = ({ handleTabChange, tabState }) => (
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

const Tab = styled(Title3)`
  border-bottom: ${props => props.selected ? `0.25em solid ${fakeAsbestos}` : "0.25em solid #FFF0"};
  border-top: 0.25em solid #FFF0;
  margin-right: 0.5em;
  padding: 0.25em;
  text-decoration: none;

  &:active {
    border-bottom: 0.25em solid ${fakeAsbestos};
  }
`;

export default Tabs;
