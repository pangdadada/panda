<template><div><h2 id="_1-概括" tabindex="-1"><a class="header-anchor" href="#_1-概括" aria-hidden="true">#</a> 1.概括</h2>
<h3 id="_1-1-开发计划" tabindex="-1"><a class="header-anchor" href="#_1-1-开发计划" aria-hidden="true">#</a> 1.1 开发计划</h3>
<p>(1)开发周期：开发周期两个月，从2023.10.01到2023.11.30日。12.1到12.31日为试运行和功能优化期，2024.1.1起达到完全能够线上运行并大规模推广的条件。</p>
<p>(2)开发内容：平台架构、用户模块、信息模块、支付结算模块、智能办公模块（文件生成、文档对话、行业研报、财务分析）、政策申报模块（AI问政策、AI配需求、AI报项目）。</p>
<p>(3)开发顺序：平台架构、信息管理模块、用户模块、支付结算模块、政策申报模块、智能办公模块。</p>
<p>(4)开发团队：前后端2×2开发模式，前端力量不足可以借助兼职或者网络外包，php和python后端为自己团队。</p>
<h3 id="_1-2-前端架构" tabindex="-1"><a class="header-anchor" href="#_1-2-前端架构" aria-hidden="true">#</a> 1.2 前端架构</h3>
<p>(1)技术选型：VUE3+Vite+iviewUI+TypeScirpt+HTML+CSS，代码根目录名称web_runrise。</p>
<p>(2)代码目录：按照VUE官方<a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js - 渐进式 JavaScript 框架 | Vue.js<ExternalLinkIcon/></a>最新文档搭建流程如下：</p>
<ul>
<li>
<p>A.确保你安装了最新版本的 <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a>，并且你的当前工作目录正是打算创建项目的目录。在命令行中运行：<code v-pre>npm create vue@latest</code>，下图<code v-pre>TypeScript、VUE Router</code>必须Yes，其他NO。<code v-pre>project name为web_runrise</code>。
<img src="/assets/img/111.png" alt="avatar"></p>
</li>
<li>
<p>B.在项目被创建后，通过以下步骤安装依赖并启动开发服务器
<img src="/assets/img/222.png" alt="avatar"></p>
</li>
<li>
<p>C.创建后的原始目录架构及解释如下图：</p>
</li>
</ul>
<p>├── .vscode                         # 使用vscode编辑器后生成的配置文件 <br>
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
└── vite.config.ts           # 配置Vite开发服务器的行为和构建选项<br></p>
<ul>
<li>D.安装iview ui样式插件库</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> view-ui-plus <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>E.安装axios接口请求插件库</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)前台首页：</p>
<p>a.完全模仿LinkAI (link-ai.tech)的首页。其中linkAI的图标及logo改为我们自己的；</p>
<p>b.LinkAI平台改为“远瑞云平台”（即平台的介绍文档页面）；</p>
<p>c.开源项目改为“AI应用集成”，选项为“AI知识库建设、AI智能客服建设、AI微信助手、AI企业微信、AI公众号建
设、私有大语言模型搭建”；开放API在1.0版本先去掉；</p>
<p>d.服务状态去掉，联系我们保留，太阳的icon去掉；</p>
<p>e.Link.AI改为Runrise.AI，字体及大小一样。</p>
<p>f.下面这段话改为：<strong>RunriseAI（远瑞创新云）是基于大数据和生成式人工智能技术的企业研发创新赋能平台，针对企业公示大数据、行业研报大数据、政策法规大数据进行向量化处理和近似度计算，聚合国内外多种基础大语言模型，面向创业者和企业用户提供智能办公、研发项目、知识产权、科技申报、财税顾问等AI赋能服务。</strong></p>
<p>g.下面的立即体验和联系我们不变，相关的链接都连接到相关的文档上。</p>
<p>h.最下面的logo和备案号（备案完成后提供）也要进行相应更新。
<img src="/assets/img/333.png" alt="avatar"></p>
<h3 id="_1-3-后端架构" tabindex="-1"><a class="header-anchor" href="#_1-3-后端架构" aria-hidden="true">#</a> 1.3 后端架构</h3>
<p>(1)php代码独立目录重建，目录名php_runrise。</p>
<p>(2)aplication目录的文件夹有：admin管理后台模块，api开放API模块，user用户管理模块，payment财务结算模块，office智能办公模块，policy政策申报模块，research研发辅助模块，ipmana知识产权模块，taxation财税顾问模块，finance智能融资模块。</p>
<h3 id="_1-4-数据库架构" tabindex="-1"><a class="header-anchor" href="#_1-4-数据库架构" aria-hidden="true">#</a> 1.4 数据库架构</h3>
<p>(1)个人用户数据表：user_per，字段有手机号码、类型（超级管理员、普通用户）、用户昵称、工作常驻城市、性别、职业、职务、行业、绑定微信id、注册时间</p>
<p>(2)企业用户数据表：user_ent</p>
<p>(3)个人企业关联表：user_rel</p>
<p>(4)用户资源管理表：user_source</p>
<p>(5)用户资源消耗日志：log_user_source</p>
<p>(6)用户登录日志表：log_user_login</p>
<p>(7)平台信息分类表：info_cate</p>
<p>(8)平台信息详情表：info_details</p>
<h2 id="_2-网站信息管理" tabindex="-1"><a class="header-anchor" href="#_2-网站信息管理" aria-hidden="true">#</a> 2.网站信息管理</h2>
<h3 id="_2-1-功能概述" tabindex="-1"><a class="header-anchor" href="#_2-1-功能概述" aria-hidden="true">#</a> 2.1 功能概述</h3>
<p>(1)网站信息（产品介绍、帮助文档、API说明等）都是完全向所有用户开放的，因此，使用静态网站方式更利于搜索引擎收录，同时，也可以降低前后端开发人员的工作量。</p>
<p>(2)使用Vuepress框架搭建静态的信息管理系统，具体参考vuepress相关技术文档。</p>
<p>(3)vuepress可以文档是用markdown语法写的，写法很简单，我们所有技术和测试人员都要会。其次，vuepress在写文档时候可以引用vue组件，这个就很强大了，vue组件里面是可以执行很多系统交互功能的。</p>
<h3 id="_2-2信息分类和内容" tabindex="-1"><a class="header-anchor" href="#_2-2信息分类和内容" aria-hidden="true">#</a> 2.2信息分类和内容</h3>
<p>静态信息页面主要分为四大类：远瑞云平台、AI应用集成、开放API、AI应用学院（所有人都可以发布的关于AI应用和技术方面的文章）。各大分类下的目录结构如下：</p>
<h4 id="_2-2-1-远瑞云平台" tabindex="-1"><a class="header-anchor" href="#_2-2-1-远瑞云平台" aria-hidden="true">#</a> 2.2.1 远瑞云平台</h4>
<p>(1)版本说明：V1.0功能说明、V1.0.1新增功能和升级修复...</p>
<p>(2)注册登录：用户注册、用户登录、找回密码、修改密码、用户注销。</p>
<p>(3)用户升级：级别权限、升级企业版。</p>
<p>(4)付费充值：收费标准、支付方@式、发票开具、费用明细。</p>
<p>(5)AI慧办公：文件生成、文档分析、行业研报、财务分析。</p>
<p>(6)AI享政策：AI问政策、AI配需求、AI报项目。</p>
<h4 id="_2-2-2-ai应用集成" tabindex="-1"><a class="header-anchor" href="#_2-2-2-ai应用集成" aria-hidden="true">#</a> 2.2.2 AI应用集成</h4>
<p>(1)AI知识库：知识库建设。</p>
<p>(2)AI智能客服：web嵌入、微信接入、企微接入、钉钉接入、公众号接入等。</p>
<p>(3)大模型搭建：GLM-6B-2</p>
<h4 id="_2-2-3-开放api" tabindex="-1"><a class="header-anchor" href="#_2-2-3-开放api" aria-hidden="true">#</a> 2.2.3 开放API</h4>
<p>（暂无，点击后提示“本模块预计1.1版本上线”）</p>
<h4 id="_2-2-4-ai应用学院" tabindex="-1"><a class="header-anchor" href="#_2-2-4-ai应用学院" aria-hidden="true">#</a> 2.2.4 AI应用学院</h4>
<p>(1)提示词：此栏目发布和讨论各种应用的提示词案例及撰写方法。</p>
<p>(2)大模型：此栏目发布国内外各种大模型的进展、特点、开源情况及应用。</p>
<p>(3)热门应用：此栏目按照行业划分，发布各种热门B端的商业应用。</p>
<p>(4)技术方案：纯技术知识和技术讨论群。</p>
<h2 id="_3-用户管理模块" tabindex="-1"><a class="header-anchor" href="#_3-用户管理模块" aria-hidden="true">#</a> 3.用户管理模块</h2>
<h3 id="_3-1-功能概述" tabindex="-1"><a class="header-anchor" href="#_3-1-功能概述" aria-hidden="true">#</a> 3.1 功能概述</h3>
<p>(1)用户管理模块任务包括前台、中台、后台三大块开发，前台是用户注册、登录、找回密码等功能；中台是用户控制台功能，包括修改密码、修改资料、用户升级、账户注销、付款结算等；后台是我们运营方的综合管理后台，包括用户中心-用户管理、配置中心-参数配置、配置中心-分类配置。</p>
<h3 id="_3-2-前台开发" tabindex="-1"><a class="header-anchor" href="#_3-2-前台开发" aria-hidden="true">#</a> 3.2 前台开发</h3>
<h3 id="_3-3-中台开发" tabindex="-1"><a class="header-anchor" href="#_3-3-中台开发" aria-hidden="true">#</a> 3.3 中台开发</h3>
<h3 id="_3-4-后台开发" tabindex="-1"><a class="header-anchor" href="#_3-4-后台开发" aria-hidden="true">#</a> 3.4 后台开发</h3>
<h2 id="_4-支付结算模块" tabindex="-1"><a class="header-anchor" href="#_4-支付结算模块" aria-hidden="true">#</a> 4.支付结算模块</h2>
<h2 id="_5-政策申报模块" tabindex="-1"><a class="header-anchor" href="#_5-政策申报模块" aria-hidden="true">#</a> 5.政策申报模块</h2>
<h2 id="_6-智能办公模块" tabindex="-1"><a class="header-anchor" href="#_6-智能办公模块" aria-hidden="true">#</a> 6.智能办公模块</h2>
</div></template>


