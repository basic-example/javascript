import { MutationTree } from "vuex";

export const state = () => ({
  user: null,
});

export type RootState = ReturnType<typeof state>;
export type User = { name: string } | null;

export const mutations: MutationTree<RootState> = {
  setUser(state: { user: User }, user: User) {
    state.user = user;
  },
};
