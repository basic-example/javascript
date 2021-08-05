import { Context } from "@nuxt/types";

export default (context: Context) => {
  const path = context.route.path;
  const user = context.store.state.user;

  if (path.startsWith("/user") && !user) {
    context.redirect("/login");
  }
};
