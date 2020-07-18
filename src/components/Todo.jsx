import React from 'react';
// import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => {
  const icon = !completed ? 'far fa-circle light-grey' : 'fas fa-check-circle green'
  return(
      <li
        className="thin-grey-border ml-4 col-12 p-4 d-flex align-items-center"
        onClick={onClick}

      >
        <i className={`${icon} mr-4 fa-2x `}></i>
        <span
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          {text}
        </span>
      </li>
  )
}

export default Todo;
