import { Context } from "@nuxt/types";

export default (context: Context) => {
  const user = context.store.state.user;

  if (!user) {
    context.redirect("/login");
  }
};
