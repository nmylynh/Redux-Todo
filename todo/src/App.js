import React, { Component } from 'react';
import TodosList from './components/TodosList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <TodosList />
      </div>
    );
  }
}

export default App;