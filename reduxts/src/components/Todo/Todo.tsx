import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../redux/store';
import { TodoType } from '../../redux/todo/action.todo';

const Todo = () => {
  const { todos = [] } = useSelector((store: RootReducer) => store.todo);
  console.log('todos: ', todos);
  return (
    <div>
      Todo
      <TodoInput />
      {todos.map(
        (todo: TodoType): React.ReactNode => (
          <TodoList
            key={todo._id}
            _id={todo._id}
            text={todo.text}
            isDone={todo.isDone}
          />
        )
      )}
    </div>
  );
};

export default Todo;
