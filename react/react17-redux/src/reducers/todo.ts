import { AnyAction, CombinedState, Reducer } from "redux";
const ADD = "todo/add" as const;
const SHIFT = "todo/shift" as const;

export interface TodoAction extends AnyAction {
  type: typeof ADD | typeof SHIFT;
  payload: string;
}

export type TodoState = CombinedState<{
  list: Array<string>;
}>;

const todoReducer: Reducer<TodoState, TodoAction> = (
  state = { list: [] },
  action
) => {
  switch (action.type) {
    case ADD:
      return {
        list: [...state.list, action.payload],
      };
    case SHIFT:
      return {
        list: state.list.slice(1),
      };
    default:
      return state;
  }
};

export default todoReducer;
