import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Dolan Docs",
  titleTemplate: "Dolan Docs",
  description: "A fast and easy-to-use blog system.",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Dolan",
    nav: [
      { text: "Guide", link: "/guide/what-is-dolan" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/dolan-x" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is dolan?", link: "/guide/what-is-dolan" },
        ],
      },
      {
        text: "Deploy",
        items: [
          { text: "Get started", link: "/deploy/get-started" },
        ],
      },
    ],
  },
});
