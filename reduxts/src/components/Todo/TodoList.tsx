import React from 'react';
import { TodoType } from '../../redux/todo/action.todo';

const TodoList = ({ text, isDone }: TodoType) => {
  return (
    <div>
      <h3>Content: {text}</h3>
      <h4>Status: {isDone}</h4>
      <button>toggle</button>
      <button>delete</button>
    </div>
  );
};

export default TodoList;
