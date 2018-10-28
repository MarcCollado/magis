import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {bianchiGreen, seriousYellow, fakeAsbestos } from '../styles/colors';
import { BodyText } from '../styles/typography';
import { handleRegisterVote } from '../actions/questions';

class OpenPoll extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOption = (e, option, poll) => {
    e.preventDefault();
    const { dispatch, id, history } = this.props;
    const userVote = { id, option };

    // create a variable voted to pass to PollDetails
    // via props through history.push()
    if (option === 'optionOne') {
      var voted = 1;
    } else if (option === 'optionTwo') {
      var voted = 2;
    }

    dispatch(handleRegisterVote(userVote));
    history.push({
      pathname: `/questions/${id}/details`,
      state: { poll, voted }
    });
  }

  render() {
    // use object destructuring to rename children to poll
    const { children: poll } = this.props;
    const options = [poll.optionOne.text, poll.optionTwo.text];

    return (
      <Container>
        <StyledLink href='#'
          onClick={(e) => this.handleOption(e, 'optionOne', poll)}
        >
          <OptionContainer>
            <OptionText>
              {options[0]}
            </OptionText>
          </OptionContainer>
        </StyledLink>
        <StyledLink href='#'
          onClick={(e) => this.handleOption(e, 'optionTwo', poll)}
        >
          <OptionContainer
            right
          >
            <OptionText
              right
            >
              {options[1]}
            </OptionText>
          </OptionContainer>
        </StyledLink>
      </Container>
    )
  }
};

const Container = styled.div`
  align-items: center;
  border-radius: 1em;
  box-shadow: ${fakeAsbestos}22 0em 0.25em 0.25em 0em;
  display: flex;
  margin-bottom: 2em;
  overflow: hidden;
`;

const StyledLink = styled.a`
  text-decoration: none;
  flex-basis: 50%;
`;

const OptionContainer = styled.div`
  align-items: center;
  background: ${props => props.right ? `${seriousYellow}22` : `${bianchiGreen}22`};
  display: flex;
  height: 12em;
  justify-content: ${props => props.right ? "flex-end" : "flex-start"};
  padding: 0.5em 1em;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.right ? seriousYellow : bianchiGreen};
  }
`;

const OptionText = styled(BodyText)`
  color: ${fakeAsbestos}CC;
  text-align: ${props => props.right ? "right" : "left"};

  &:hover {
    color: ${fakeAsbestos};
  }
`;

// Add an (OR) div in the middle of the Poll
// const OR = styled.div``;

OpenPoll.propTypes = {
  children: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  // from connect
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(OpenPoll));
