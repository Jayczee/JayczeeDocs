import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  base: "/",

  dest: ".site",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Jayczee's 编程笔记",
      description: "日常学习、工作的代码即时笔记",
    }
  },


  theme,

  shouldPrefetch: false,

  plugins: [
    copyCodePlugin({
      // 插件选项
      duration: 1000,
      showInMobile: true,
    }),
  ],
});
