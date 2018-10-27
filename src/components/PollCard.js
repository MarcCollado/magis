import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {bianchiGreen, seriousYellow, fakeAsbestos } from '../styles/colors';
import { BodyText } from '../styles/typography';
import { handleRegisterVote } from '../actions/questions';

class PollCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voted: this.props.voted,
      status: this.props.status,
      toDetails: false,
    };
  }

  handleOption = (e, option) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const userVote = { id, option };
    dispatch(handleRegisterVote(userVote));
    setTimeout(() => this.setState({
      voted: option === "optionOne" ? 0 : 1,
      toDetails: true,
    }), 500);
  }

  render() {
    const { children, id } = this.props;
    const options = [children.optionOne.text, children.optionTwo.text];
    const { voted, status, toDetails } = this.state;

    if (toDetails === true) {
      return <Redirect to={`/questions/${id}/details`} />;
    }

    return (
      <Container>
        <StyledLink href="#"
          onClick={(e) => this.handleOption(e, 'optionOne')}
        >
          <OptionOneContainer
            status={status}
            voted={voted === 0}
          >
            <OptionText
              status={status}
              voted={voted === 0}
            >
              {options[0]}
            </OptionText>
          </OptionOneContainer>
        </StyledLink>

        <StyledLink href="#"
          onClick={(e) => this.handleOption(e, 'optionTwo')}
        >
          <OptionTwoContainer
            status={status}
            voted={voted === 1}
          >
            <OptionText
              right
              status={status}
              voted={voted === 1}
            >
              {options[1]}
            </OptionText>
          </OptionTwoContainer>
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
`;

const OptionOneContainer = styled.div`
  align-items: center;
  background: ${props => props.voted ? `${bianchiGreen}` : `${bianchiGreen}22`};
  display: flex;
  height: 12em;
  padding: 0.5em 1em;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => (props.status === 'Answered' && !props.voted) ? '' : bianchiGreen};
  }
`;

const OptionTwoContainer = styled.div`
  align-items: center;
  background: ${props => props.voted ? `${seriousYellow}` : `${seriousYellow}22`};
  display: flex;
  height: 12em;
  padding: 0.5em 1em;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => (props.status === 'Answered' && !props.voted) ? '' : seriousYellow};
  }
`;

const OptionText = styled(BodyText)`
  color: ${fakeAsbestos};
  text-align: ${props => props.right ? "right" : "left"};
  opacity: ${props => (props.status === 'Answered' && !props.voted) ? 0.15 : 1 };
`;

const OR = styled.div`
  text-align: center;
  width: 20%;
`;

PollCard.propTypes = {
  children: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['unAnswered', 'Answered']).isRequired,
  voted: PropTypes.oneOf([0, 1]).isRequired,
  // from connect
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ }) {

  return { };
}

export default connect(mapStateToProps)(PollCard);
