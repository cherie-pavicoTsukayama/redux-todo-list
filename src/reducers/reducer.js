import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from '../actions';
import {combineReducers} from 'redux';

const { SHOW_ALL } = VisibilityFilters;

function todos(state =[], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
          id: action.id
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo;
      })
    case DELETE_TODO:
        const newState = state.filter(todo => todo.id !== action.payload);
        return newState;
      default:
        return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter: visibilityFilter,
  todos: todos
})

export default todoApp;
