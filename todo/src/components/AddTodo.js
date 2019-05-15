import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from '../actions/index'
export class AddTodo extends Component {
    state = {
        todo:'',
    }

   handleChange = e => {
        this.setState({
            todo: e.target.value
        })
    }

  submitTodo = e => {
    e.preventDefault();
    console.log(e);
    this.props.addTodo(this.state.todo);

    this.setState({todo: ''});
  }

  render() {
    return (
      <div>
      <input 
      onChange={this.handleChange} 
      value={this.state.todo} 
      type="text" 
      placeholder="Add your task here" />

      <button onClick={this.submitTodo}>Add Task</button>
        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTodo)