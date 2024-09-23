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
        collapsed: true,
        // link: "/html/",
        items: [
          { text: "基础", link: "/js/base/" },
          { text: "中级", link: "/js/mid/" },
          { text: "高级", link: "/js/pro/" },
        ],
      },
    ],
  },
  {
    text: "中级阶段",
    items: [
      {
        text: "Vue",
        collapsed: true,
        items: [
          { text: "基础", link: "/vue/base/" },
          { text: "中级", link: "/vue/mid/" },
          { text: "高级", link: "/vue/pro/" },
        ],
      },
      {
        text: "Node",
        collapsed: true,
        items: [
          { text: "基础", link: "/node/base/" },
          { text: "框架", link: "/node/mid/" },
          { text: "实践", link: "/node/pro/" },
        ],
      },
      {
        text: "工程化",
        collapsed: true,
        items: [
          { text: "基础", link: "/cli/base/" },
          { text: "高级", link: "/cli/pro/" },
        ],
      },
    ],
  },
  {
    text: "高级阶段",
    items: [
      {
        text: "构建",
        collapsed: true,
        items: [
          { text: "esbuild", link: "/vue/base/" },
          { text: "tsup", link: "/vue/base/" },
          { text: "rollup", link: "/vue/mid/" },
          { text: "vite", link: "/vue/pro/" },
          { text: "webpack", link: "/vue/pro/" },
          { text: "rspack", link: "/vue/pro/" },
          { text: "rsbuild", link: "/vue/pro/" },
        ],
      },
      {
        text: "插件开发",
        collapsed: true,
        items: [
          { text: "vite", link: "/node/base/" },
          { text: "rollup", link: "/node/mid/" },
          { text: "unplugin", link: "/node/pro/" },
        ],
      },
      {
        text: "Nuxt",
        collapsed: true,
        link: "/nuxt/",
      },
      {
        text: "Node框架",
        collapsed: true,
        items: [
          { text: "nest", link: "/cli/base/" },
          { text: "express", link: "/cli/pro/" },
        ],
      },
      {
        text: "小程序/移动端",
        collapsed: true,
        items: [
          { text: "小程序", link: "/cli/base/" },
          { text: "移动端", link: "/cli/pro/" },
        ],
      },
      {
        text: "动画专栏",
        collapsed: true,
        link: "/animation/",
      },
      {
        text: "第三方库",
        collapsed: true,
        items: [
          { text: "lodash", link: "/cli/base/" },
          { text: "moment", link: "/cli/pro/" },
          { text: "dayjs", link: "/cli/pro/" },
          { text: "date-fns", link: "/cli/pro/" },
        ],
      },
    ],
  },
  {
    text: "源码篇",
    items: [
      { text: "Vue响应式原理", link: "/about" },
      { text: "Vue双向绑定原理", link: "/about" },
      { text: "Vue route原理", link: "/about" },
      { text: "pinia 原理", link: "/about" },
    ],
  },
  {
    text: "数据结构",
    items: [{ text: "通用", link: "/about" }],
  },
  {
    text: "算法",
    items: [{ text: "常用", link: "/about" }],
  },
  {
    text: "人资",
    items: [{ text: "通用", link: "/hr" }],
  },
] satisfies DefaultTheme.Sidebar;
