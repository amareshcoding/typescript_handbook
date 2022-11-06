import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, TodoType, toggleTodo } from '../../redux/todo/action.todo';

const TodoList = ({ _id, text, isDone }: TodoType) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4 style={{ display: 'inline' }}>{`${text} -`}</h4>
      <h4 style={{ display: 'inline' }}>
        {isDone ? ' completed' : ' pending'}
      </h4>

      <div>
        <button onClick={() => dispatch(toggleTodo(_id))}>TOOGLE</button>
        <button onClick={() => dispatch(deleteTodo(_id))}>DELETE</button>
      </div>
    </div>
  );
};

export default TodoList;
