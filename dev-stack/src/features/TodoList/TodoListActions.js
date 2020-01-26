import { ADD_TODO, DELETE_TODO } from '../../constants/ActionTypes';

export function addTask(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export function deleteTask(payload) {
  return {
    type: DELETE_TODO,
    payload,
  };
}

export function f() {

}
