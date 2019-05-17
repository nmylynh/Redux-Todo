import React from 'react'

const Todos = (props) => {
    const {todos} = props;
    const todosList = todos.map(todo => { 
        return (
            <div className='todo' key={todo.id}>
            <li>{todo.task} </li>  
            </div>
        )
    });

    return (
        <div className="todos-list">
        
       <ul>{todosList}</ul>
            
        </div>
    )
}

export default Todos;