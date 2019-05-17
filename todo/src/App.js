import React, { Component } from 'react';
import Todos from './components/Todos';
import {connect} from 'react-redux';

export class App extends Component {
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

mapStateToProps = (state) => {
  return {
    id: state.id,
    task: state.task, 
    completed: state.completed
  }
}

export default connect(mapStateToProps)(App);
