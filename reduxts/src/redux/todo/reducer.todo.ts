import { ADD_TODO, DELETE_TODO, TodoType, TOGGLE_TODO } from './action.todo';

type ActionType = {
  type: string;
  payload: TodoType | string;
};
type inStateType = {
  todos: TodoType[];
};
const initialState = {
  todos: [],
};
export const todoReducer = (
  state: inStateType = initialState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case DELETE_TODO: {
      let updateTodo: TodoType[] = state.todos.filter(
        (todo: TodoType) => todo._id !== payload
      );
      return {
        ...state,
        todos: updateTodo,
      };
    }
    case TOGGLE_TODO: {
      let updateTodo: TodoType[] = state.todos.map((todo: TodoType) => {
        if (todo._id === payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      return {
        ...state,
        todos: updateTodo,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
