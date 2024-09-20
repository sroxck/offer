import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mts";
import navbar from "./navbar.mts";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Offer",
  description: "面试宝典",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navbar,

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
