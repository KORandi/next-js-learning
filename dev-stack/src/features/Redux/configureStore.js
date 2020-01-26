import { createStore } from 'redux';
import rootReducer from './configureReducer';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
