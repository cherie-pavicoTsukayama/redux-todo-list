import React from 'react';
// import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => {
  return(
    <li
      className="thin-grey-border"
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )
}

export default Todo;
