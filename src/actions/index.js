export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
    id: nextTodoId++
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    payload: {
      todoId: id,
      todoText: text
    }
  }
}
