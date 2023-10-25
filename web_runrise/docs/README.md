
# 首页

## 1.概括
::: side-anchor :::
### 1.1 开发计划

(1)开发周期：开发周期两个月，从2023.10.01到2023.11.30日。12.1到12.31日为试运行和功能优化期，2024.1.1起达到完全能够线上运行并大规模推广的条件。

(2)开发内容：平台架构、用户模块、信息模块、支付结算模块、智能办公模块（文件生成、文档对话、行业研报、财务分析）、政策申报模块（AI问政策、AI配需求、AI报项目）。

(3)开发顺序：平台架构、信息管理模块、用户模块、支付结算模块、政策申报模块、智能办公模块。

(4)开发团队：前后端2×2开发模式，前端力量不足可以借助兼职或者网络外包，php和python后端为自己团队。
### 1.2 前端架构

(1)技术选型：VUE3+Vite+iviewUI+TypeScirpt+HTML+CSS，代码根目录名称web_runrise。

(2)代码目录：按照VUE官方[Vue.js - 渐进式 JavaScript 框架 | Vue.js](https://cn.vuejs.org/)最新文档搭建流程如下：

- A.确保你安装了最新版本的 [Node.js](https://nodejs.org/en)，并且你的当前工作目录正是打算创建项目的目录。在命令行中运行：`npm create vue@latest`，下图`TypeScript、VUE Router`必须Yes，其他NO。`project name为web_runrise`。
![avatar](/assets/img/111.png)



- B.在项目被创建后，通过以下步骤安装依赖并启动开发服务器
![avatar](/assets/img/222.png)

- C.创建后的原始目录架构及解释如下图：

├── .vscode                         # 使用vscode编辑器后生成的配置文件 <br>
├── node_modules             # 存放项目依赖的第三方模块<br>
├── public                            # 纯静态资源，该目录下的文件不会被webpack处理，该目录会被拷贝到输出<br>
│   ├── favicon.ico               # 网站的ico图标<br>
├── src                                  # 项目的代码目录<br>
│   ├── main.ts                     # webpack 的入口文件；<br>
│   ├── App.vue                   # APP页面入口<br>
│   ├── assets/                     # 共用的代码以外的资源，如：图片、图标、视频 等；<br>
│   ├── api/                          # 网络模块，如：接口；<br>
│   ├── router/                     # 路由模块<br>
│   ├── components/          # 共用的组件；； 这里的存放的组件应该都是展示组件<br>
│   └── views/                      # 存放项目业务代码；<br>
根目录下；   <br>
       ├── .gitignore               # git的忽略配置文件<br>
       ├── env.d.ts                  # 类型声明文件，用于定义全局环境变量的类型<br>
       ├── index.html              # Vue应用的入口HTML文件<br>
       ├── package.json          # npm包配置文件，里面定义了项目的npm脚本，依赖包等信息<br>
       ├── README.md           # 项目信息文档<br>
       ├── tsconfig.app.json    # TypeScript配置文件，用于配置应用程序的TypeScript编译选项<br>
       ├── tsconfig.json           # 配置整个Vue 3项目的TypeScript编译选项<br>
       ├── tsconfig.node.json  # 配置Node.js项目的TypeScript编译选项<br>
       ├── tsconfig.vitest.json  # 配置Vue 3项目在Vite开发服务器中的TypeScript编译选项<br>
       └── vite.config.ts           # 配置Vite开发服务器的行为和构建选项<br>
       
- D.安装iview ui样式插件库
```bash
npm install view-ui-plus --save
```

- E.安装axios接口请求插件库
```bash
npm install axios
```