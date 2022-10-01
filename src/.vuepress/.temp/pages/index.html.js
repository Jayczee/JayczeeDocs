export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"主页\",\"heroImage\":\"/logo.svg\",\"heroText\":\"Jayczee's 编程随笔\",\"tagline\":\"日常学习、工作的即时笔记。\",\"actions\":[{\"text\":\"开始阅读 💡\",\"link\":\"/contents/\",\"type\":\"primary\"},{\"text\":\"Java\",\"link\":\"/docs/java/\"},{\"text\":\"Vue\",\"link\":\"/docs/vue/\"},{\"text\":\"设计模式\",\"link\":\"/docs/design-pattern\"}],\"features\":[{\"title\":\"想啥记啥\",\"icon\":\"markdown\",\"details\":\"纠结过的东西统统记上,难题自己再解释一遍就能掌握\"},{\"title\":\"日积月累\",\"icon\":\"table\",\"details\":\"争取每周写至少两篇笔记,但不水\"},{\"title\":\"塘深且广\",\"icon\":\"tex\",\"details\":\"笔记有广度且有深度,不为了笔记篇数而水笔记\"},{\"title\":\"细致精干\",\"icon\":\"exercise\",\"details\":\"笔记尽量细致但不要有废话\"}],\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Jayczee's 编程笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.54,\"words\":162},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
