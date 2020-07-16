import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container mt-4 d-flex flex-wrap justify-content-center">
    <div className="col-12 d-flex justify-content-center">
      <AddTodo />
    </div>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;
