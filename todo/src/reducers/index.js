import {ADD_TODO} from '../actions';

const initialState = [
        {id: '1', task: 'learn redux', completed: false},
        {id: '2', task: 'learn redux-thunk', completed: false},
        {id: '3', task: 'learn middleware', completed: false}
];

export default (state=initialState, action) => {
    // switch(action.type) {
    //     case ADD_TODO:
    //       return ...state 
    //     default:
    //     return state;
    // }
    return state;
}