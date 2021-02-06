import * as React from 'react'

function AddTask ({onSubmit}) {
  const [title, setTitle] = React.useState('')

  return (
    <form onSubmit={(event) => {
      onSubmit(event)
      setTitle('')
    }}>
      <input type='text' id='title' value={title} onChange={event => setTitle(event.target.Value)} />
      <input type='submit' value='Add Task' />
    </form>
  )
}
export default AddTask