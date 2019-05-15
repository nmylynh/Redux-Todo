import { combineReducers } from 'redux'
import todos from './TodosReducer'
import visibilityFilter from './FilterReducer'

export default combineReducers({
  todos,
  visibilityFilter
})