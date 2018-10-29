import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './Layout';
import { handleAddQuestion } from '../actions/questions';
import { fakeAsbestos } from '../styles/colors';
import { Title1, BodyText } from '../styles/typography';

class CreatePollPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOneValue: '',
      optionTwoValue: '',
      toHome: false,
    };
  }

  handleInput = (e) => {
    const input = e.target.value;
    const option = e.target.name;
    this.setState({
      [option]: input,
    });
  };

  handleSubmit = (e) => {
    const { optionOneValue, optionTwoValue } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();
    if (optionOneValue && optionTwoValue) {
      dispatch(handleAddQuestion(optionOneValue, optionTwoValue));
    }
    this.setState({
      optionOneValue: '',
      optionTwoValue: '',
      toHome: true,
    });
  }

  render() {
    const { optionOneValue, optionTwoValue, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <Layout>
        <Title1>
          {`Create a New Poll`}
        </Title1>
        <BodyText>
          {`🤔 Would You Rather...`}
        </BodyText>

        <StyledForm
          onSubmit={this.handleSubmit}
        >
          <StyledLabel>
            <BodyText>
              Option one
            </BodyText>
            <StyledInput
              name="optionOneValue"
              type="text"
              value={optionOneValue}
              onChange={(e) => this.handleInput(e)}
              maxlength="140"
              placeholder="Option one"
              required
            />
          </StyledLabel>
          <StyledLabel>
            <BodyText>
              Option one
            </BodyText>
            <StyledInput
              name="optionTwoValue"
              type="text"
              value={optionTwoValue}
              onChange={(e) => this.handleInput(e)}
              maxlength="140"
              placeholder="Option two"
              required
            />
          </StyledLabel>
          <StyledSubmit
            type="submit"
            value="Create Poll"
            disabled={optionOneValue === '' || optionTwoValue === ''}
          />
        </StyledForm>
      </Layout>
    );
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1em;
  min-width: 18em;
`;

const StyledInput = styled.input`
  border: solid 1px #FFF;
  border-bottom: solid 1px ${fakeAsbestos};
  padding: 0.75em;
`;

const StyledSubmit = styled.input`
  background: "#FFF";
  border: 2px solid ${fakeAsbestos};
  border-radius: 0.25em;
  color: ${fakeAsbestos};
  display: flex;
  font-size: 0.9em;
  justify-content: center;
  margin: 1em;
  padding: 1em;
  transition: box-shadow 0.3s ease;

  &:hover, &:active {
    color: #FFF;
    background: ${fakeAsbestos};
  }
`;

export default connect()(CreatePollPage);
