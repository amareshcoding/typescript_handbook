import React, { ChangeEvent, useState } from 'react';

type todoInputProps = {
  addNewTodo: Function;
};
const TodoInput = ({ addNewTodo }: todoInputProps) => {
  const [v, setV] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setV(e.target.value);
  };
  //e is SyntheticBaseEvent
  // e.FormEvent<HTMLFormElement>
  return (
    <div>
      <input type="text" value={v} onChange={onChange} />
      <button
        onClick={() => {
          addNewTodo(v);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
