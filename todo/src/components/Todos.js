import React from 'react'

const Todos = (props) => {
    const {todos} = props;
    const todosList = todos.map(todo => { 
        return (
            <div className='todo' key={todo.id}>
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

export default Todos;