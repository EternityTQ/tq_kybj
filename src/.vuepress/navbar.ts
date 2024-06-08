import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "考研数学",
    icon: "lightbulb",
    prefix: "math/",
    children: [
      {
        text: "高数",
        icon: "lightbulb",
        link: "gaoshu/",
      },
      {
        text: "线代",
        icon: "lightbulb",
        link: "xiandai/",
      },
      {
        text: "概率论",
        icon: "lightbulb",
        link: "gailvlun/",
      },
    ],
  },
  {
    text: "考研政治",
    icon: "lightbulb",
    link: "/political/",
  },
  {
    text: "考研英语",
    icon: "lightbulb",
    link: "/english/",
  },
  {
    text: "考研408",
    icon: "lightbulb",
    prefix: "/408/",
    children: [
      {
        text: "数据结构",
        icon: "lightbulb",
        link: "Data_Structure/",
      },
      {
        text: "操作系统",
        icon: "lightbulb",
        link: "Operating_Systems/",
      },
      {
        text: "计算机组成原理",
        icon: "lightbulb",
        link: "Computer_Organization_and_Architecture/",
      },
      {
        text: "计算机网络",
        icon: "lightbulb",
        link: "Computer_Network/",
      },
    ],
  },
]);
