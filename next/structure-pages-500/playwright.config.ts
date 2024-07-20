import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "npm run prod", // you’ll see a debug mode error page if `npm run dev`,
    url: "http://localhost:3000",
  },
});
