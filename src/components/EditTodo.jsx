import React from 'react';

const EditTodo = ({text}) => {
  return (
    <div>
      <form>
        <input type="text-area" value={text}/>
        <button>Update</button>
      </form>
    </div>
  )
}

export default EditTodo;
