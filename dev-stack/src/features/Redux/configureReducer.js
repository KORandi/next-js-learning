import { combineReducers } from 'redux';
import TodoListReducer from '../TodoList/TodoListReducer';

const rootReducer = combineReducers({
  TodoListReducer,
});

export default rootReducer;
