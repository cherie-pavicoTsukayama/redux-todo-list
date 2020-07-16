import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo =({ dispatch }) => {
  let input

  return (
    <div className="col-9">
      <form
        className="d-flex"
        onSubmit={event => {
          event.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          className="col-9"
          placeholder="New Todo"
          ref={node => {
            input = node
          }}
        />
        <div className="col-3 p-0 d-flex justify-content-end">
          <button className="col-10 btn btn-primary montserrat-400"  type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
