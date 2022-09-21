import React from 'react';

type TodoItemProp = {
  id: number;
  content: string;
  isCompleted: boolean;
  toogleStatus: Function;
  deleteTodos: (id: number) => void;
};

const TodoItem = ({
  id,
  content,
  isCompleted,
  toogleStatus,
  deleteTodos,
}: TodoItemProp) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
    >
      <div>
        {content} - {isCompleted ? 'Done' : 'Not Done'}
      </div>
      <button onClick={() => toogleStatus(id)}>Toggle</button>
      <button onClick={() => deleteTodos(id)}>Delete</button>
    </div>
  );
};

export default React.memo(TodoItem);
