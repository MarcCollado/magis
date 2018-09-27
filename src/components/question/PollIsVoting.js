import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import CardButton from '../CardButton';
import { handleRegisterVote } from '../../actions/questions';
import { BodyLink } from '../../styles/typography';

class PollIsVoting extends Component {
  static propTypes = {
    // from connect
    dispatch: PropTypes.func.isRequired,
    // from Question
    id: PropTypes.string.isRequired,
  };

  state = {
    toDetails: false,
  };

  handleOption = (e, option) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const userVote = { id, option };
    dispatch(handleRegisterVote(userVote));
    setTimeout(() => this.setState({
      toDetails: true,
    }), 500);
  }

  render() {
    const { id } = this.props;
    const { toDetails } = this.state;

    if (toDetails === true) {
      return <Redirect to={`/questions/${id}/details`} />;
    }

    return (
      <Container>
        <CardButton
          onClick={(e) => this.handleOption(e, 'optionOne')}
        >
          <BodyLink href='#'>
            Vote Option One
          </BodyLink>
        </CardButton>
        <CardButton
          onClick={(e) => this.handleOption(e, 'optionTwo')}
        >
          <BodyLink href='#'>
            Vote Option Two
          </BodyLink>
        </CardButton>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default connect()(PollIsVoting);
