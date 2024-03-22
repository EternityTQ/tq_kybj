import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "考研笔记",
  description: "zbh的考研笔记",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
