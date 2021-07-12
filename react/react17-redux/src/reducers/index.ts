import { combineReducers, Reducer } from "redux";
import counter from "./counter";
import todo from "./todo";

const rootReducer = combineReducers({
  counter,
  todo,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = typeof rootReducer extends Reducer<RootState, infer A>
  ? A
  : never;

export default rootReducer;
