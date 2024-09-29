import { DefaultTheme } from "vitepress";
const basic: DefaultTheme.SidebarItem = {};
export default [
  {
    text: "指南",
    items: [{ text: "关于本站", link: "/about" }],
  },
  {
    text: "真实面试题",
    items: [{ text: "xx公司", link: "/really/1.md" }],
  },
  {
    text: "常规型面试题",
    items: [{ text: "通用", link: "/outher.md" }],
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
          { text: "esbuild", link: "/build/esbuild" },
          { text: "tsup", link: "/build/tsup" },
          { text: "rollup", link: "/build/rollup" },
          { text: "vite", link: "/build/vite" },
          { text: "webpack", link: "/build/webpack" },
          { text: "rspack", link: "/build/rspack" },
        ],
      },

      {
        text: "SSR",
        collapsed: true,
        link: "/ssr/nuxt",
      },
      {
        text: "Node框架",
        collapsed: true,
        items: [
          { text: "nest", link: "/backEnd/nest" },
          { text: "express", link: "/backEnd/express" },
        ],
      },
      {
        text: "小程序/移动端",
        collapsed: true,
        items: [
          { text: "小程序", link: "/moble/uniapp" },
          { text: "移动端", link: "/moble/h5" },
        ],
      },
      {
        text: "HTTP",
        collapsed: true,
        link: "/http/",
      },
      // {
      //   text: "第三方库",
      //   collapsed: true,
      //   items: [
      //     { text: "lodash", link: "/cli/base/" },
      //     { text: "moment", link: "/cli/pro/" },
      //     { text: "dayjs", link: "/cli/pro/" },
      //     { text: "date-fns", link: "/cli/pro/" },
      //   ],
      // },
    ],
  },
  {
    text: "源码篇",
    items: [
      { text: "Vue响应式原理", link: "/source/reactive.md" },
      { text: "Vue3原理", link: "/source/vue3.md" },
      { text: "Vue route原理", link: "/source/vuerouter.md" },
      { text: "pinia 原理", link: "/source/pinia.md" },
      { text: "vite 原理", link: "/source/vite.md" },
    ],
  },
  {
    text: "数据结构",
    items: [{ text: "通用", link: "/algo/struck.md" }],
  },
  {
    text: "算法",
    items: [{ text: "常用", link: "/algo/index.md" }],
  },
  {
    text: "人资",
    items: [{ text: "通用", link: "/hr" }],
  },
] satisfies DefaultTheme.Sidebar;
