# Would You Rather?
React & Redux Project — Udacity React Developer Nanodegree

This is the second project of the [React Developer Nanodegree](https://eu.udacity.com/course/react-nanodegree--nd019).

* [MyReads](https://github.com/MarcCollado/my-reads) — React Fundamentals Project
* [Would You Rather](https://github.com/MarcCollado/would-you-rather) — React & Redux Project
* [Flashcards](https://github.com/MarcCollado/flashcards) — React Native Project

---

## ⚠️ Important Note
During the entire development, the project was using the beta version of the `material-ui` library. Right before submission, the `material-ui` library was updated to its latest version (1.0). Unfortunately there is a known issue with one of the library modules in 1.0 that makes the application crash at launch because one of its dependencies (`createSvgIcon.js`) points at an old directory.

While waiting on the update, I've temporarily worked around the issue and included back the old version of the `material-ui` library in the `package.json`. So now, the whole app works with the new version of `material-ui`, while this broken reference mentioned still resolves fine and works with the old version.

Long story short: the project now works properly "out of the box" with both libraries installed. Still, if you want to "manually" fix the issue and ensure the project works with `material-ui` updated library altogether, simply follow the next steps.

Go to this file:

`/node_modules/@material-ui/icons/utils/createSvgIcon.js`

And change the line 15 from:

`var _SvgIcon = require('material-ui/SvgIcon');`

to be:

`var _SvgIcon = require('@material-ui/core/SvgIcon');`

---

## TL;DR
This project consists in a small quiz game, of course built in React & Redux, that quizzes the user with questions in a *"Would You Rather..."* format. It allows the user to login, post questions and also vote on questions posted by other users.

![img](/public/readme/artwork.jpg)

## Tech Stack
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React Router](https://github.com/ReactTraining/react-router)
* [Material UI](https://material-ui.com/)


## Setting Things Up
To get started right away:
* Clone the repo
* Install project dependencies with `npm install`
* Start the development server with `npm start`
* Open the browser at `localhost:3000`

**👨‍💻 Pro Tip:** although the app and all its components are fully responsive, from the beginning, because its playful nature, it was conceived to be a mobile-first experience. Therefore to get the most out of the app, set your browser window at a width of preferably ~480px or select a mobile viewport from the developer tools.


## How It Works
### Login & Logout
Once the server has started with `npm start` the user will be routed, not authenticated by default, to the *Feed* `/`.

The *Feed* is a time based stream of the questions posted by all users, categorized by *ANSWERED* or *UNANSWERED* — through the tabs found right below the (always visible) navigation bar, depending on whether the logged user has voted on them or not.

Because by default the user is unauthenticated at launch, all the questions are shown in the *UNANSWERED* side of the feed.

There's not much a user can do without authenticating besides switching between the *ANSWERED* or *UNANSWERED* tabs. Attempting to vote, post or view the stats of a question, or view the leaderboard, will redirect to the *Login* page, since the aforementioned routes are private and can't be accessed without being authenticated.

![img](/public/readme/login.png)

It is also possible to navigate directly to the *Login* page without being redirected from private routes from the (always present) main menu, found in the left side of the navigation bar.

From the *Login* page `/login`, the user is presented with a list of all registered users pulled from `_DATA.js`, tapping on one of them will authenticate and log in.

**✨ Bonus Feature:** once the user logs in, the *Feed* page `/` is shown, but if the user came from another route, say `/leaderboard`, the app "will remember" and route back the user to the place she was trying to visit in the first place.

**👨‍💻 Pro Tip:** to check whether a user is currently logged in or not, watch out at the right side of the navigation bar: the profile picture of the logged user will appear, otherwise, a placeholder will be shown.

Finally, the app allows the user to logout and log back in. To *Logout* simply open the main menu and a *Logout* menu item will appear instead of the *Login* found before. Tap *Logout* and the app will clear out the authenticated user and redirect back to `/login`.

### Home — aka. Feed
As mentioned before, all the answered and unanswered polls are both available at the root `/`, the *Feed*. The *ANSWERED* or *UNANSWERED* tabs above allow the user to switch between viewing answered and unanswered polls. The unanswered questions are shown by default and without an authenticated user logged in, all the polls are shown under the *UNANSWERED* tab.

![img](/public/readme/feed.png)

The polls in both tabs are arranged from the most recently created (top) to the least recently created (bottom).

From the Feed, a user can perform several actions (each feature will be further explained in the upcoming sections):

* Vote on a poll: a user can vote on a question under the *UNANSWERED* tab. The details or stats of a question are not disclosed until the user has voted.
* View details or stats of a poll: a user can view the details or stats of a question under the *ANSWERED* tab.
* Navigate to the *Leaderboard* through a menu link in the navigation bar.
* Add or create a new poll through the `+` button permanently shown on the lower right corner.
* *Login* and *Logout*: as seen earlier, a user can login and logout from a menu link in the navigation bar.

### Questions
The whole UI of the project resolves around the *Question Card*. This is a modular component, reused across entire application both for the *Feed* as well for the *Question Page*. The card format is preserved, but its CTA is dynamically rendered depending on the status of the question. In other words, depending if the user has answered the question, wants to answer it or just check out the details, the *Question Card* will render the available actions accordingly.

*Question Card* in the *Feed* under the *UNANSWERED* tab will display a CTA to vote the question, since the user hasn't voted, yet.

![img](/public/readme/question-unanswered.png)

Upon tapping `VOTE` the user will be directed to the *Question Page* under `questions/:question_id` and display the *Question Card* with a CTA to vote on one of each option.

![img](/public/readme/question-vote.png)

*Question Card* back to the *Feed* under the *ANSWERED* tab will display a CTA to view the poll details the question, since the user has already voted it.

![img](/public/readme/question-answered.png)

Either upon tapping `POLL DETAILS` or after the user has voted, the user will be directed to the *Question Details* page under `questions/:question_id/details` and display the *Question Card* with the poll information and results, which include:

* Number of people who voted for each option
* Percentage of people who voted for each option
* Option selected by the logged user
* User who posted the question

![img](/public/readme/question-details.png)

As mentioned before, voting is possible and poll details are shown only when the user is logged in. If the user is logged out, she is asked to login before being able to perform any action on the poll.

Finally, when the user comes back to the *Feed*, the polling question now appears in the *ANSWERED* tab.

**✨ Bonus Feature:** the *Question Details* component shows an emoji 🙋‍ in the corresponding side of the *Question Card* depending on the user answer to that question.

### Post Questions
No matter where the user finds herself within the application, a `+` button to post a new question is always shown at the lower right corner, visible on all of the pages.

Tapping the button, a form available at `/add` will be shown with two text input fields corresponding to each option. Upon submitting the form, a new poll is created and the user is taken back to the *Feed*.

![img](/public/readme/add-question.png)

The new polling question the user just submitted will most certainly appear in the uppermost position under the *UNANSWERED* tab, since chances are she hasn't answered yet and it has been the last question to be created.

### Leaderboard
The Leaderboard is available at `/leaderboard` and can be accessed from the the menu item in navigation bar. Basically it lists all the users ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.

![img](/public/readme/user-card.png)

Each user entry maintains certain consistency with the card UI used for the *Question Card* component and contains the following information:
	* User’s name
	* User’s picture
	* Number of questions the user asked
	* Number of questions the user answered

### Data
Udacity provided a data file `_DATA.js` that served as a "mock database" for the application.

The `_DATA.js` has been slightly tweaked to accommodate some special data requirements, but most important, the project has also built a thin interface layer that acts as an API for `_DATA.js` that can be found under `utils/api.js`.

This small API exposes some of the methods found in `_DATA.js` and it acts as the direct interface with the app itself.

To summarize there are two types of objects stored in the database:

* Users
* Questions

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

`api.js` talks to the database through 4 methods:

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
