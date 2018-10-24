import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from './Layout';
import HomeTabs from './HomeTabs';
import Question from './question/Question';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: "unanswered" };
  }

  handleTabChange = (value) => {
    this.setState({ feed: value });
  };

  render() {
    const {
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
        <List>
          {feed === "unanswered" ?
            unansweredIDs.map(id => (
              <ListItem
                key={id}
              >
                <Question
                  id={id}
                  status="UserWillVote"
                />
              </ListItem>)) :
            answeredIDs.map(id => (
              <ListItem
                key={id}
              >
                <Question
                  id={id}
                  status="UserDidVote"
                />
              </ListItem>))}
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
  answeredIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  unansweredIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps({ questions, authUser }) {
  const answeredIDs = Object.keys(questions)
    .filter(i => (
      questions[i].optionOne.votes.includes(authUser) ||
      questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  const unansweredIDs = Object.keys(questions)
    .filter(i => (
      !questions[i].optionOne.votes.includes(authUser) &&
      !questions[i].optionTwo.votes.includes(authUser)
    ))
    .sort((a, b) => (
      questions[b].timestamp - questions[a].timestamp
    ));

  return {
    answeredIDs,
    unansweredIDs,
  };
}

export default connect(mapStateToProps)(HomePage);
