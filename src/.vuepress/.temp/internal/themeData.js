export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/\":[\"\",{\"icon\":\"discover\",\"text\":\"案例\",\"prefix\":\"contents/\",\"link\":\"contents/\",\"children\":\"structure\"},{\"text\":\"文档\",\"icon\":\"note\",\"prefix\":\"guide/\",\"children\":\"structure\"},{\"text\":\"Java\",\"prefix\":\"docs/java/\",\"children\":\"structure\"},{\"text\":\"Vue\",\"prefix\":\"docs/vue/\",\"children\":\"structure\"},{\"text\":\"设计模式\",\"prefix\":\"docs/design-pattern/\",\"children\":\"structure\"}]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Jayczee\",\"url\":\"http://localhost:8080\"},\"logo\":\"/logo.svg\",\"repo\":\"vuepress-theme-hope/vuepress-theme-hope\",\"docsDir\":\"contents/theme-docs/src\",\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"navbar\":[\"/\",{\"text\":\"案例\",\"icon\":\"discover\",\"link\":\"/contents/\"},{\"text\":\"指南\",\"icon\":\"creative\",\"prefix\":\"/guide/\",\"children\":[{\"text\":\"Bar\",\"icon\":\"creative\",\"prefix\":\"bar/\",\"children\":[\"baz\",{\"text\":\"...\",\"icon\":\"more\",\"link\":\"\"}]},{\"text\":\"Foo\",\"icon\":\"config\",\"prefix\":\"foo/\",\"children\":[\"ray\",{\"text\":\"...\",\"icon\":\"more\",\"link\":\"\"}]}]},{\"text\":\"V2 文档\",\"icon\":\"note\",\"link\":\"https://vuepress-theme-hope.github.io/v2/zh/\"}],\"footer\":\"A programmer coding in the night\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
