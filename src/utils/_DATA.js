/* eslint-disable */

let users = {
  marccollado: {
    id: 'marccollado',
    name: 'Marc Collado',
    avatarURL: 'https://pbs.twimg.com/profile_images/713380804890484739/iAe1nkdr_400x400.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionOne',
      loxhs1bqm25b708cmbf3g: 'optionTwo',
    },
    questions: ['7fj3y6ziyoresozdd23r6u'],
  },
  niko: {
    id: 'niko',
    name: 'Nikola Tesla',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo',
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
  jony: {
    id: 'jony',
    name: 'Jony Ive',
    avatarURL: 'http://www.technobuffalo.com/wp-content/uploads/2014/10/jony-ive.jpg',
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo',
      '7gd6fk3em9h2dpe490e1': 'optionTwo',
      '7fj3y6ziyoresozdd23r6u': 'optionTwo',
      'am8rszc8bysdear0jgpubv8': 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do', 'am8rszc8bysdear0jgpubv8'],
  },
  albert: {
    id: 'albert',
    name: 'Albert Einstein',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg',
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
      '7fj3y6ziyoresozdd23r6u': 'optionOne',
      'am8rszc8bysdear0jgpubv8': 'optionTwo',
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r', '7gd6fk3em9h2dpe490e1'],
  },
};

let questions = {
  'am8rszc8bysdear0jgpubv8': {
    id: 'am8rszc8bysdear0jgpubv8',
    author: 'jony',
    timestamp: 1466264761544,
    optionOne: {
      votes: [],
      text: 'Turn the world into a thin, white ⚪️ room like mine',
    },
    optionTwo: {
      votes: ['albert', 'jony'],
      text: 'Develop a procedure ‍⚗️ to turn steel into alumninum',
    },
  },
  '7fj3y6ziyoresozdd23r6u': {
    id: '7fj3y6ziyoresozdd23r6u',
    author: 'marccollado',
    timestamp: 1467265871642,
    optionOne: {
      votes: ['albert'],
      text: 'Graduate from Stanford 👩‍🎓 and go work at a bank',
    },
    optionTwo: {
      votes: ['jony'],
      text: 'Graduate from MIT 👩‍🔬 and go work at CERN',
    },
  },
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'niko',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['niko'],
      text: 'Eat only 🍏 fruit and 🥦 vegetables for the rest of your life',
    },
    optionTwo: {
      votes: ['marccollado'],
      text: 'Eat only 🥩 meat and 🐠 fish for the rest of your life',
    },
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'albert',
    timestamp: 1468479767190,
    optionOne: {
      votes: ['niko'],
      text: 'Time travel to the 🦖 past knowing everything you now know',
    },
    optionTwo: {
      votes: ['albert', 'marccollado'],
      text: 'Time travel to the 🔮 future without knowing anything of what you now know',
    },
  },
  '7gd6fk3em9h2dpe490e1': {
    id: '7gd6fk3em9h2dpe490e1',
    author: 'albert',
    timestamp: 1476479545194,
    optionOne: {
      votes: [],
      text: 'Develop the habit of waking up ⏰ at 5:00am every day',
    },
    optionTwo: {
      votes: ['jony'],
      text: 'Be able to work, with plenty of energy 🔋 during all night',
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'niko',
    timestamp: 1488579767190,
    optionOne: {
      votes: ['marccollado'],
      text: 'Go through a ten day meditation retreat 🧘‍',
    },
    optionTwo: {
      votes: ['niko'],
      text: 'Finish a marathon 🏃‍',
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'jony',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'Get a job as top notch executive 💸 at Wall Street',
    },
    optionTwo: {
      votes: ['niko', 'marccollado'],
      text: 'Get a job as a programmer 👩‍💻 at Silicon Valley',
    },
  },
  vthrdm985a262al8qx3do: {
    id: 'vthrdm985a262al8qx3do',
    author: 'jony',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['jony'],
      text: 'Be the first to go to Mars aboard of a 🚀 Falcon 9 rocket',
    },
    optionTwo: {
      votes: ['albert'],
      text: 'Drive across the Route 66 with the new 🚘 Tesla Roadster',
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'albert',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['albert'],
      text: 'Work at Google, as the PM at the Google Reader 📖 team',
    },
    optionTwo: {
      votes: ['jony'],
      text: 'Work at Apple, as an engineer at the iPod Touch 📱 team',
    },
  },
};

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res({ ...questions, ...users });
    }, 500);
  });
}
