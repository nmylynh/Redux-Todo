import React, { Component } from 'react'
import {connect} from 'react-redux';

const Todos = (props) => {
    const {todos} = props;
    const todosList = todos.map(todo => { 
        return (
            <div className='todo' key='{todo.id}'>
            {todo.task}   
            </div>
        )
    });

    return (
        <div className="todos-list">
            {todosList}
        </div>
    )
}



const mapStatetoProps = (state) => {
    return {
        id: state.id,
        task: state.task, 
        completed: state.completed
    }
} //you are telling the store what you want to get

export default connect(mapStateToProps)(Todos); //connect to redux store
