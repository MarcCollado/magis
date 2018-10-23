import styled from 'styled-components';

import {
  pitchDark, fakeAsbestos, plainTurquoise, bianchiGreen,
} from './colors';

const Title1 = styled.h1`
  box-shadow: inset 0em -0.5em 0em ${bianchiGreen};
  color: ${fakeAsbestos};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0.5em 0em;
  padding: 0.125em;
  text-transform: uppercase;
`;

const Title2 = styled.h2`
  color: ${fakeAsbestos};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0.125em;
  padding: 0.125em;
  text-transform: uppercase;
`;

const Title3 = styled.h3`
  color: ${fakeAsbestos};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0.125em;
  padding: 0.125em;
  text-transform: uppercase;
`;

const BodyText = styled.p`
  color: ${fakeAsbestos};
`;

const BodyLink = styled.a`
  border-bottom: 0.25em solid ${bianchiGreen};
  box-shadow: inset 0 -0.25em 0 ${bianchiGreen};
  color: inherit;
  text-decoration: none;
  transition: background 0.3s ease;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: inherit;
    background: ${bianchiGreen};
  }

  &:active {
    color: inherit;
  }
`;

const MetaText = styled.p`
  color: ${fakeAsbestos}88;
  font-size: 0.75em;
  margin: 0.25em;
  padding: 0.25em;
`;

export {
  Title1, Title2, Title3, BodyText, BodyLink, MetaText,
};
