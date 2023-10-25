import { UserConfig, defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";






export default defineUserConfig({


  plugins:[

    copyCodePlugin({

    }),
  ],

    base: '/docs/',
    lang: 'zh-CN',
    // title: '远瑞创新云',
    description: '远瑞创新云|AI慧办公|AI问政策',
    head: [
      ['link', { rel: 'icon', href: '/images/favicon.ico' }],
      // ['style', { type: 'text/css'}, '.navbar-items-wrapper{ left : 200px }  .navbar-items-wrapper .navbar-items .navbar-item:last-child { margin-left : 1000px}' ],
      // ['style', { type: 'text/css'}, '.navbar .title,.navbar-item {color:#007bff}' ],
      ['link',{ rel:'stylesheet',href:'/custom.css'}]
      
    ],
  
   
    theme: defaultTheme({  
      
      docsDir:'docs',
        // repo: 'https://github.com/panda/blog',
        // repoLabel: 'Github',
        // editLink: true,
        editLinkText: '编辑',
        editLinkPattern:':repo',
         docsRepo:'https://github.com/pangdadada/panda',
        //  贡献者列表禁用
         contributors: false,

        // lastUpdated: 'Last Updated',
        lastUpdatedText: '更新时间',
        lastUpdated: true,

        navbar: [
          {
            text: '远瑞云平台',
            link: '/about/',
            
          },
          {
            text: 'AIGC应用集成',
            children: ['AI知识库建设','AI知识库',],
          },
          {
            text: '开放API',
            link:'/02.页面/10.HTML/111.md/'
          },
          {
            text: 'AIGC应用学院',
            children: [
              { text: '提示词', link: '/about/11.md/' },
              { text: '大模型', link: '/about/22.md/' },
              { text: '热门应用', link: '/02.页面/20.CSS/02.md/' },
              { text: '技术方案', link: '/02.页面/20.CSS/03.md/' },
            ],
          },    
          {
            text: '联系我们',
            link:'/00/'
          },   
        ],

        logo:'/images/111.png' ,
        
        sidebar: 
        {
          
      '/':  [
          {
            text: '远瑞创新云',
            // collapsible: true,
            // 设置折叠的
            children: [
              '/README.md/',
              '/02.页面/20.CSS/07.md/',
              // {text:'自己加的名字',link:'/02.页面/20.CSS/04.md/'},
              '/02.页面/20.CSS/05.md/',
              '/02.页面/20.CSS/06.md/',
            ],
          },
          {
            text: 'API',
            children: [
              '/01.前端/40.学习笔记/00.md/',
              '/01.前端/25.JavaScript文章/01.md/',
              '/01.前端/25.JavaScript文章/02.md/',
            ],
          },
          
        ],
      }
      
      
      }),
      
      
})