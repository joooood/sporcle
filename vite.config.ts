import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";
import { metablock } from "vite-plugin-userscript";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode !== "production";
  return {
    plugins: [preact(), !isDev && metablock()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      https: true as any,
    },
    build: {
      rollupOptions: {
        input: isDev
          ? path.resolve(__dirname, "src/dev-loader.js")
          : path.resolve(__dirname, "src/main.tsx"),
        output: {
          entryFileNames: "dorkle.user.js",
        },
      },
      minify: false,
    },
  };
});
