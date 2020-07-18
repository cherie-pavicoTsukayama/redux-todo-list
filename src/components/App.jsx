import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container mt-5">
    <div className="d-flex align-items-center justify-content-between">
      <h2 className="m-0 montserrat-900"
      >
        Todo-Redux
      </h2>
      <AddTodo />
    </div>

    <div className="d-flex justify-content-between mt-3">
      <Footer />
      <VisibleTodoList />
    </div>


  </div>
)

export default App;
