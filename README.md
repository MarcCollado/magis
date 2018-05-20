# Would You Rather?
React & Redux Project — Udacity React Developer Nanodegree

This is the second project of the [React Developer Nanodegree](https://eu.udacity.com/course/react-nanodegree--nd019).

* [MyReads](https://github.com/MarcCollado/my-reads) — React Fundamentals Project
* [Would You Rather](https://github.com/MarcCollado/would-you-rather) — React & Redux Project
* TBD — React Native Project


## TL;DR
This project consists in a small game, of course built in React & Redux, that quizzes the user with questions in a *"Would You Rather..."* format. It allows the user to login, post questions and also vote on questions posted by other users.


## Tech Stack
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React Router](https://github.com/ReactTraining/react-router)
* [Material UI](https://material-ui.com/)


## Setting Things Up
To get started right away:
* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* Open the browser at `localhost:3000`

**👨‍💻 Pro Tip:** although the app and all its components are fully responsive, from the beginning, because its playful nature, it was conceived to be a mobile-first experience. Therefore to get the most out of the app, set your browser window at a width of preferably ~480px or select a mobile viewport from the developer tools.


## How It Works
### Login & Logout
Once the server has started with `npm start` the user will be routed, not authenticated by default, to the *Feed* `/`.

The *Feed* is a time based stream of the questions posted by all users, categorized by *ANSWERED* or *UNANSWERED* — through the tabs found right below the navigation bar, depending on whether the logged user has voted on them or not.

Because by default the user is unauthenticated at launch, all the questions are shown in the *UNANSWERED* side of the feed.

There's not much a user can do without authenticating besides switching between the *ANSWERED* or *UNANSWERED* tabs. Attempting to vote, post or view the stats of a question, or view the leaderboard, will redirect to the *Login* page, since the aforementioned routes are private and can't be accessed without being authenticated.

It is also possible to navigate directly to the *Login* page without being redirected from private routes from the (always present) main menu, found in the left side of the navigation bar.

From the *Login* page `/login`, the user is presented with a list of all registered users pulled from `_DATA.js`, tapping on one of them will authenticate and log in.

**✨ Bonus Feature:** once the user logs in, the *Feed* page `/` is shown, but if the user came from another route, say `/leaderboard`, the app "will remember" and route back the user to the place she was trying to visit in the first place.

**👨‍💻 Pro Tip:** to check whether a user is currently logged in or not, watch out at the right side of the navigation bar: the profile picture of the logged user will appear, otherwise, a placeholder will be shown.

Finally, the app allows the user to logout and log back in. To *Logout* simply open the main menu and a *Logout* menu item will appear instead of the *Login* found before. Tap *Logout* and the app will clear out the authenticated user and redirect back to `/login`.



## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|
