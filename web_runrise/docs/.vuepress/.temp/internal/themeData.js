export const themeData = JSON.parse("{\"docsDir\":\"docs\",\"editLinkText\":\"编辑\",\"editLinkPattern\":\":repo\",\"docsRepo\":\"https://github.com/pangdadada/panda\",\"contributors\":false,\"lastUpdatedText\":\"更新时间\",\"lastUpdated\":true,\"navbar\":[{\"text\":\"远瑞云平台\",\"link\":\"/about/\"},{\"text\":\"AIGC应用集成\",\"children\":[\"AI知识库建设\",\"AI知识库\"]},{\"text\":\"开放API\",\"link\":\"/02.页面/10.HTML/111.md/\"},{\"text\":\"AIGC应用学院\",\"children\":[{\"text\":\"提示词\",\"link\":\"/about/11.md/\"},{\"text\":\"大模型\",\"link\":\"/about/22.md/\"},{\"text\":\"热门应用\",\"link\":\"/02.页面/20.CSS/02.md/\"},{\"text\":\"技术方案\",\"link\":\"/02.页面/20.CSS/03.md/\"}]},{\"text\":\"联系我们\",\"link\":\"/00/\"}],\"logo\":\"/images/111.png\",\"sidebar\":{\"/\":[{\"text\":\"远瑞创新云\",\"children\":[\"/README.md/\",\"/02.页面/20.CSS/07.md/\",\"/02.页面/20.CSS/05.md/\",\"/02.页面/20.CSS/06.md/\"]},{\"text\":\"API\",\"children\":[\"/01.前端/40.学习笔记/00.md/\",\"/01.前端/25.JavaScript文章/01.md/\",\"/01.前端/25.JavaScript文章/02.md/\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
