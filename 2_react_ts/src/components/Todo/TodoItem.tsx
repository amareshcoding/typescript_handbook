import React from 'react';

type todoProps = {
  id: string;
  content: string;
  isDone: boolean;
};
const TodoItem = ({ content, isDone }: todoProps) => {
  return (
    <div>
      <h3>Content: {content}</h3>
      <h4>Status: {isDone}</h4>
      <button>toggle</button>
      <button>delete</button>
    </div>
  );
};

export default TodoItem;
