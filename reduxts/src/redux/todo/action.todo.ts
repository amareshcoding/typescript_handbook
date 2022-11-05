export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export type TodoType = {
  _id: string;
  text: string;
  isDone: boolean;
};
export const addTodo = (data: TodoType) => ({ type: ADD_TODO, payload: data });
export const deleteTodo = (_id: string) => ({ type: ADD_TODO, payload: _id });
export const toggleTodo = (_id: string) => ({ type: ADD_TODO, payload: _id });

// 	dispatch: Dispatch<ProjectDispatchHandler>
