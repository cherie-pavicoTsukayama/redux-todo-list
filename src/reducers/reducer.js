import {
  VisibilityFilteres,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from '../actions';

//We'll start by specifying the initial state. Redux will call our reducer with
//an undefined state for the first time. This is our chance to return the initial
//state of our app:
const initialState = {
  visibilityFilter: VisibilityFilteres.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter };
    case ADD_TODO:
      return {...state, todos:[
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ]}
    case TOGGLE_TODO:
      return {...state, todos: state.todos.map((todo, index) => {
        if (index === action.index) {
          return {...todo, completed: !todo.completed}
          }
        return todo;
        })
      }
    default:
      return state
  }
}
