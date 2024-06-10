import { v4 as uuid } from "uuid";
import { IPost } from "../types";
export const generatePosts = (numPosts: number): Array<IPost> => {
  const posts: Array<IPost> = [];
  for (let i = 0; i < numPosts; i++) {
    posts.push({
      id: uuid(),
      title: `Post Title ${i + 1}`,
      content: `This is the content for post ${
        i + 1
      }. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    });
  }
  return posts;
};
