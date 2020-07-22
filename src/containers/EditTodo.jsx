import { connect } from 'react-redux';
import EditTodo from '../components/EditTodo';

const getSingleTodo = (todos, id) => {
  const todo = todos.filter(todo => todo.id === id);
  return todo;
}



const mapStateToProps = (state, ownProps) => {
  return {
    todo: getSingleTodo(state.todos, ownProps.id)
  }

}

const mapDispatchToPops = dispatch => ({

})

const HandleChangeEditTodo = connect(mapStateToProps, mapDispatchToPops)(EditTodo)

export default HandleChangeEditTodo;
