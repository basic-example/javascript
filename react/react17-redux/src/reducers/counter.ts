import { AnyAction, CombinedState, Reducer } from "redux";
const INCREASE = "counter/increase" as const;
const DECREASE = "counter/decrease" as const;

export interface CountAction extends AnyAction {
  type: typeof INCREASE | typeof DECREASE;
  payload: number;
}

export type CountState = CombinedState<{
  count: number;
}>;

const counterReducer: Reducer<CountState, CountAction> = (
  state = { count: 1 },
  action
) => {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + action.payload,
      };
    case DECREASE:
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
