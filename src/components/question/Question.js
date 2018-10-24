import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';
import HomeLink from './HomeLink';
import PollDetails from './PollDetails';
import PollIsVoting from './PollIsVoting';
import { BodyText } from '../../styles/typography';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: this.props.status };
  }

  static propTypes = {
    questions: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'Vote',
      'SeeDetails',
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
      case 'SeeDetails':
        return (
          <HomeLink
            id={id}
            status={status}
          />
        );
      default:
        return (
          <HomeLink
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
  align-items: center;
  display: flex;
  margin-top: 0.5em;
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
