import React, { Component } from 'react'

export class TodoForm extends Component {
    state = {
        task: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
  render() {
    return (
      <div>
        <form onSubmit
      </div>
    )
  }
}

export default TodoForm;
