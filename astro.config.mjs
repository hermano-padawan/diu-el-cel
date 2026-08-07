import { defineConfig } from "astro/config";
import { copyFileSync, existsSync } from "node:fs";

const githubPages404 = {
  name: "github-pages-404",
  hooks: {
    "astro:build:done": ({ dir }) => {
      const source = new URL("404/index.html", dir);
      if (existsSync(source)) copyFileSync(source, new URL("404.html", dir));
    }
  }
};

export default defineConfig({
  site: "https://hermano-padawan.github.io",
  base: "/diu-el-cel",
  output: "static",
  trailingSlash: "always",
  integrations: [githubPages404]
});
