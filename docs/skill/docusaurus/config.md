---
id: docusaurus-config
slug: /docusaurus-config
title: 配置文件
authors: kuizuo
---

## docusaurus.config.js

`docusaurus.config.js` 位于你的网站的根目录，包含了你的站点的配置信息。

在这里可以修改logo，站点名(title)，作者名，顶部的公告(announcementBar)，导航栏(navbar)，底部导航(footer)等等。

```javascript title='docusaurus.config.js'
const config = {
  title: '📺尚宇的小站',
  titleDelimiter: '-',
  url: 'https://kuizuo.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'kuizuo',
  projectName: 'blog',
  tagline: '记录所学知识，领略编程之美',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content: '📺尚宇, kuizuo, blog, javascript, typescript, node, react, vue, web, 前端, 后端',
      },
    ],
    // ...
}

module.exports = config

```

同时绝大部分的配置信息都可以放在这里，例如搜索(algolia)，评论(giscus)，社交链接(socials)等等。这些配置都可以通过docusaurus内置的hook(useThemeConfig、useDocusaurusContext)来获取。

完整的配置信息说明 [docusaurus.config.js | Docusaurus](https://docusaurus.io/zh-CN/docs/api/docusaurus-config)

## sidebars.js

用于配置文档的侧边栏，例如本博客中的[技术笔记](/docs/skill/)，[工具推荐](/docs/tools/)。侧边栏对应的每一项都是一个markdown文件，同时这些文件都存放在docs目录下，方便管理。

[侧边栏 | Docusaurus](https://docusaurus.io/zh-CN/docs/sidebar)

## 相关信息

### 基本信息

站点名和作者名只需要搜索“📺尚宇”便能找到关键位置

### 关于我

具体可在`src/pages/about.mdx`中查看与修改。

其中技术栈的图标使用[Shields.io](https://shields.io/)生成，github的状态信息使用[GitHub Profile Summary Cards](https://github-profile-summary-cards.vercel.app/demo.html)生成

所要做的就是将username替换成你的github名即可。

### 社交链接

只需要在`docusaurus.config.js`中修改socials属性，替换成你的即可。

```javascript title='docusaurus.config.js'
socials: {
    github: 'https://github.com/kuizuo',
    twitter: 'https://twitter.com/kuizuo',
    juejin: 'https://juejin.cn/user/1565318510545901',
    csdn: 'https://blog.csdn.net/kuizuo12',
    qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=911993023&amp;site=qq',
    cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
},
```

如果你还有其他社交链接，可以在这里添加对应的链接，然后在`src/components/Hero.index.tsx`中的SocialLinks组件中来配置新增或者删除社交链接图标。

### 友链、导航、项目

这里你需要关注数据部分，如果想了解页面的实现可以看[自定义页面](/docs/docusaurus-style#自定义页面)

数据部分存放在`src/data`下，并使用ts用作类型提示。这些数据最终会在这些页面中渲染，你只需要根据符合的类型定义所要展示的数据，访问这些页面就能查看到效果。

:::caution 项目数据

其中项目的数据是存放在**根目录下的data目录下project.js**并使用exports.projects导出。主要原因是自定义的docusaurus插件(js)无法正常导入ts文件，索性就直接使用js来定义数据，这样在ts或js文件中都可以直接导入。

:::

## 其他配置

可能还需要配置下giscus评论，搜索，站点统计等等，这些会放在插件中细讲。