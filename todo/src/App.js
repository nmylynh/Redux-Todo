import React, { Component } from 'react';
import Todos from './components/Todos';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    console.log(this.props.todos)
    return (
      <div>
        <Todos todos={this.props.todos} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
