import React from 'react';
import Todos from './components/Todos';
import Todo from './model/todo';

import './App.css';

function App() {
  const todos=[
    new Todo('learn react'),
    new Todo('learn TypeScript')
  ]
  return (
    <div>
      <Todos items={todos }/>
    </div>
  );
}

export default App;
