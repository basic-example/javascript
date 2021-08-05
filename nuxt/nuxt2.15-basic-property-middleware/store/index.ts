import { MutationTree } from "vuex";

export type RootState = ReturnType<typeof state>;
export type User = { name: string } | null;

export const state = () => ({
  user: null,
});

export const mutations: MutationTree<RootState> = {
  setUser(state: { user: User }, user: User) {
    state.user = user;
  },
};
