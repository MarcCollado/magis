import styled from 'styled-components';

import { fakeAsbestos, bianchiGreen } from './colors';

const Title1 = styled.h1`
  box-shadow: inset 0em -0.5em 0em ${bianchiGreen};
  color: ${fakeAsbestos};
  font-family: 'Fira Sans', sans-serif;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

const Title2 = styled.h2`
  color: ${fakeAsbestos};
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

const BodyText = styled.p`
  color: ${fakeAsbestos};
  font-family: 'Fira Sans', 'sans-serif';
`;

const BodyLink = styled.a`
  border-bottom: 0.25em solid ${bianchiGreen};
  box-shadow: inset 0 -0.25em 0 ${bianchiGreen};
  color: inherit;
  font-family: 'Fira Sans', 'sans-serif';
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
  font-family: 'Fira Sans', 'sans-serif';
  font-size: 0.8em;
`;

export {
  Title1, Title2, BodyText, BodyLink, MetaText,
};
