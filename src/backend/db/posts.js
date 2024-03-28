import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  // Batman's posts
  {
    _id: "e89rj5k_f5bj_6s89_fg5uSy",
    content:
      "Just finished another night of patrolling Gotham. Ran into Joker trying to steal candy from kids. Not on my watch, clown! 🃏🚫 #GothamNights",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711600071/Screenshot_2024-03-28_095739_pircbw.png",
    likes: {
      likeCount: 35,
      likedBy: [
        {
          _id: 2,
          firstName: "Clark",
          lastName: "Kent",
          username: "superman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 3,
          firstName: "Oliver",
          lastName: "Queen",
          username: "greenarrow",
          createdAt: "2022-03-03T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fr7k3j_dsh3_69g8_s7gkTt",
        username: "superman",
        text: "Keep up the good work, Batman! Gotham needs you.",
      },
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "greenarrow",
        text: "Your dedication to justice inspires us all, Batman!",
      },
    ],
    username: "batman",
    createdAt: "2023-08-28T12:15:37+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "gt8yujk_f5bj_6s89_fg5uSy",
    content:
      "Trying to solve Riddler's latest riddle. 'What's orange and sounds like a parrot?' Any guesses? 🤔🔍 #RiddleMeThis",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711600273/Screenshot_2024-03-28_100037_s2awcv.png",
    likes: {
      likeCount: 35,
      likedBy: [
        {
          _id: 2,
          firstName: "Clark",
          lastName: "Kent",
          username: "superman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 3,
          firstName: "Oliver",
          lastName: "Queen",
          username: "greenarrow",
          createdAt: "2022-03-03T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "greenarrow",
        text: "Careful, Speedy! We need you in one piece.",
      },
    ],
    username: "batman",
    createdAt: "2023-04-08T10:55:27+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "e1w3ujk_f5bj_6s89_fg5uSy",
    content:
      "Just finished upgrading the Batmobile with some cool new gadgets. Ready to take on any villain that crosses my path! 🦇🚗 #TechTuesday #Batmobile",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711600383/Screenshot_2024-03-28_100243_cuzciv.png",
    likes: {
      likeCount: 48,
      likedBy: [
        {
          _id: 3,
          firstName: "Oliver",
          lastName: "Queen",
          username: "greenarrow",
          createdAt: "2022-03-03T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "greenarrow",
        text: "Nice upgrades, Batman! Let's hope you don't have to use them too often.",
      },
    ],
    username: "batman",
    createdAt: "2023-06-20T15:40:02+05:30",
    updatedAt: formatDate(),
  },
  // Clark Kent's posts
  {
    _id: "g2f7ghj_f5bj_6s89_fg5uSy",
    content:
      "Just saved a kitten from a tree in Metropolis. Being Superman means always being there to lend a helping hand! 🐱💪 #SuperHeroLife",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711599959/Screenshot_2024-03-28_095402_vry32m.png",
    likes: {
      likeCount: 52,
      likedBy: [
        {
          _id: 1,
          firstName: "Bruce",
          lastName: "Wayne",
          username: "batman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 6,
          firstName: "Arthur",
          lastName: "Curry",
          username: "aquaman",
          createdAt: "2022-09-18T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fr7k3j_dsh3_69g8_s7gkTt",
        username: "batman",
        text: "Good job, Superman! Metropolis is lucky to have you.",
      },
    ],
    username: "superman",
    createdAt: "2023-02-10T08:20:45+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "h5ryujk_f5bj_6s89_fg5uSy",
    content:
      "Feels like a lazy Sunday in Metropolis. Might spend the day reading some old newspapers from the Daily Planet archives. 📰👓 #SundayVibes",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711600557/Screenshot_2024-03-28_100541_wgawh0.png",
    likes: {
      likeCount: 40,
      likedBy: [
        {
          _id: 4,
          firstName: "Barry",
          lastName: "Allen",
          username: "flash",
          createdAt: "2022-05-10T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 7,
          firstName: "Hal",
          lastName: "Jordan",
          username: "greenlantern",
          createdAt: "2022-11-05T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fy45g_hjks_7gi9_3thQwe",
        username: "flash",
        text: "Enjoy your lazy day, Superman! You deserve it.",
      },
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "greenlantern",
        text: "Don't forget to save some energy for when duty calls, Clark!",
      },
    ],
    username: "superman",
    createdAt: "2023-09-05T10:30:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e1e3ujk_f5bj_6s89_fg5uSy",
    content:
      "Had a race with The Flash today. Let's just say he's fast, but I'm faster! 💨⚡️ #SpeedsterShowdown",
    mediaURL: "https://c.tenor.com/cveY5YVBwTgAAAAd/tenor.gif",
    likes: {
      likeCount: 55,
      likedBy: [
        {
          _id: 3,
          firstName: "Oliver",
          lastName: "Queen",
          username: "greenarrow",
          createdAt: "2022-03-03T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 5,
          firstName: "Diana",
          lastName: "Prince",
          username: "wonderwoman",
          createdAt: "2022-07-12T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "greenarrow",
        text: "I'd pay to see that race! Must have been epic.",
      },
    ],
    username: "superman",
    createdAt: "2023-11-19T13:10:28+05:30",
    updatedAt: formatDate(),
  },
  // Oliver Queen's posts
  {
    _id: "g4g7ujk_f5bj_6s89_fg5uSy",
    content:
      "Green Arrow spotted taking down crime in Star City. Another day, another arrow! 🏹💚 #VigilanteLife",
    mediaURL:
      "https://pbs.twimg.com/media/FKhnihTVkAE6D2P?format=jpg&name=medium",
    likes: {
      likeCount: 60,
      likedBy: [
        {
          _id: 1,
          firstName: "Bruce",
          lastName: "Wayne",
          username: "batman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 6,
          firstName: "Arthur",
          lastName: "Curry",
          username: "aquaman",
          createdAt: "2022-09-18T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fr7k3j_dsh3_69g8_s7gkTt",
        username: "batman",
        text: "Keep Star City safe, Oliver! The League is proud of you.",
      },
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "aquaman",
        text: "Need any help underwater, Oliver? Just give me a call.",
      },
    ],
    username: "greenarrow",
    createdAt: "2023-01-25T11:55:30+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "g5h3ujk_f5bj_6s89_fg5uSy",
    content:
      "Just upgraded my arrows with some new tech. Let's see those bad guys try to outrun these! 💨🏹 #ArrowTech",
    mediaURL:
      "https://pbs.twimg.com/media/FKhnihTVkAE6D2P?format=jpg&name=medium",
    likes: {
      likeCount: 45,
      likedBy: [
        {
          _id: 2,
          firstName: "Clark",
          lastName: "Kent",
          username: "superman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 7,
          firstName: "Hal",
          lastName: "Jordan",
          username: "greenlantern",
          createdAt: "2022-11-05T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fy45g_hjks_7gi9_3thQwe",
        username: "flash",
        text: "Can't wait to see those arrows in action, Oliver!",
      },
    ],
    username: "greenarrow",
    createdAt: "2023-07-18T09:20:14+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "g1t7ujk_f5bj_6s89_fg5uSy",
    content:
      "Training with Black Canary today. Let's just say her Canary Cry still blows me away! 🥊💥 #TrainingDays",
    mediaURL:
      "https://pbs.twimg.com/media/FKhnihTVkAE6D2P?format=jpg&name=medium",
    likes: {
      likeCount: 50,
      likedBy: [
        {
          _id: 1,
          firstName: "Bruce",
          lastName: "Wayne",
          username: "batman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 4,
          firstName: "Barry",
          lastName: "Allen",
          username: "flash",
          createdAt: "2022-05-10T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fr7k3j_dsh3_69g8_s7gkTt",
        username: "batman",
        text: "You and Dinah make a great team, Oliver!",
      },
    ],
    username: "greenarrow",
    createdAt: "2023-04-03T13:40:32+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "g1r3ujk_f5bj_6s89_fg5uSy",
    content:
      "Visited Star City's new seafood restaurant. Let's just say they won't be inviting Aquaman anytime soon! 🐟🦑 #SeafoodLover",
    mediaURL:
      "https://pbs.twimg.com/media/FKhnihTVkAE6D2P?format=jpg&name=medium",
    likes: {
      likeCount: 48,
      likedBy: [
        {
          _id: 3,
          firstName: "Oliver",
          lastName: "Queen",
          username: "greenarrow",
          createdAt: "2022-03-03T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "aquaman",
        text: "Hey, I'm a fan of seafood too, Oliver!",
      },
    ],
    username: "greenarrow",
    createdAt: "2023-09-30T17:25:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e1w3ujk_f5bj_6s89_fg5uSy",
    content:
      "Just returned from a mission in the Amazon rainforest. The wildlife there is truly amazing! 🌿🦜 #RainforestAdventure",
    mediaURL:
      "https://pbs.twimg.com/media/FKhnihTVkAE6D2P?format=jpg&name=medium",
    likes: {
      likeCount: 42,
      likedBy: [
        {
          _id: 1,
          firstName: "Bruce",
          lastName: "Wayne",
          username: "batman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "aquaman",
        text: "Glad to see you back safe and sound, Oliver. Any cool souvenirs from the rainforest?",
      },
    ],
    username: "greenarrow",
    createdAt: "2023-06-05T14:55:19+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e1r3ujk_f5bj_6s89_fg5uSy",
    content:
      "Oliver Queen spotted at Star City's annual chili cook-off. Let's just say his taste buds are as sharp as his arrows! 🌶🏹 #ChiliLover",
    mediaURL:
      "https://pbs.twimg.com/media/FKhnihTVkAE6D2P?format=jpg&name=medium",
    likes: {
      likeCount: 55,
      likedBy: [
        {
          _id: 2,
          firstName: "Clark",
          lastName: "Kent",
          username: "superman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "aquaman",
        text: "You're making me hungry, Oliver!",
      },
    ],
    username: "greenarrow",
    createdAt: "2023-12-12T09:35:27+05:30",
    updatedAt: formatDate(),
  },
  // Barry Allen's posts
  {
    _id: "e1f3ujk_f5bj_6s89_fg5uSy",
    content:
      "Ran into Captain Cold on my morning jog. Let's just say he wasn't expecting me to be faster than his ice gun! ❄️🏃‍♂️ #SpeedsterProblems",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711600718/Screenshot_2024-03-28_100821_lr2h1t.png",
    likes: {
      likeCount: 38,
      likedBy: [
        {
          _id: 3,
          firstName: "Oliver",
          lastName: "Queen",
          username: "greenarrow",
          createdAt: "2022-03-03T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fr7k3j_dsh3_69g8_s7gkTt",
        username: "batman",
        text: "Always staying one step ahead, Barry! Keep up the good work.",
      },
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "greenarrow",
        text: "Guess Captain Cold couldn't handle the heat, huh?",
      },
    ],
    username: "flash",
    createdAt: "2023-02-15T07:20:59+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e1h3ujk_f5bj_6s89_fg5uSy",
    content:
      "Caught up with old friends at the Central City fair. Let's just say cotton candy tastes even better at super-speed! 🍭⚡️ #FairFun",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711601176/Screenshot_2024-03-28_101600_dly1vv.png",
    likes: {
      likeCount: 45,
      likedBy: [
        {
          _id: 4,
          firstName: "Barry",
          lastName: "Allen",
          username: "flash",
          createdAt: "2022-05-10T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fy45g_hjks_7gi9_3thQwe",
        username: "superman",
        text: "Glad to see you taking some time off, Barry. You deserve it.",
      },
    ],
    username: "flash",
    createdAt: "2023-10-30T14:15:40+05:30",
    updatedAt: formatDate(),
  },

  // Diana Prince's posts
  {
    _id: "g1e7ujk_f5bj_6s89_fg5uSy",
    content:
      "Visited Themyscira after a long absence. It's good to be home among my sisters. #Homecoming",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711602803/Screenshot_2024-03-28_104253_ow4ipx.png",
    likes: {
      likeCount: 50,
      likedBy: [
        {
          _id: 3,
          firstName: "Oliver",
          lastName: "Queen",
          username: "greenarrow",
          createdAt: "2022-03-03T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fr7k3j_dsh3_69g8_s7gkTt",
        username: "batman",
        text: "Glad to hear you're enjoying your time back on Themyscira, Diana.",
      },
    ],
    username: "wonderwoman",
    createdAt: "2023-03-20T15:25:35+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "g1y7ujk_f5bj_6s89_fg5uSy",
    content:
      "Explored the ancient ruins of Themyscira today. Every corner holds a piece of Amazon history. 🏛🌿 #AmazonPride",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711602541/Screenshot_2024-03-28_103816_n8nugu.png",
    likes: {
      likeCount: 55,
      likedBy: [
        {
          _id: 7,
          firstName: "Hal",
          lastName: "Jordan",
          username: "greenlantern",
          createdAt: "2022-11-05T10:15:12+05:30",
          updatedAt: "2024-03-28T08:12:42+05:30",
          followers: [
            {
              _id: 1,
              firstName: "Bruce",
              lastName: "Wayne",
              username: "batman",
              email: "brucewayne@waynecorp.com",
              password: "iambatman",
              bio: "The Dark Knight",
              website: "https://batman.com/",
              createdAt: "2022-01-31T10:15:12+05:30",
              updatedAt: formatDate(),
              followers: [],
              following: [],
              bookmarks: [],
              avatar:
                "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711418860/batman_pbnst5.png",
              backgroundImg:
                "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            },
          ],
          following: [
            {
              _id: 1,
              firstName: "Bruce",
              lastName: "Wayne",
              username: "batman",
              email: "brucewayne@waynecorp.com",
              password: "iambatman",
              bio: "The Dark Knight",
              website: "https://batman.com/",
              createdAt: "2022-01-31T10:15:12+05:30",
              updatedAt: formatDate(),
              followers: [],
              following: [],
              bookmarks: [],
              avatar:
                "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711418860/batman_pbnst5.png",
              backgroundImg:
                "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            },
          ],
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "hjykt6_dskj_5j2g_tki3rN",
        username: "greenlantern",
        text: "Sounds like an amazing experience, Diana!",
      },
    ],
    username: "wonderwoman",
    createdAt: "2023-06-29T11:15:54+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "d3rLk6hGj",
    content: "Throwback from Atlantis! OG Gang",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711601360/Screenshot_2024-03-28_101849_moab4e.png",
    likes: {
      likeCount: 8,
      likedBy: [
        {
          _id: 6,
          firstName: "Arthur",
          lastName: "Curry",
          username: "aquaman",
          createdAt: "2022-09-18T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 5,
          firstName: "Diana",
          lastName: "Prince",
          username: "wonderwoman",
          createdAt: "2022-07-12T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "aquaman",
    createdAt: "2023-04-01T10:15:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "s8nHj9fLt",
    content: "Batsy stole my Ring!!!!!  ",
    mediaURL:
      "https://i.pinimg.com/originals/fa/57/98/fa579864850eabe353211b25ff9b819c.gif",
    likes: {
      likeCount: 12,
      likedBy: [
        {
          _id: 7,
          firstName: "Hal",
          lastName: "Jordan",
          username: "greenlantern",
          createdAt: "2022-11-05T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 3,
          firstName: "Oliver",
          lastName: "Queen",
          username: "greenarrow",
          createdAt: "2022-03-03T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "greenlantern",
    createdAt: "2023-04-02T10:15:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "p2qYk5mNr",
    content: "Upgrading the Justice League's tech arsenal! 💻🔧 #Cyborg",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711602182/Screenshot_2024-03-28_103241_lqs6ki.png ",
    likes: {
      likeCount: 15,
      likedBy: [
        {
          _id: 8,
          firstName: "Victor",
          lastName: "Stone",
          username: "cyborg",
          createdAt: "2023-04-15T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 2,
          firstName: "Clark",
          lastName: "Kent",
          username: "superman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "cyborg",
    createdAt: "2023-04-03T10:15:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "m7lTb4oNp",
    content: "Just Brother Things!",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711601540/Screenshot_2024-03-28_102135_jnyia0.png",
    likes: {
      likeCount: 10,
      likedBy: [
        {
          _id: 1,
          firstName: "Bruce",
          lastName: "Wayne",
          username: "batman",
          createdAt: "2022-01-31T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 5,
          firstName: "Diana",
          lastName: "Prince",
          username: "wonderwoman",
          createdAt: "2022-07-12T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "aquaman",
    createdAt: "2023-04-05T10:15:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "g6dQs3tLv",
    content:
      "Patrolling the galaxy and keeping watch over!. #GuardiansOfTheUniverse",
    mediaURL:
      "https://64.media.tumblr.com/cc3cf5e5e28876e84ce39e1266121fce/tumblr_p6tdbolIx61xp88owo1_500.gif",
    likes: {
      likeCount: 14,
      likedBy: [
        {
          _id: 4,
          firstName: "Barry",
          lastName: "Allen",
          username: "flash",
          createdAt: "2022-05-10T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 6,
          firstName: "Arthur",
          lastName: "Curry",
          username: "aquaman",
          createdAt: "2022-09-18T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "greenlantern",
    createdAt: "2023-04-07T10:15:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "v9mWp8sKq",
    content:
      "Testing out new cybernetic enhancements for better combat efficiency! 💥 #TechUpgrades",
    mediaURL:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711602337/Screenshot_2024-03-28_103520_dhjsql.png",
    likes: {
      likeCount: 18,
      likedBy: [
        {
          _id: 3,
          firstName: "Oliver",
          lastName: "Queen",
          username: "greenarrow",
          createdAt: "2022-03-03T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
        {
          _id: 8,
          firstName: "Victor",
          lastName: "Stone",
          username: "cyborg",
          createdAt: "2023-04-15T10:15:12+05:30",
          updatedAt: "2024-03-28T08:45:11+05:30",
          followers: [],
          following: [],
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "cyborg",
    createdAt: "2023-04-09T10:15:12+05:30",
    updatedAt: formatDate(),
  },
];
