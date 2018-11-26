import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { bianchiGreen, seriousYellow, fakeAsbestos } from '../styles/colors';
import { BodyText } from '../styles/typography';

class VotedPoll extends React.Component {
  constructor(props) {
    super(props);
    const { voted } = this.props;
    this.state = { voted };
  }

  render() {
    // use object destructuring to rename children to poll
    const { children: poll, id } = this.props;
    const options = [poll.optionOne.text, poll.optionTwo.text];
    const { voted } = this.state;

    return (
      // use Link instead of history.push() because there's no function
      // to invoke onClik
      <StyledLink
        to={{
          pathname: `/polls/${id}/details`,
          state: { poll, voted },
        }
        }
      >
        <Container>
          <OptionContainer
            voted={voted === 1}
          >
            <OptionText
              voted={voted === 1}
            >
              {options[0]}
            </OptionText>
          </OptionContainer>
          <OptionContainer
            right
            voted={voted === 2}
          >
            <OptionText
              right
              voted={voted === 2}
            >
              {options[1]}
            </OptionText>
          </OptionContainer>
        </Container>
      </StyledLink>
    );
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  align-items: center;
  border-radius: 1em;
  box-shadow: ${fakeAsbestos}22 0em 0.25em 0.25em 0em;
  display: flex;
  margin-bottom: 2em;
  overflow: hidden;
`;

const OptionContainer = styled.div`
  align-items: center;
  background: ${(props) => (props.right ? `${seriousYellow}` : `${bianchiGreen}`)};
  display: flex;
  flex-basis: 50%;
  height: 12em;
  justify-content: ${(props) => (props.right ? 'flex-end' : 'flex-start')};
  opacity: ${(props) => (props.voted ? 1 : 0.3)};
  padding: 0.5em 1em;
`;

const OptionText = styled(BodyText)`
  color: ${fakeAsbestos};
  text-align: ${(props) => (props.right ? 'right' : 'left')};
`;

// Add an (OR) div in the middle of the Poll
// const OR = styled.div``;

VotedPoll.propTypes = {
  children: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  voted: PropTypes.oneOf([1, 2]).isRequired,
};

export default VotedPoll;
