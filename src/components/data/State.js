const State = {
  usersList: [
    {
      id: 1,
      ico: "ico-1.jpg",
      name: "Serega",
      password: "111",
      date_of_birth: "27.01.1991",
      city: "Minsk",
      education: "BSU",
      site: "https://vk.com"
    },
    {
      id: 2,
      ico: "ico-2.jpg",
      name: "Valera",
      password: "222",
      date_of_birth: "01.02.1960",
      city: "Moon",
      education: "SSS",
      site: "https://vk.com"
    },
    {
      id: 3,
      ico: "ico-3.jpg",
      name: "Taxist",
      password: "333",
      date_of_birth: "12.02.1985",
      city: "Ochko",
      education: "---",
      site: "https://sosoTaxi.com"
    }
  ],
  posts: [
    {
      id: 1,
      post: [
        {
          id: 1,
          date: "04.10.2019",
          time: "24.46",
          text: "Первый тестовый пост Seregi"
        },
        {
          id: 2,
          date: "14.10.2019",
          time: "14.23",
          text: "Второй тестовый пост Seregi"
        },
        {
          id: 3,
          date: "14.10.2019",
          time: "14.23",
          text: "Третий тестовый пост Seregi"
        }
      ]
    },
    {
      id: 2,
      post: [
        {
          id: 1,
          date: "11.10.2019",
          time: "21.46",
          text: "Первый тестовый пост Валеры"
        },
        {
          id: 2,
          date: "14.10.2019",
          time: "14.23",
          text: "Второй тестовый пост Валеры"
        }
      ]
    },
    {
      id: 3,
      post: [
        {
          id: 1,
          date: "11.10.2019",
          time: "21.46",
          text: "Первый тестовый Taxist"
        },
        {
          id: 2,
          date: "14.10.2019",
          time: "14.23",
          text: "Второй тестовый Taxist"
        }
      ]
    }
  ],
  subscribe: [
    {
      id: 1,
      userSubscribe: [2]
    },
    {
      id: 2,
      userSubscribe: [1, 3]
    },
    {
      id: 3,
      userSubscribe: [2]
    }
  ],
  allMessage: [
    {
      id: 1,
      message: [
        {
          id: 2,
          userMessage: [
            {
              from: 1,
              text: "Пользователь написал Валере 1"
            },
            {
              to: 2,
              text: "Пользователь Валера ответил Сегере 1"
            },
            {
              to: 2,
              text: "Пользователь Валера спросил у Сереги"
            },
            {
              to: 2,
              text: "Пользователь Валера спросил у Сереги 2 раз"
            },
            {
              from: 1,
              text: "Пользователь ответил Валере"
            }
          ]
        },
        {
          id: 3,
          userMessage: []
        }
      ]
    },
    {
      id: 2,
      message: [
        {
          id: 1,
          message: "Первое сообщение"
        }
      ]
    },
    {
      id: 3,
      message: [
        {
          id: 1,
          message: "Первое сообщение"
        }
      ]
    }
  ],
  profilePage: {
    posts: [
      {
        id: 1,
        ico: "ico-1.jpg",
        message: "Hi test 1",
        likes: 12
      },
      {
        id: 2,
        ico: "ico-1.jpg",
        message: "Hi test 2",
        likes: 6
      },
      {
        id: 3,
        ico: "ico-1.jpg",
        message: "Hi test 3",
        likes: 5
      },
      {
        id: 4,
        ico: "ico-1.jpg",
        message: "Hi test 4",
        likes: 11
      }
    ]
  },
  dialogPage: {
    dialogs: [
      {
        id: 1,
        name: "Valera",
        message: [
          {
            id: 1,
            name: "Valera",
            ico: "ico-1.jpg",
            message: "Привет валера"
          },
          {
            id: 2,
            name: "Serg",
            ico: "ico-2.jpg",
            message: "Привет"
          },
          {
            id: 3,
            name: "Valera",
            ico: "ico-1.jpg",
            message: "Как дела валера"
          },
          {
            id: 4,
            name: "Serg",
            ico: "ico-2.jpg",
            message: "Нормально"
          }
        ]
      },
      {
        id: 2,
        name: "Taxist",
        message: [
          {
            id: 1,
            ico: "ico-1.jpg",
            message: "Привет Taxist"
          },
          {
            id: 2,
            ico: "ico-3.jpg",
            message: "hi"
          },
          {
            id: 3,
            ico: "ico-1.jpg",
            message: "Как дела Taxist"
          },
          {
            id: 4,
            ico: "ico-3.jpg",
            message: "нори"
          }
        ]
      }
    ]
  },
  bannerImg: ["slide-1.jpg", "slide-2.jpg", "slide-3.jpg"]
};

export default State;
