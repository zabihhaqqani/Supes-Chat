import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
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
  {
    _id: 2,
    firstName: "Clark",
    lastName: "Kent",
    username: "superman",
    email: "clarkkent@dailyplanet.com",
    password: "manofsteel",
    bio: "The Man of Steel",
    website: "https://superman.com/",
    createdAt: "2022-01-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711419456/Screenshot_2024-03-26_074718_tsco6q.png",
    backgroundImg:
      "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
  },
  // {
  //   _id: 3,
  //   firstName: "Oliver",
  //   lastName: "Queen",
  //   username: "greenarrow",
  //   email: "oliverqueen@queenindustries.com",
  //   password: "arrow123",
  //   bio: "The Emerald Archer",
  //   website: "https://greenarrow.com/",
  //   createdAt: "2022-03-03T10:15:12+05:30",
  //   updatedAt: formatDate(),
  //   bookmarks: [],
  //   avatar:
  //     "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711419376/Screenshot_2024-03-26_031913_md91lv.png",
  //   backgroundImg:
  //     "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
  // },
  {
    _id: 4,
    firstName: "Barry",
    lastName: "Allen",
    username: "flash",
    email: "barryallen@centralcity.com",
    password: "speedster",
    bio: "The Fastest Man Alive",
    website: "https://flash.com/",
    createdAt: "2022-05-10T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711419365/Screenshot_2024-03-26_074547_hy9c52.png",
    backgroundImg:
      "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
  },

  {
    _id: 5,
    firstName: "Diana",
    lastName: "Prince",
    username: "wonderwoman",
    email: "dianaprince@themyscira.com",
    password: "amazon123",
    bio: "The Amazon Princess",
    website: "https://wonderwoman.com/",
    createdAt: "2022-07-12T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711419777/Screenshot_2024-03-26_075116_ii1a5a.png",
    backgroundImg:
      "https://fastly.picsum.photos/id/30/4000/2667.jpg?hmac=5ZP59UlxQwAgcX8FqR-f4iNS-5Dg4HmL4wpEnthj0C0",
  },
  {
    _id: 6,
    firstName: "Arthur",
    lastName: "Curry",
    username: "aquaman",
    email: "arthurcurry@atlantis.com",
    password: "oceanKing",
    bio: "The King of Atlantis",
    website: "https://aquaman.com/",
    createdAt: "2022-09-18T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711419779/Screenshot_2024-03-26_075223_exelvl.png",
    backgroundImg:
      "https://fastly.picsum.photos/id/40/2500/1667.jpg?hmac=DEjDWT7qAWVRZDkZoVEMsTHB0NlELIG54wERI-r3E-w",
  },
  {
    _id: 7,
    firstName: "Hal",
    lastName: "Jordan",
    username: "greenlantern",
    email: "haljordan@ferrisair.com",
    password: "willpower",
    bio: "The Green Lantern",
    website: "https://greenlantern.com/",
    createdAt: "2022-11-05T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711419778/Screenshot_2024-03-26_075152_lmeqyn.png",
    backgroundImg:
      "https://fastly.picsum.photos/id/50/2500/1667.jpg?hmac=DK0bWVdTRTJ-l8fBO9Tru0ht8Jm4ZzQajkDMheE4h6E",
  },

  {
    _id: 8,
    firstName: "Victor",
    lastName: "Stone",
    username: "cyborg",
    email: "victorstone@starlabs.com",
    password: "techman",
    bio: "The Cyborg",
    website: "https://cyborg.com/",
    createdAt: "2023-04-15T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar:
      "https://res.cloudinary.com/ddaygqgu3/image/upload/v1711419778/Screenshot_2024-03-26_075204_bv4b3c.png",
    backgroundImg:
      "https://fastly.picsum.photos/id/70/2500/1667.jpg?hmac=DUVczlk-CXeOT3yZ7yZZFZqzq-guOaD_54OuP6T8nVY",
  },
];
