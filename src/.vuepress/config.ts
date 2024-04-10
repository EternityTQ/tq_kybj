import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { addViteConfig } from "@vuepress/helper";
import postcssPresetEnv from "postcss-preset-env";
import { searchProPlugin } from "vuepress-plugin-search-pro";


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
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      autoSuggestions: false,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
