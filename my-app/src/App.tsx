import React from 'react';
import './App.css';
import { LogoReact } from './components/LogoReact';
import { TodoList } from './components/TodoList';


function App() {
  return (
    <div className="App">
      <LogoReact/>
      <TodoList/>
    </div>
  );
}

export default App;
