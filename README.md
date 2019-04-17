# 🎩 Magis

React & Redux Project — Udacity React Developer Nanodegree

This is the second project of the [React Developer Nanodegree](https://eu.udacity.com/course/react-nanodegree--nd019). Below you'll find the rest of the Nanodegree projects and I also wrote a [short post](https://www.collado.io/blog/2018/udacity-rdnd) in my blog about the course experience.

- [MyReads](https://github.com/MarcCollado/my-reads) — React Project
- [Magis](https://github.com/MarcCollado/magis), formerly [Would You Rather](https://www.collado.io/blog/2018/magis-10) — React & Redux Project
- [Flashcards](https://github.com/MarcCollado/flashcards) — React Native Project
  - [Flashcards API](https://github.com/MarcCollado/flashcards-api) — Flashcards' backend

ℹ️ This project was developed in 2018 during the Nanodegree under the name of "Would You Rather". Yet I [kept working](https://www.collado.io/blog/2018/would-you-rather-refactor) on it after the course, even to the point that I [changed its name](https://www.collado.io/blog/2018/magis-10), and has now become my go-to React playground — where I try new technologies before rolling them out to more mature [React-based projects](https://github.com/MarcCollado/collado-io) of mine.

⚠️ Deprecation alert from 04/2019: this project is no longer maintained and the public URLs have been taken down. While it remains 100% functional in a local environment, do not expect Firebase' endpoints to work anymore. If you'd like to see what I'm currently working on, please, visit my [now page](https://www.collado.io/now).

## About

This project consists in a small quiz game, built with React & Redux, that quizzes the user with questions in a _"Would You Rather..."_ format. It allows the user to login, post questions and also vote on questions posted by other users.

## Tech Stack

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://github.com/ReactTraining/react-router)
- [styled components](https://www.styled-components.com)
- [Firebase](https://firebase.google.com)

## Installation

Installing and running in a local environment:

- Clone or download the repo
- `npm install` to install the project dependencies
- `npm start` will launch the app at `localhost:3000`

If running it locally is not your thing, the project is also deployed [here](https://magis.netlify.com).

**👨‍💻 Pro Tip:** although the app and all its components are fully responsive, Magis was conceived to be a mobile-first experience. Therefore to get the most out of it, set your browser window at a width of preferably ~480px or select a mobile viewport from the developer tools.

## Features

### v0.1 — Udacity Project Rubric

- Login through a static preset of characters
- See feed of polls
  - Toggle between Open & Voted
- Post new polls
- Vote for polls
- See polls' stats
- See users' leaderboard

### v0.2 — [🎨 Designer' release](https://www.collado.io/blog/2018/would-you-rather-refactor)

- Improve app performance
- UX/UI revamp — use styled-components under the hood
- Deprecate Material UI library

### v0.3 — [⚙️ Devops' release](https://www.collado.io/blog/2018/magis-10)

- Signup & Login through GitHub
- Database integration and data persistence through Firebase
- Redux data model refactor
- [Live](https://magis.netlify.com/) version deployed

### v0.4 — Coming soon...

- User profile management
- Toggle view between user and global polls
- Signup & Login through Twitter
- styled-components v4 `createGlobalStyle`
