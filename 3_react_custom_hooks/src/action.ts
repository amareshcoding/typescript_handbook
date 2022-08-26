import axios, { AxiosResponse } from 'axios';

export type Post = {
  id: number;
  message: string;
};

export const getPosts = async (page: number = 1) => {
  let res: AxiosResponse<Post[]> = await axios.get(
    `http://localhost:8080/posts/${page}`
  );
  return res.data;
};
