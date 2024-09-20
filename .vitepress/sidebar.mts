import { DefaultTheme } from "vitepress";
const basic: DefaultTheme.SidebarItem = {};
export default [
  {
    text: "指南",
    items: [{ text: "关于本站", link: "/about" }],
  },
  {
    text: "基础阶段",
    items: [
      { text: "HTML", link: "/html/" },
      { text: "CSS", link: "/css/" },
      {
        text: "JS",
        collapsed: false,
        items: [
          { text: "基础", link: "/js/base/" },
          { text: "中级", link: "/js/advanced/" },
          { text: "高级", link: "/js/pro/" },
        ],
      },
    ],
  },
  {
    text: "中级阶段",
    items: [{ text: "关于本站", link: "/about" }],
  },
  {
    text: "高级阶段",
    items: [{ text: "关于本站", link: "/about" }],
  },
  {
    text: "源码篇",
    items: [{ text: "关于本站", link: "/about" }],
  },
  {
    text: "数据结构",
    items: [{ text: "关于本站", link: "/about" }],
  },
  {
    text: "算法",
    items: [{ text: "关于本站", link: "/about" }],
  },
  {
    text: "人资",
    items: [{ text: "关于本站", link: "/about" }],
  },
] satisfies DefaultTheme.Sidebar;
