import React, { useEffect, useState } from 'react';
import { getTodos, patchTodos, postTodos, Todo } from '../../actions/action';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

type updateData = {
  id: string;
  content?: string;
  isDone?: boolean;
};
const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>();
  const [status, setStatus] = useState<boolean>(true);
  useEffect(() => {
    getTodos().then((d) => {
      setTodos(d);
    });
  }, [status]);
  const addNewTodo = (content: string) => {
    setStatus(!status);
    postTodos(content);
  };

  // const updateTodo = ( updateData: updateData) => {
  //   patchTodos(updateData)
  // };
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addNewTodo={addNewTodo} />
      {todos?.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default TodoApp;
