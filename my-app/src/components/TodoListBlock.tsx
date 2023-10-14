
type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId:number) => void
}

export const TodoListBlock = (props: PropsType) => {
  return (
    <div className='todolist-block'>
      <h1>{props.title}</h1>
      <div>
        <input/>
        <button>+</button>
      </div>
      <div>
        <ul className='todolist-task'>
          {props.tasks.map((task:TaskType) => {
            return(
              <li className='todolist-task-elem' key={task.id}>
                <input type='checkbox' checked={task.isDone}/> 
              <span>{task.title}</span>
              <button onClick = {() => {
                props.removeTask(task.id)
                console.log ("click")
              }}>✖️</button>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <button>ALL</button>
        <button>COMPLITE</button>
        <button>UNCOMPLITE</button>
      </div>
    </div>
  )
}