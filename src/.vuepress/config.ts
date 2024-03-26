import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { addViteConfig } from "@vuepress/helper";
import postcssPresetEnv from "postcss-preset-env";



export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "考研笔记",
  description: "zbh的考研笔记",

  theme,
  extendsBundlerOptions: (bundlerOptions, app) => {
    addViteConfig(bundlerOptions, app, {
      css: {
        postcss: {
          plugins: [postcssPresetEnv()],
        },
      },
    });
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
