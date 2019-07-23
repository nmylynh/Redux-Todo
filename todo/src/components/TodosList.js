import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class TodoList extends Component {

  render() {
    return (
        <div>
        <h1>To Dos</h1>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <div>
                  {todo}
              </div>
            );
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return { todos: state.todos}
};

export default connect(mapStateToProps, null)(TodoList);
