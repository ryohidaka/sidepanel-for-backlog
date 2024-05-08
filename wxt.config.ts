import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import version from "vite-plugin-package-version";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "SidePanel for Backlog",
    permissions: ["sidePanel", "storage"],
    browser_specific_settings: {
      gecko: {
        id: "tech@hidaka.dev",
      },
    },
  },
  vite: () => ({
    plugins: [react(), tsconfigPaths(), version()],
  }),
});
