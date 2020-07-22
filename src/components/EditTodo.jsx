import React from 'react';

const EditTodo = ({todo, id, editTodo}) => {

  return (
    <div>
      <form>
        <input type="text-area" value={todo.text} onChange={(event) => editTodo(id, event.target.value)}/>
        <button>Update</button>
      </form>
    </div>
  )
}

export default EditTodo;
