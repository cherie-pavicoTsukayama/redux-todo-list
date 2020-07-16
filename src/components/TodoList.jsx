import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
  console.log('todos:',todos)
  return (

    <ul className='col-9'>
      {todos.map((todo, index) => (
        <Todo key={todo.id + index} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>

)
      }

export default TodoList;
