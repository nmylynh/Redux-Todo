
const initialState = {
    todos: [
        {id: '1', task: 'learn redux', completed: false},
        {id: '2', task: 'learn redux-thunk', completed: false},
        {id: '3', task: 'learn middleware', completed: false}
    ]
}


export default (state=initialState, action) => {
    return state;
}