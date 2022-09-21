import React, { useEffect, useState } from 'react';
import { getTodos, Todo } from '../../actions/action';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>();
  useEffect(() => {
    getTodos().then((d) => {
      setTodos(d);
    });
  }, []);
  const addNewTodo = () =>{

  }
  return (
    <div>
      <h1>Todo App</h1>
     <TodoInput addNewTodo={addNewTodo}/>
      {todos?.map((e) => {
        return <TodoItem key={e.id} {...e} />;
      })}
    </div>
  );
};

export default TodoApp;
