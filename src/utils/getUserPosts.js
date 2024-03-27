export const getUserPosts = (posts, userProfile) =>
  posts?.filter((post) => post?.username === userProfile?.username);
