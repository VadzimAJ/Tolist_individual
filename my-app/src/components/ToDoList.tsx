import React from 'react';
import { TodoListBlock } from './TodoListBlock'

const task = [
  {id: 1, title: "HTML&CSS", isDone: true},
  {id: 2, title: "JS", isDone: true},
  {id: 3, title: "React", isDone: false},
]

export const TodoList = () => {
  return (
    <main className='todolist'>
      <div>
        <button><span>ADD TASK</span></button>
      </div>
      <div className='todolist-container'>
        <TodoListBlock title='What to learn' task={task}/>
      </div>
      
    </main>
    
    );
}