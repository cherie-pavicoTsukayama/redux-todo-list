import React from 'react';
// import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => {
  const icon = !completed ? 'far fa-circle light-grey pointer' : 'fas fa-check-circle green pointer'
  return(
      <li
        className="thin-grey-border ml-4 col-12 p-4 mb-3 "


      >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center col-10 pl-0">
          <i className={`${icon} mr-4 fa-2x `}
            onClick={onClick}></i>
          <span
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}
          >
            {text}
          </span>
        </div>
        <div className="col d-flex justify-content-between">
          <i className="fas fa-pencil-alt light-grey pointer green-hover"></i>
          <i className="fas fa-trash-alt light-grey pointer red"></i>
        </div>
        </div>

      </li>
  )
}

export default Todo;
