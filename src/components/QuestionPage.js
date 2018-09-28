import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// imports from material-ui
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
// relative imports
import CardButton from './CardButton';
import FourOFour from './FourOFour';
import SmallAvatar from './ui-library/SmallAvatar';
import Question from './question/Question';
import { Title1, MetaText } from '../styles/typography';
// styles
import { QuestionPage as styles } from '../styles/styles';

const QuestionPage = ({
  classes,
  match,
  realName,
  imageURL,
  errorPage,
}) => {
  const { id } = match.params;
  const { path } = match;

  if (errorPage) {
    return (
      <FourOFour />
    );
  }

  return (
    <Container>
      <Title1>
        {path.includes('details') ?
        'Poll Details' :
        'Would You Rather'}
      </Title1>
      {path.includes('details') ?
        <Question
          id={id}
          status="PollDetails"
        /> :
        <Question
          id={id}
          status="PollIsVoting"
        />
      }

      <MetaText>
        {`Posted by ${realName}`}
      </MetaText>

      {imageURL === '' ?
        <div>
          <IconButton
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div> :
        <div>
          <SmallAvatar
            imageURL={imageURL}
            userName={realName}
          />
        </div>
      }

      <Link to="/" style={{ textDecoration: 'none' }}>
        <CardButton>
          {'Go 🔙 Home'}
        </CardButton>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

QuestionPage.propTypes = {
  // from MapStateToProps
  realName: PropTypes.string,
  imageURL: PropTypes.string,
  errorPage: PropTypes.bool.isRequired,
  // from material-ui
  classes: PropTypes.object.isRequired,
  // from Router
  match: PropTypes.object.isRequired,
};

QuestionPage.defaultProps = {
  realName: '',
  imageURL: '',
};

function mapStateToProps({ questions, users, authUser }, { match }) {
  if (questions[match.params.id] === undefined) {
    const errorPage = true;
    return {
      errorPage,
    };
  }
  const userName = questions[match.params.id].author;
  const realName = authUser === userName ? 'you' : users[userName].name;
  const imageURL = users[userName].avatarURL;
  const errorPage = false;
  return {
    realName,
    imageURL,
    errorPage,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(QuestionPage));
