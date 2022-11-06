import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todo/action.todo';

const TodoInput = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // alternate
  // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  //     const newValue = e.currentTarget.value;
  // }
  const saveTodo = () => {
    dispatch(
      addTodo({
        text: text,
        isDone: false,
        _id: 'id',
      })
    );
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="create new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={saveTodo}>ADD</button>
    </div>
  );
};

export default TodoInput;
