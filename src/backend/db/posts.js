import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */
export const posts = [
  {
    _id: "sfgjuk_ftbj_6789_fghuSD",
    content:
      "I wrote a blog on how to become a master detective like Batman. Learn the techniques and strategies to solve crimes and protect Gotham City!",
    mediaURL:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1642133597037/ncb6j-yXx.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fyjksd_gb3j_37h8_fy7kBW",
        username: "superman",
        text: "Great post, Batman!",
      },
      {
        _id: "hjThfd_6jfY_49H3_ks5kAt",
        username: "greenarrow",
        text: "You're the best detective, Batman!",
      },
    ],
    username: "batman",
    createdAt: "2023-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "jdAd6u_gd8u_4g89_sHk3ED",
    content:
      "Learn how to fly faster than a speeding bullet with my guide to mastering super speed! 🚀💨",
    mediaURL:
      "https://wsrv.nl/?url=https%3A%2F%2Fcodedamn-blog.s3.amazonaws.com%2Fwp-content%2Fuploads%2F2023%2F06%2F16202913%2FpXaFJ3t0-5EHkPJfHlNK.png&w=1280&q=70&output=webp",
    likes: {
      likeCount: 23,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "gskytu_gdku_5789g_hsK4uRF",
        username: "flash",
        text: "Thanks for the tips, Superman!",
      },
    ],
    username: "superman",
    createdAt: "2022-03-12T10:35:21+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "gs5eubh_7hrk_6dg5_GfguQB",
    content: "Saving the world one arrow at a time. #GreenArrow 🏹",
    mediaURL:
      "https://pbs.twimg.com/media/FWLFxp-akAE2Zjr?format=jpg&name=900x900",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "greenarrow",
    createdAt: "2022-08-31T10:15:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "gdko7tg_hdJu_1298_gfkiDR",
    content: "Running at the speed of light! ⚡️ #TheFlash",
    mediaURL:
      "https://pbs.twimg.com/media/FRlqSRjaQAArhF8?format=jpg&name=small",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "flash",
    createdAt: "2022-03-12T11:25:24+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "gukRj5k_f5bj_6s89_fg5uSy",
    content: "Protecting the world with my super strength! 💪 #Superman",
    mediaURL:
      "https://pbs.twimg.com/media/FzoUwbmWwAM9uL7?format=jpg&name=small",
    likes: {
      likeCount: 17,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "fhy5d8_jr2K_17h8_jAk6BW",
        username: "batman",
        text: "Thanks for your support, Superman!",
      },
    ],
    username: "superman",
    createdAt: "2023-06-12T10:25:07+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "e5Hyswe_btry_5g06_fGrYH3dc",
    content:
      "Join me as I patrol the streets of Gotham, fighting crime and keeping the city safe! #Batman",
    mediaURL:
      "https://pbs.twimg.com/media/FKhnihTVkAE6D2P?format=jpg&name=medium",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "batman",
    createdAt: "2022-04-22T10:25:24+05:30",
    updatedAt: formatDate(),
  },
];
