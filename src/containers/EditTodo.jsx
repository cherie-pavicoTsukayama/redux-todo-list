import { connect } from 'react-redux';
import EditTodo from '../components/EditTodo';
import { editTodo } from '../actions';

const getSingleTodo = (todos, id) => {
  const todo = todos.filter(todo => todo.id === id);
  return todo[0];
}



const mapStateToProps = (state, ownProps) => {
  return {
    todo: getSingleTodo(state.todos, ownProps.id)
  }

}

const mapDispatchToPops = dispatch => ({
  editTodo: (id, text) => dispatch(editTodo(id, text))
})

const HandleChangeEditTodo = connect(mapStateToProps, mapDispatchToPops)(EditTodo)

export default HandleChangeEditTodo;
