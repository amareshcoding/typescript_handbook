import React, { ChangeEvent, useState } from 'react';

const TodoInput = () => {
  const [text, setText] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // alternate
  // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  //     const newValue = e.currentTarget.value;
  // }
  

  return (
    <div>
      Add Todo
      <input type="text" value={text} onChange={(e) => onChange(e)} />
      <button>ADD</button>
    </div>
  );
};

export default TodoInput;
