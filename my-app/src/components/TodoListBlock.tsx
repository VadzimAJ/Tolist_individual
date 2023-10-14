
type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  task: Array<TaskType>
  removeTask: () => void
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
          {props.task.map((task) => {
            return(
              <li className='todolist-task-elem' key={task.id}><input type='checkbox' 
              checked={task.isDone}/> 
              <span>{task.title}</span>
              <button onClick = {() => {
                alert ("click")
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