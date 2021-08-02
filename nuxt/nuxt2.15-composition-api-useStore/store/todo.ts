import { ActionTree, GetterTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  list: [],
});

export type TodoState = ReturnType<typeof state>;

export const getters: GetterTree<TodoState, RootState> = {
  list: (state) => state.list,
};

export const mutations: MutationTree<TodoState> = {
  add(state: { list: Array<string> }, todo: string) {
    state.list = [...state.list, todo];
  },
};

export const actions: ActionTree<TodoState, RootState> = {
  add({ commit }, todo: string) {
    commit("add", todo);
  },
};
