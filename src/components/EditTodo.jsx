import React from 'react';

const EditTodo = ({todo, id, editTodo}) => {

  return (
    <div>
      <form>
        <textarea
          type="text-area"
          className="form-control"
          value={todo.text}
          onChange={(event) => editTodo(id, event.target.value)}
        />
      </form>
    </div>
  )
}

export default EditTodo;
