import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/math/": [
    {
      text: "高等数学",
      icon: "book",
      prefix: "gaoshu/",
      children: [{
        text: "公式合集",
        icon: "screwdriver-wrench",
        link: "tools",
        collapsible: true,

      },{
        text: "第一章 函数极限与连续",
        icon: "laptop-code",
        prefix: "c1/",
        children: "structure",
        collapsible: true,
      },{
        text: "第二章 数列极限",
        icon: "laptop-code",
        prefix: "c2/",
        children: "structure",
        collapsible: true,
      },
    ],
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
  "/political/": [
    {
      text: "目录",
      icon: "laptop-code",
      prefix: "political/",
      children:"structure",
    }
  ],
  "/english/": [
    {
      
        text: "单词方法论",
        icon: "laptop-code",
        prefix: "Methodology/",
        children: "structure",
        collapsible: true,
      
    },{
      
      text: "每日核心词",
      icon: "book",
      prefix: "daily_words/",
      children: "structure",
      collapsible: true,
    
  },
  ],
  "/408/": [
    {
      text: "数据结构",
      icon: "book",
      prefix: "sjjg/",
      children: [{
        text: "第一章 绪论",
        icon: "laptop-code",
        prefix: "c1/",
        children: "structure",
        collapsible: true,
      },{
        text: "第二章 线性表",
        icon: "laptop-code",
        prefix: "c2/",
        children: "structure",
        collapsible: true,
      },{
        text: "第三章 栈、队列与数组",
        icon: "laptop-code",
        prefix: "c3/",
        children: "structure",
        collapsible: true,
      },{
        text: "第四章 串",
        icon: "laptop-code",
        prefix: "c4/",
        children: "structure",
        collapsible: true,
      },{
        text: "第五章 树与二叉树",
        icon: "laptop-code",
        prefix: "c5/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "错题集",
        icon: "book",
        link: "ctz",
      },
      {
        text: "算法题",
        icon: "book",
        link: "sft",
      },
      {
        text: "习题本",
        icon: "book",
        link: "xtb",
      },
    ],
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
});
