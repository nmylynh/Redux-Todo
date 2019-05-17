
export const ADD_TODO = 'ADD_TODO';

let TodoId = 4

export const addTodo = task => {
    return {
        type: ADD_TODO,
        payload: {
            id: TodoId++,
            task: task,
            completed: false
        }
    }
}