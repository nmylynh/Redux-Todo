import React, { Component } from 'react'
import {connect} from 'react-redux';

export class TodosList extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
    return {
        id: state.id,
        task: state.task, 
        completed: state.completed
    }
} //you are telling the store what you want to get

export default connect(mapStateToProps)(TodosList); //connect to redux store
