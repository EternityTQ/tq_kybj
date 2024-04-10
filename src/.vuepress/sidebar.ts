import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/math/": [
    {
      text: "高等数学",
      icon: "book",
      prefix: "gaoshu/",
      children: [{
        text: "错题集",
        icon: "book",
        link: "ctz",
        collapsible: true,

      },{
        text: "公式合集",
        icon: "screwdriver-wrench",
        link: "tools",
        collapsible: true,

      },{
        text: "第1讲 函数极限与连续",
        icon: "laptop-code",
        prefix: "c1/",
        children: "structure",
        collapsible: true,
      },{
        text: "第2讲 数列极限",
        icon: "laptop-code",
        prefix: "c2/",
        children: "structure",
        collapsible: true,
      },{
        text: "第3讲 一元微分学的概念",
        icon: "laptop-code",
        prefix: "c3/",
        children: "structure",
        collapsible: true,
      },{
        text: "第4讲 一元微分学的计算",
        icon: "laptop-code",
        prefix: "c4/",
        children: "structure",
        collapsible: true,
      },{
        text: "第5讲 一元微分学几何应用",
        icon: "laptop-code",
        prefix: "c5/",
        children: "structure",
        collapsible: true,
      },{
        text: "第5讲 一元微分学三大应用",
        icon: "laptop-code",
        prefix: "c6/",
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
    text: "笔记本",
    icon: "laptop-code",
    prefix: "notebooks/",
    children: "structure",
    collapsible: true,
  
  },{      
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
  },{
    text: "句句真研",
    icon: "book",
    prefix: "Sentences/",
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
      },{
        text: "第六章 图",
        icon: "laptop-code",
        prefix: "c6/",
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
