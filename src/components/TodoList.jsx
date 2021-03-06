import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo, toggleEditMode, editTodo }) => {


  function renderTodos () {
    if (todos.length === 0) {
      return <h4 className="text-center thin-grey-border ml-4 col-12 p-4">You have no todos</h4>
    } else {
      return (
        todos.map((todo, index) => (
            <Todo
              key={todo.id} {...todo}
              onClick={() => toggleTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
              toggleEditMode={() => toggleEditMode(todo.id)}
            />
          ))
      )

    }
  }
  return (

      <ul className='col-9'>
        {renderTodos()}
      </ul>
  )
}

export default TodoList;
