import React from 'react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';
import '../src/scss/style.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';

function App() {
  return (
    <div className='container'>
      <Header />

      <div className='row my-5'>
        <div className='col-lg-5 col-md-7 col-10 mx-auto'>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;