import React from 'react';

type todoProps = {
  id: number;
  content: string;
  isDone: boolean;
};
const TodoItem = ({ content, isDone }: todoProps) => {
  return (
    <div>
      <h3>{content}</h3>
      <h4>Status: {isDone}</h4>
      <button>toggle</button>
      <button>delete</button>
    </div>
  );
};

export default TodoItem;
