export const siteData = JSON.parse("{\"base\":\"/docs/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"远瑞创新云|AI慧办公|AI问政策\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/favicon.ico\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/custom.css\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
