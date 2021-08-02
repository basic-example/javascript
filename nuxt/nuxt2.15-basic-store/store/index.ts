import { ActionTree, GetterTree, MutationTree } from "vuex";

export const state = () => ({
  counter: 0,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  doubleCount(state, getters) {
    return state.counter * getters.two;
  },
  two() {
    return 2;
  },
};

export const mutations: MutationTree<RootState> = {
  increment(state: { counter: number }, count: number) {
    state.counter = state.counter + count;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  increment({ commit }, count: number) {
    commit("increment", count);
  },
};
