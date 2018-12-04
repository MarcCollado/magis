/* eslint-disable */

let users = {
  marccollado: {
    id: 'marccollado',
    name: 'Marc Collado',
    avatarURL: 'https://pbs.twimg.com/profile_images/713380804890484739/iAe1nkdr_400x400.jpg',
    votes: {
      '8xf0y6ziyjabvozdd253nd': 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionOne',
      loxhs1bqm25b708cmbf3g: 'optionTwo',
    },
    polls: ['7fj3y6ziyoresozdd23r6u'],
  },
  niko: {
    id: 'niko',
    name: 'Nikola Tesla',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG',
    votes: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo',
    },
    polls: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
  jony: {
    id: 'jony',
    name: 'Jony Ive',
    avatarURL: 'https://www.technobuffalo.com/wp-content/uploads/2015/05/ive.jpg',
    votes: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo',
      '7gd6fk3em9h2dpe490e1': 'optionTwo',
      '7fj3y6ziyoresozdd23r6u': 'optionTwo',
      'am8rszc8bysdear0jgpubv8': 'optionTwo',
    },
    polls: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do', 'am8rszc8bysdear0jgpubv8'],
  },
  albert: {
    id: 'albert',
    name: 'Albert Einstein',
    avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg',
    votes: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
      '7fj3y6ziyoresozdd23r6u': 'optionOne',
      'am8rszc8bysdear0jgpubv8': 'optionTwo',
    },
    polls: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r', '7gd6fk3em9h2dpe490e1'],
  },
};

let polls = {
  'am8rszc8bysdear0jgpubv8': {
    id: 'am8rszc8bysdear0jgpubv8',
    author: 'jony',
    timestamp: 1466264761544,
    optionOne: {
      votes: ['niko'],
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
      votes: ['jony', 'marccollado'],
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
      votes: ['albert'],
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
      votes: ['albert', 'jony'],
      text: 'Get a job as top notch executive 💸 at Wall Street',
    },
    optionTwo: {
      votes: ['marccollado', 'niko'],
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
      votes: ['jony', 'marccollado'],
      text: 'Work at Apple, as an engineer at the iPod Touch 📱 team',
    },
  },
};

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res(users), 1000);
  });
}

export function _getPolls() {
  return new Promise((res, rej) => {
    setTimeout(() => res(polls), 1000);
  });
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function formatPoll({ author, optionOne, optionTwo }) {
  return ({
    "id": generateUID(),
    "timestamp": Date.now(),
    author,
    "optionOne": {
      // FIXME: creating a fake object to the array so it gets added to Firebase
      votes: ["0"],
      text: optionOne,
    },
    "optionTwo": {
      votes: ["0"],
      text: optionTwo,
    },
  });
};
