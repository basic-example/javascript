import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "npm run prod",
    url: "http://localhost:3000",
  },
});
