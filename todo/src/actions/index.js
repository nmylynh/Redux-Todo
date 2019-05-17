
export const ADD_TODO = 'ADD_TODO';

let TodoId = 4

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: {
            id: TodoId++,
            task: todo,
            completed: false
        }
    }
}