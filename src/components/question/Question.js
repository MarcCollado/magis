import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FeedLink from './FeedLink';
import PollIsVoting from './PollIsVoting';
import PollDetails from './PollDetails';
import Card from '../Card';
import { BodyText } from '../../styles/typography';

class Question extends Component {
  static propTypes = {
    // from MapStateToProps
    questions: PropTypes.object.isRequired,
    // from Feed
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'UserWillVote',
      'UserDidVote',
      'PollIsVoting',
      'PollDetails',
    ]).isRequired,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('nextProps => ', nextProps);
    // console.log('prevState => ', prevState);
    if (nextProps.status === prevState.status) {
      return null;
    }
    return {
      status: 'PollDetails',
    };
  }

  state = {
    status: this.props.status,
  }

  renderActions() {
    const { status } = this.state;
    const { id } = this.props;

    switch (status) {
      case 'PollIsVoting':
        return (
          <PollIsVoting
            id={id}
          />
        );
      case 'PollDetails':
        return (
          <PollDetails
            id={id}
          />
        );
      case 'UserDidVote':
        return (
          <FeedLink
            id={id}
            status={status}
          />
        );
      default:
        return (
          <FeedLink
            id={id}
            status={status}
          />
        );
    }
  }

  render() {
    const { questions, id } = this.props;
    const optionOne = questions[id].optionOne.text;
    const optionTwo = questions[id].optionTwo.text;

    return (
      <Card>
        <Options>
          <OptionOne>
            {optionOne}
          </OptionOne>
          <OR>
            <img
              alt="or"
              src="/or.webp"
              style={{ width: '2em' }}
            />
          </OR>
          <OptionTwo>
            {optionTwo}
          </OptionTwo>
        </Options>

        {this.renderActions()}

      </Card>
    );
  }
}

const Options = styled.div`
  height: 8em;
  display: flex;
  align-items: center;
`;

const OptionOne = styled(BodyText)`
  text-align: left;
  width: 40%;
`;

const OR = styled.div`
  text-align: center;
  width: 20%;
`;

const OptionTwo = styled(BodyText)`
  text-align: right;
  width: 40%;
`;

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapStateToProps)(Question);
