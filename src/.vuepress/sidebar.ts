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
        prefix: "c01/",
        children: "structure",
        collapsible: true,
      },{
        text: "第2讲 数列极限",
        icon: "laptop-code",
        prefix: "c02/",
        children: "structure",
        collapsible: true,
      },{
        text: "第3讲 一元微分的概念",
        icon: "laptop-code",
        prefix: "c03/",
        children: "structure",
        collapsible: true,
      },{
        text: "第4讲 一元微分的计算",
        icon: "laptop-code",
        prefix: "c04/",
        children: "structure",
        collapsible: true,
      },{
        text: "第5讲 一元微分几何应用",
        icon: "laptop-code",
        prefix: "c05/",
        children: "structure",
        collapsible: true,
      },{
        text: "第6讲 一元微分公式应用",
        icon: "laptop-code",
        prefix: "c06/",
        children: "structure",
        collapsible: true,
      },{
        text: "第7讲 一元微分物理应用",
        icon: "laptop-code",
        prefix: "c07/",
        children: "structure",
        collapsible: true,
      },{
        text: "第8讲 一元积分的概念",
        icon: "laptop-code",
        prefix: "c08/",
        children: "structure",
        collapsible: true,
      },{
        text: "第9讲 一元积分的计算",
        icon: "laptop-code",
        prefix: "c09/",
        children: "structure",
        collapsible: true,
      },{
        text: "第10讲 一元积分几何应用",
        icon: "laptop-code",
        prefix: "c10/",
        children: "structure",
        collapsible: true,
      },{
        text: "第11讲 积分等式与不等式",
        icon: "laptop-code",
        prefix: "c11/",
        children: "structure",
        collapsible: true,
      },{
        text: "第12讲 一元积分物理应用",
        icon: "laptop-code",
        prefix: "c12/",
        children: "structure",
        collapsible: true,
      },{
        text: "第13讲 多元函数微分学",
        icon: "laptop-code",
        prefix: "c13/",
        children: "structure",
        collapsible: true,
      },{
        text: "第14讲 二重积分",
        icon: "laptop-code",
        prefix: "c14/",
        children: "structure",
        collapsible: true,
      },{
        text: "第15讲 微分方程",
        icon: "laptop-code",
        prefix: "c15/",
        children: "structure",
        collapsible: true,
      },{
        text: "第16讲 无穷级数",
        icon: "laptop-code",
        prefix: "c16/",
        children: "structure",
        collapsible: true,
      },{
        text: "第17讲 多元积分预备知识",
        icon: "laptop-code",
        prefix: "c17/",
        children: "structure",
        collapsible: true,
      },{
        text: "第18讲 多元函数积分学",
        icon: "laptop-code",
        prefix: "c18/",
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
  
  }
  ],
  "/408/": [
    {
      text: "数据结构",
      icon: "book",
      prefix: "Data_Structure/",
      children: [
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
        {
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
      },{
        text: "第七章 查找",
        icon: "laptop-code",
        prefix: "c7/",
        children: "structure",
        collapsible: true,
      },{
        text: "第八章 排序",
        icon: "laptop-code",
        prefix: "c8/",
        children: "structure",
        collapsible: true,
      }
    ],
      collapsible: true,
    },
    {
      text: "操作系统",
      icon: "book",
      prefix: "Operating_Systems/",
      children: [{
        text: "第一章 计算机系统概述",
        icon: "laptop-code",
        prefix: "c1/",
        children: "structure",
        collapsible: true,
      }],
      collapsible: true,
    },
    {
      text: "计算机组成原理",
      icon: "book",
      prefix: "Computer_Organization_and_Architecture/",
      children: [{
        text: "第一章 计算机系统概述",
        icon: "laptop-code",
        prefix: "c1/",
        children: "structure",
        collapsible: true,
      },{
        text: "第二章 数据的表示与运算",
        icon: "laptop-code",
        prefix: "c2/",
        children: "structure",
        collapsible: true,
      },{
        text: "第三章 存储系统",
        icon: "laptop-code",
        prefix: "c3/",
        children: "structure",
        collapsible: true,
      },{
        text: "第四章 指令系统",
        icon: "laptop-code",
        prefix: "c4/",
        children: "structure",
        collapsible: true,
      },{
        text: "第五章 中央处理器",
        icon: "laptop-code",
        prefix: "c5/",
        children: "structure",
        collapsible: true,
      },{
        text: "第六章 总线",
        icon: "laptop-code",
        prefix: "c6/",
        children: "structure",
        collapsible: true,
      },{
        text: "第七章 I/O系统",
        icon: "laptop-code",
        prefix: "c7/",
        children: "structure",
        collapsible: true,
      },
    ],
      collapsible: true,
    },
    {
      text: "计算机网络",
      icon: "book",
      prefix: "Computer_Network/",
      children: "structure",
      collapsible: true,
    },
  ],
});
