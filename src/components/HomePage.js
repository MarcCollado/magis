import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import HomeTabs from './HomeTabs';
import OpenPoll from './OpenPoll';
import VotedPoll from './VotedPoll';
import { BodyText } from '../styles/typography';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: 0 };
  }

  handleTabChange = (value) => {
    this.setState({ feed: value });
  };

  // determines which option the authUser voted for, and passes it down to
  // VotedPoll via props, so it can highlight the voted option
  // returns 1 for optionOne, 2 for optionTwo
  whichVoted = (user, question) => {
    if (question.optionOne.votes.includes(user)) {
      return 1;
    } else if (question.optionTwo.votes.includes(user)) {
      return 2;
    }
    return null;
  }

  render() {
    const {
      authUser,
      questions,
      answeredIDs,
      unansweredIDs,
    } = this.props;

    const { feed } = this.state;

    return (
      <Layout>
        <HomeTabs
          tabState={feed}
          handleTabChange={this.handleTabChange}
        >
        </HomeTabs>
        <BodyText>
          {feed === 0 ?
            `Tap your option to vote for it 📨` :
            `Tap the poll to check its details 📈`
          }
        </BodyText>
        <List>
          {feed === 0 ?
            unansweredIDs.map(id => (
              <ListItem
                key={id}
              >
                <OpenPoll
                  id={id}
                >
                  {questions[id]}
                </OpenPoll>
              </ListItem>)
            ) :
            answeredIDs.map(id => (
              <ListItem
                key={id}
              >
                <VotedPoll
                  id={id}
                  voted={this.whichVoted(authUser, questions[id])}
                >
                  {questions[id]}
                </VotedPoll>
              </ListItem>)
            )
          }
        </List>
      </Layout>
    );
  }
}

const List = styled.ul`
  padding: 0em;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

HomePage.propTypes = {
  // from connect
  questions: PropTypes.object.isRequired,
  answeredIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  unansweredIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps({ questions, authUser }) {
  // filter votes from the currently authUser
  const answeredIDs = Object.keys(questions)
    .filter(i => (
      questions[i].optionOne.votes.includes(authUser) ||
      questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  // create a copy of [answeredIDs] to extract the [unansweredIDs]
  const filteredIDs = [...answeredIDs];

  const unansweredIDs = Object.keys(questions)
    .filter(i => (!filteredIDs.includes(i)))
      // used to check for the complementary case
      // !questions[i].optionOne.votes.includes(authUser) &&
      // !questions[i].optionTwo.votes.includes(authUser)
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  return {
    authUser,
    questions,
    answeredIDs,
    unansweredIDs,
  };
}

export default connect(mapStateToProps)(HomePage);
