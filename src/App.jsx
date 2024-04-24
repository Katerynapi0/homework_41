import React from 'react';
import './index.css';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <div className="card">
        <TodoList />
      </div>
      <p className="read-the-docs">
      </p>
    </>
  );
}

export default App;