import React, { useState } from 'react';
import { TodoListBlock } from './TodoListBlock'



export const TodoList = () => {

  let [tasks, setTasks] = useState([
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
  ])
  
  function removeTask(id: number) {
    let filteredTask = tasks.filter(task => task.id !== id)
    setTasks(filteredTask)
  }

  return (
    <main className='todolist'>
      <div>
        <button><span>ADD TASK</span></button>
      </div>
      <div className='todolist-container'>
        <TodoListBlock title='What to learn'
                       tasks={tasks}
                       removeTask={removeTask}
        />
      </div>
      
    </main>
    
    );
}