import React, { useEffect, useState } from 'react';
import { getPosts, Post } from '../actions/action';

const Todo = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPosts().then((d) => {
      console.log('d: ', d);
     //  setPosts(d);
    });
  }, []);
  //   console.log('posts: ', posts);
  return (
    <div>
      <h1>Todo</h1>
      {posts.map((e) => (
        <h1 key={e.id}>{e.message}</h1>
      ))}
    </div>
  );
};

export default Todo;
