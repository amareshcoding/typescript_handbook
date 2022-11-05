import axios, { AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';

export type Post = {
  id: number;
  message: string;
};
export const getPosts = async () => {
  try {
    const res: AxiosResponse<Post[]> = await axios.get(
      'http://localhost:8080/posts'
    );
    return res.data;
  } catch (e) {
    console.log('e: ', e);
  }
};

export type Todo = {
  id: string;
  content: string;
  isDone: boolean;
};
export const getTodos = async () => {
  try {
    const res: AxiosResponse<Todo[]> = await axios.get(
      'http://localhost:8080/todos'
    );
    return res.data;
  } catch (e) {
    console.log('e: ', e);
  }
};

export const postTodos = async (content: string) => {
  try {
    const res: AxiosResponse<Todo> = await axios.post(
      'http://localhost:8080/todos',
      {
        id: nanoid(),
        content: content,
        isDone: false,
      }
    );

    return res.data;
  } catch (e) {
    console.log('e: ', e);
  }
};

type patchTodo = {
  id?: string;
  content?: string;
  isDone?: boolean;
};
export const patchTodos = async (id: todoId, patchData: patchTodo) => {
  try {
    const res: AxiosResponse<Todo> = await axios.post(
      `http://localhost:8080/todos/${id}`,
      patchData
    );
    return res.data;
  } catch (e) {
    console.log('e: ', e);
  }
};

type todoId = {
  id: string;
};
export const removeTodos = async (id: todoId) => {
  try {
    const res: AxiosResponse<Todo> = await axios.delete(
      `http://localhost:8080/todos/${id}`
    );
    return res.data;
  } catch (e) {
    console.log('e: ', e);
  }
};
