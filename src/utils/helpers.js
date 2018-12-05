function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function pollFormatter({ createdBy, optionOne, optionTwo }) {
  return ({
    pollID: generateUID(),
    createdBy,
    timestamp: Date.now(),
    options: {
      optionOne,
      optionTwo,
    },
    votes: {},
  });
}

export function getAuthUserData(authUser, users) {
  const authUserData = Object.keys(users).some((key) => key === authUser);
  if (authUserData) {
    return users[authUser];
  }
  return null;
}

const polls = {
  am8rszc8bysdear0jgpubv8: {
    pollID: 'am8rszc8bysdear0jgpubv8',
    createdBy: 'lasgjloTc3bDqBefthYbresH8dv1',
    timestamp: 1466264761544,
    options: {
      optionOne: 'Develop a procedure ‍⚗️ to turn steel into alumninum',
      optionTwo: 'Turn the world into a thin, white ⚪️ room like mine',
    },
    votes: {},
  },
  '7fj3y6ziyoresozdd23r6u': {
    pollID: '7fj3y6ziyoresozdd23r6u',
    createdBy: 'lasgjloTc3bDqBefthYbresH8dv1',
    timestamp: 1467265871642,
    options: {
      optionOne: 'Graduate from Stanford 👩‍🎓 and go work at a bank',
      optionTwo: 'Graduate from MIT 👩‍🔬 and go work at CERN',
    },
    votes: {},
  },
  '8xf0y6ziyjabvozdd253nd': {
    pollID: 'lasgjloTc3bDqBefthYbresH8dv1',
    createdBy: 'lasgjloTc3bDqBefthYbresH8dv1',
    timestamp: 1467166872634,
    options: {
      optionOne: 'Eat only 🍏 fruit and 🥦 vegetables for the rest of your life',
      optionTwo: 'Eat only 🥩 meat and 🐠 fish for the rest of your life',
    },
    votes: {},
  },
  am8ehyc8byjqgar0jgpub9: {
    pollID: 'lasgjloTc3bDqBefthYbresH8dv1',
    createdBy: 'lasgjloTc3bDqBefthYbresH8dv1',
    timestamp: 1488579767190,
    options: {
      optionOne: 'Go through a ten day meditation retreat 🧘‍',
      optionTwo: 'Finish a marathon 🏃‍',
    },
    votes: {},
  },
  '6ni6ok3ym7mf1p33lnez': {
    pollID: '6ni6ok3ym7mf1p33lnez',
    createdBy: 'lasgjloTc3bDqBefthYbresH8dv1',
    timestamp: 1468479767184,
    options: {
      optionOne: 'Time travel to the 🦖 past knowing everything you now know',
      optionTwo: 'Time travel to the 🔮 future without knowing anything of what you now know',
    },
    votes: {},
  },
  '7gd6fk3em9h2dpe490e1': {
    pollID: '7gd6fk3em9h2dpe490e1',
    createdBy: 'lasgjloTc3bDqBefthYbresH8dv1',
    timestamp: 1476479545194,
    options: {
      optionOne: 'Develop the habit of waking up ⏰ at 5:00am every day',
      optionTwo: 'Be able to work, with plenty of energy 🔋 during all night',
    },
    votes: {},
  },
  loxhs1bqm25b708cmbf3g: {
    pollID: 'loxhs1bqm25b708cmbf3g',
    createdBy: 'lasgjloTc3bDqBefthYbresH8dv1',
    timestamp: 1482579767642,
    options: {
      optionOne: 'Get a job as top notch executive 💸 at Wall Street',
      optionTwo: 'Get a job as a programmer 👩‍💻 at Silicon Valley',
    },
    votes: {},
  },
  vthrdm985a262al8qx3do: {
    pollID: 'vthrdm985a262al8qx3do',
    createdBy: 'lasgjloTc3bDqBefthYbresH8dv1',
    timestamp: 1489579767321,
    options: {
      optionOne: 'Be the first to go to Mars aboard of a 🚀 Falcon 9 rocket',
      optionTwo: 'Drive across the Route 66 with the new 🚘 Tesla Roadster',
    },
    votes: {},
  },
};

const extraPoll = {
  xj352vofupe1dqz9emx13r: {
    pollID: 'xj352vofupe1dqz9emx13r',
    createdBy: 'lasgjloTc3bDqBefthYbresH8dv1',
    timestamp: 1493579767543,
    options: {
      optionOne: 'Work at Google, as the PM at the Google Reader 📖 team',
      optionTwo: 'Work at Apple, as an engineer at the iPod Touch 📱 team',
    },
    votes: {},
  },
};

const users = {
  lasgjloTc3bDqBefthYbresH8dv1: {
    userID: 'lasgjloTc3bDqBefthYbresH8dv1',
    userEmail: 'marc@collado.io',
    userName: 'Marc Collado',
    avatarURL: 'https://avatars0.githubusercontent.com/u/2161758?v=4',
    authProvider: 'github.com',
  },
};

export function seedUsers() {
  return new Promise((res, rej) => res(users));
}

export function seedPolls() {
  return new Promise((res, rej) => res(polls));
}
