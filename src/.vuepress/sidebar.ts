import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/math/": [
    {
      text: "目录",
      icon: "laptop-code",
      prefix: "math/",
      link: "README",
      children: [
        {
          text: "高等数学",
          icon: "book",
          prefix: "gaoshu/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "线性代数",
          icon: "book",
          prefix: "xiandai/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "概率论",
          icon: "book",
          prefix: "gailv/",
          children: "structure",
          collapsible: true,
        },
      ],
    },
  ],
  "/political/": [
    {
      text: "目录",
      icon: "laptop-code",
      prefix: "political/",
      link: "README",
      children:"structure",
    }
  ],
  "/english/": [
    {
      text: "目录",
      icon: "laptop-code",
      prefix: "english/",
      link: "README",
      children:"structure",
    }
  ],
  "/408/": [
    {
      text: "目录",
      icon: "laptop-code",
      prefix: "408/",
      link: "README",
      children: [
        {
          text: "数据结构",
          icon: "book",
          prefix: "sjjg/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "操作系统",
          icon: "book",
          prefix: "czzt/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "计算机组成原理",
          icon: "book",
          prefix: "jsjyl/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "计算机网络",
          icon: "book",
          prefix: "jsjwl/",
          children: "structure",
          collapsible: true,
        },
      ],
    },
  ],
});
