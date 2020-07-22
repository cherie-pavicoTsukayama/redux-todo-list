import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, toggleEditMode } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  toggleEditMode: id => dispatch(toggleEditMode(id)),
});


const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
