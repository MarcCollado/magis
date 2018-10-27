import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {coralRed, bianchiGreen, seriousYellow, fakeAsbestos } from '../styles/colors';
import { BodyText } from '../styles/typography';

class PollCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Container>
        <OptionOne>
          <OptionText>
            Work at Apple, as an engineer at the iPod Touch 📱 team
          </OptionText>

        </OptionOne>
        <OptionTwo>
          <OptionText
            right
          >
            Work at Google, as the PM at the Google Reader 📖 team
          </OptionText>
        </OptionTwo>
      </Container>
    )
  }

};

const Container = styled.div`
  align-items: center;
  border-radius: 1em;
  box-shadow: ${fakeAsbestos}22 0em 0.25em 0.25em 0em;
  display: flex;
  margin-bottom: 1em;
  overflow: hidden;
`;

const OptionOne = styled.div`
  background: ${bianchiGreen}22;
  display: flex;
  padding: 0.5em 1em;
  transition: background 0.3s ease;

  &:hover {
    background: ${bianchiGreen};
  }
`;

const OptionTwo = styled.div`
  background: ${seriousYellow}22;
  display: flex;
  padding: 0.5em 1em;
  transition: background 0.3s ease;

  &:hover {
    background: ${seriousYellow};
  }
`;

const OptionText = styled(BodyText)`
  text-align: ${props => props.right ? "right" : "left"};
`;

const OR = styled.div`
  text-align: center;
  width: 20%;
`;

const OptionTwoText = styled(BodyText)`
  text-align: right;
`;

PollCard.propTypes = { };

function mapStateToProps({ }) {

  return { };
}

export default connect(mapStateToProps)(PollCard);
