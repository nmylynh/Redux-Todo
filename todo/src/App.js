import React, { Component } from 'react';
import TodosList from './components/TodosList';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <TodosList />
      <AddTodo />
      </div>
    );
  }
}

export default App;