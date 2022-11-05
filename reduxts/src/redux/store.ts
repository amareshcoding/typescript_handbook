import { legacy_createStore, combineReducers } from 'redux';
import { todoReducer } from './todo/reducer.todo';

const rootReducer = combineReducers({
  todo: todoReducer,
});
export const store = legacy_createStore(rootReducer);

export type RootReducer = ReturnType<typeof rootReducer>;