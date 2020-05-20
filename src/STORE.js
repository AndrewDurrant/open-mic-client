export default {
  videos: [
    {
      id: 1,
      title: "Frozen Margarita",
      link: "https://www.youtube.com/watch?v=-0JDlAn2Y5Y",
      description: "I wrote this while drinking warm sake.",
      date_created: "2020-05-19T20:27:31.882Z",
      user: {
          id: 1,
          full_name: "Digital Dave",
          user_name: "David Maui",
          date_created: "2020-05-19T20:27:31.882Z"
      },
      number_of_interactions: 0,
      average_comment_rating: 0
  },
  {
    id: 2,
    title: "Call on Jah",
    link: "https://www.youtube.com/watch?v=kMKwkDDtlfI",
    description: "When times are tough and living is rough, you know what to do.",
    date_created: "2020-05-19T20:27:31.882Z",
    user: {
        id: 2,
        full_name: "Rowdy Russell",
        user_name: "Russell Govinda",
        date_created: "2020-05-19T20:27:31.882Z"
    },
    number_of_interactions: 4,
    average_comment_rating: 3
  },
  {
    id: 3,
    title: "Country Road",
    link: "https://www.youtube.com/watch?v=SEx2PzrRUfY",
    description: "One of my all time favorite covers to sing",
    date_created: "2020-05-19T20:27:31.882Z",
    user: {
        id: 1,
        full_name: "Digital Dave",
        user_name: "David Maui",
        date_created: "2020-05-19T20:27:31.882Z"
    },
    number_of_interactions: 0,
    average_comment_rating: 0
  },
  {
    id: 4,
    title: "Gina Chavez",
    link: "https://www.youtube.com/watch?v=sRZi4QQEGBI",
    description: "These lyrics were inspired from a trip to Bali.",
    date_created: "2020-05-19T20:27:31.882Z",
    user: {
        id: 3,
        full_name: "Eddy River",
        user_name: "Edward Thames",
        date_created: "2020-05-19T20:27:31.882Z"
    },
    number_of_interactions: 2,
    average_comment_rating: 4
  },
  {
    id: 5,
    title: "Poor Man",
    link: "https://www.youtube.com/watch?v=2uwpaxTkDrY",
    description: "Wrote this with a friend. I hope you like it!",
    date_created: "2020-05-19T20:27:31.882Z",
    user: {
        id: 2,
        full_name: "Rowdy Russell",
        user_name: "Russell Govinda",
        date_created: "2020-05-19T20:27:31.882Z"
    },
    number_of_interactions: 0,
    average_comment_rating: 0
  },
  {
    id: 6,
    title: "Streets",
    link: "https://www.youtube.com/watch?v=0hD-Z1q_ZyI",
    description: "What can I say. I am Doja Cat.",
    date_created: "2020-05-19T20:27:31.882Z",
    user: {
        id: 1,
        full_name: "Digital Dave",
        user_name: "David Maui",
        date_created: "2020-05-19T20:27:31.882Z"
    },
    number_of_interactions: 0,
    average_comment_rating: 0
  }
  ],
  interactions: [
    {
      rating: '4',
      comment: 'loved this!',
      media_id: '4',
      user_id: '2'
    },
    {
      rating: '2',
      comment: 'Not bad',
      media_id: '2',
      user_id: '3'
    },
    {
      rating: '3',
      comment: 'This had me dancing!',
      media_id: '4',
      user_id: '1'
    },
    {
      rating: '1',
      comment: 'I want my time back.',
      media_id: '2',
      user_id: '4'
    },
    {
      rating: '4',
      comment: 'I want to play guitar like that!',
      media_id: '2',
      user_id: '2'
    },
    {
      rating: '3',
      comment: 'Thank you for sharing this.',
      media_id: '2',
      user_id: '3'
    }
  ],
  users: [
    {
      id: 1,
      full_name: "Digital Dave",
      user_name: "DavidMaui",
      date_created: "2020-05-18T20:27:31.882Z",
      email: "dave@yahoo.com"
    },
    {
      id: 2,
      full_name: "Rhonda Govinda",
      user_name: "RowdyRhonda",
      date_created: "2020-05-19T20:27:31.882Z",
      email: "russell@google.com"
    },
    {
      id: 3,
      full_name: "Edward Thames",
      user_name: "river77",
      date_created: "2020-05-17T20:27:31.882Z",
      email: "thames@google.com"
    },
    {
      id: 4,
      full_name: "Samantha Teton",
      user_name: "sammy",
      date_created: "2020-05-15T20:27:31.882Z",
      email: "samsam@google.com"
    }
  ]
}