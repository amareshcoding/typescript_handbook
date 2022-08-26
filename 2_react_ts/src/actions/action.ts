import axios, { AxiosResponse } from 'axios';

export type Post = {
  id: number;
  message: string;
};
export const getPosts = async () => {
  try {
    const res: AxiosResponse<Post[]> = await axios.get('http://localhost:8080/posts');
    return res.data;
  } catch (e) {
    console.log('e: ', e);
  }
};
