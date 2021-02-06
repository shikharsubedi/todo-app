import * as React from 'react'
import AddTask from './AddTask'
function App () {
  const [tasks, setTasks] = React.useState([])

  function onSubmit (event) {
    event.preventDefault()
    const title = event.target.title.value
    if (!title.trim()) {
      return
    }
    const current = { title, done: false }
    const newTasks = [...tasks, current]
    setTasks(newTasks)
  }

  function onChange (index, task) {
    const newTask = { ...task, done: !task.done }
    const newTasks = [...tasks]
    newTasks.splice(index, 1, newTask)
    setTasks(newTasks)
  }
  return (
    <div>
      <AddTask onSubmit={onSubmit} />
    <ul>
      {tasks.map((task, idx) => {
        const style = task.done ? { textDecoration: 'line-through' } : {}
        return (
          <li key={idx}>
            <input type='checkbox' checked={task.done} onChange={event => onChange(idx, task)} />
            <span style={style}>{task.title}</span>

          </li>
        )
      })}
    </ul>
    </div>
  )
}

export default App
