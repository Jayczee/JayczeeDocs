export const data = JSON.parse("{\"key\":\"v-2fe617e4\",\"path\":\"/docs/vue/\",\"title\":\"Vue小记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Vue小记\",\"icon\":\"vue\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/docs/vue/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Jayczee's 编程笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Vue小记\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":6},\"filePathRelative\":\"docs/vue/README.md\"}")

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
