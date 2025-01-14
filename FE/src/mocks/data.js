export const users = [
  {
    id: 0,
    name: '나니',
    profileUrl:
      'https://github.com/bread1022/TIL/assets/107349637/db753467-76aa-493d-9875-6aff6fc6c656'
  },
  {
    id: 1,
    name: '워터',
    profileUrl:
      'https://github.com/bread1022/TIL/assets/107349637/e675d61f-2884-4084-b7db-604ad238fc87'
  },
  {
    id: 2,
    name: '버디',
    profileUrl:
      'https://github.com/bread1022/TIL/assets/107349637/bacc531d-a512-4a54-9c5c-5e22d7425900'
  },
  {
    id: 3,
    name: '감자',
    profileUrl:
      'https://github.com/bread1022/TIL/assets/107349637/e3d247fa-47b0-4d13-8dc5-a3cae495d732'
  },
  {
    id: 4,
    name: '노아',
    profileUrl:
      'https://github.com/bread1022/TIL/assets/107349637/6094efe1-d378-43bc-9d5e-e6cf5e792e3d'
  },
  {
    id: 5,
    name: '데미안',
    profileUrl:
      'https://github.com/bread1022/TIL/assets/107349637/a981d3b0-77ec-4402-a658-ca6a41ed41de'
  }
];

export const labels = [
  {
    id: 0,
    name: 'Bug',
    backgroundColor: '#389561',
    fontColor: '#fff'
  },
  {
    id: 1,
    name: 'Feature',
    backgroundColor: '#FFBBC6',
    fontColor: '#000'
  },
  {
    id: 2,
    name: 'Enhancement',
    backgroundColor: '#6E6ED7',
    fontColor: '#fff'
  },
  {
    id: 3,
    name: 'Refactor',
    backgroundColor: '#975a97',
    fontColor: '#fff'
  }
];

export const milestones = [
  {
    id: 1,
    name: 'First Milestone',
    endDate: '2023-06-20',
    contents: 'contents 1'
  },
  {
    id: 2,
    name: 'Second Milestone',
    endDate: '2023-07-22',
    contents: 'contents 2'
  },
  {
    id: 3,
    name: 'Third Milestone',
    endDate: '2023-09-25',
    contents: 'contents 3'
  }
];

export const issueList = [
  {
    id: 0,
    title: 'First Issue',
    createTime: '2023-05-22T05:34:16.754Z',
    updateTime: '2023-05-22T05:34:16.754Z',
    isOpen: false,
    milestone: 'First Milestone',
    commentAuthors: [2],
    author: {
      id: 0,
      name: 'GamJa',
      profileUrl:
        'https://github.com/bread1022/TIL/assets/107349637/e3d247fa-47b0-4d13-8dc5-a3cae495d732'
    },
    assignees: [
      {
        id: 1,
        name: 'Nani',
        profileUrl:
          'https://github.com/bread1022/TIL/assets/107349637/db753467-76aa-493d-9875-6aff6fc6c656'
      }
    ],
    labels: [
      {
        id: 0,
        name: 'Bug',
        backgroundColor: '#389561',
        fontColor: '#fff'
      },
      {
        id: 3,
        name: 'Refactor',
        backgroundColor: '#975a97',
        fontColor: '#fff'
      }
    ]
  },
  {
    id: 1,
    title: 'Second Issue',
    createTime: '2023-04-12T03:34:16.754Z',
    updateTime: '2023-05-22T06:34:16.754Z',
    isOpen: true,
    milestone: 'Second Milestone',
    commentAuthors: [1, 3],
    author: {
      id: 2,
      name: 'Demian',
      profileUrl:
        'https://github.com/bread1022/TIL/assets/107349637/a981d3b0-77ec-4402-a658-ca6a41ed41de'
    },
    assignees: [
      {
        id: 0,
        name: 'GamJa',
        profileUrl:
          'https://github.com/bread1022/TIL/assets/107349637/e3d247fa-47b0-4d13-8dc5-a3cae495d732'
      }
    ],
    labels: [
      {
        id: 1,
        name: 'Feature',
        backgroundColor: '#FFBBC6',
        fontColor: '#000'
      }
    ]
  },
  {
    id: 2,
    title: 'Third Issue',
    createTime: '2023-05-21T05:34:16.754Z',
    updateTime: '2023-05-21T06:34:16.754Z',
    isOpen: true,
    milestone: 'Third Milestone',
    commentAuthors: [2, 4],
    author: {
      id: 3,
      name: 'Birdie',
      profileUrl:
        'https://github.com/bread1022/TIL/assets/107349637/bacc531d-a512-4a54-9c5c-5e22d7425900'
    },
    assignees: [
      {
        id: 4,
        name: 'Noah',
        profileUrl:
          'https://github.com/bread1022/TIL/assets/107349637/6094efe1-d378-43bc-9d5e-e6cf5e792e3d'
      },
      {
        id: 1,
        name: 'GamJa',
        profileUrl:
          'https://github.com/bread1022/TIL/assets/107349637/e3d247fa-47b0-4d13-8dc5-a3cae495d732'
      }
    ],
    labels: [
      {
        id: 2,
        name: 'Enhancement',
        backgroundColor: '#6E6ED7',
        fontColor: '#fff'
      }
    ]
  },
  {
    id: 3,
    title: 'Fourth Issue',
    createTime: '2023-05-22T05:34:16.754Z',
    updateTime: '2023-05-22T07:34:16.754Z',
    isOpen: true,
    milestone: 'Fourth Milestone',
    commentAuthors: [1, 2, 3],
    author: {
      id: 5,
      name: 'Water',
      profileUrl:
        'https://github.com/bread1022/TIL/assets/107349637/e675d61f-2884-4084-b7db-604ad238fc87'
    },
    assignees: [
      {
        id: 4,
        name: 'Noah',
        profileUrl:
          'https://github.com/bread1022/TIL/assets/107349637/6094efe1-d378-43bc-9d5e-e6cf5e792e3d'
      }
    ],
    labels: [
      {
        id: 5,
        name: 'Build',
        backgroundColor: '#82B3ED',
        fontColor: '#14142B'
      }
    ]
  }
];
