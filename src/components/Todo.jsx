import React from 'react';
import HandleChangeEditTodo from '../containers/EditTodo';

// import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text, deleteTodo, toggleEditMode, editMode, id}) => {
  const icon = !completed ? 'far fa-circle light-grey pointer' : 'fas fa-check-circle green pointer'

  const visibility = completed ? 'v-hidden' : ''

  const textBody = !editMode ? text  : <HandleChangeEditTodo id={id}/>

  const togglePencilOrUpdateButton = !editMode
    ? <i className={`fas fa-pencil-alt light-grey pointer green-hover pl-5 ${visibility}`}
         onClick={toggleEditMode}
      ></i>
    : <button
        className="btn btn-success ml-0 mr-3"
        onClick={toggleEditMode}>
          Update
      </button>

  return(
      <li className="thin-grey-border ml-4 col-12 p-4 mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center col-10 pl-0">
            <i className={`${icon} mr-4 fa-2x `}
              onClick={onClick}></i>
            <span
              className="col"
              style={{
                textDecoration: completed ? 'line-through' : 'none'
              }}
            >
              {textBody}
            </span>
          </div>
          <div className="col d-flex justify-content-between align-items-center p-0">
            {togglePencilOrUpdateButton}
            <i
              className="fas fa-trash-alt light-grey pointer red"
              onClick={deleteTodo}
            ></i>
          </div>
        </div>
      </li>
  )
}

export default Todo;
