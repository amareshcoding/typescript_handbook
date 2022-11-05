import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import TodoComp from './components/TodoComp';
import TodoApp from './components/Todo/Todo';
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Button iconLeft={<AiFillCaretLeft />} iconRight={<AiFillCaretRight />}>
        Click me
      </Button>
      <Button size="xs">Click me</Button>
      <Button size="lg">Click me</Button>
      <Button size="md">Click me</Button>
      <Button size="sm">Click me</Button>
      {/* <TodoComp/> */}
      {/* <TodoApp/> */}
    </div>
  );
}

export default App;
