const path = require('path')
const beian = 'CC BY-NC 4.0'

const announcementBarContent = `<span>🌟新入站必读 <a href='/test'>小站使用指南🌟</a></span>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '📺尚宇的小站',
  titleDelimiter: '-',
  url: 'https://disnox.top',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'disnox',
  projectName: 'blog',
  tagline: '大多数人的生活不应该是我的生活',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },
    metadata: [
      {
        name: 'keywords',
        content:'📺尚宇'
      },
      {
        name: 'keywords',
        content: 'blog, C/C++, Linux, QT,STM32, FOC, DC-DC, 硬件, 嵌入式, 软件',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      title: '📺尚宇',
      logo: {
        alt: '📺尚宇',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      items: [
        {
          label: '📝学习',
          position: 'right',
          items: [
            {
              label: '📑技术笔记',
              to: 'docs/skill/',
            },
            {
              label: '📂高效工作指南',
              to: 'docs/tools/',
            },
            {
              label: '🗂️项目介绍',
              to: 'docs/tools/',
            },
          ],
        },
        {
          label: '📘博客',
          position: 'right',
          items: [
            {
              label: '⏲时间轴',
              to: 'archive',
            },
            {
              label: '🏷标签',
              to: 'tags',
            },
          ],
        },
        {
          label: '🏖生活',
          position: 'right',
          to: 'docs/diary/',
        },
        {
          label: '🛠工具',
          position: 'right',
          items: [
            {
              label: '在线代码',
              to: 'https://c.runoob.com/compile/11/',
            },
            {
              label: 'mdnice',
              to: 'https://editor.mdnice.com/',
            },
            {
              label: '立创EDA',
              to: 'https://lceda.cn/',
            },
            {
              label: 'hello 图床',
              to: 'https://www.helloimg.com/',
            },
          ],
        },
        {
          label: '🤖项目',
          position: 'right',
          to: 'project',
        },
        {
          label: '🛫导航',
          position: 'right',
          to: 'website',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
            {
              label: '技术笔记',
              to: 'docs/skill',
            },
            {
              label: '实战项目',
              to: 'project',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/disnox',
            },
            {
              label: 'CSDN',
              href: 'https://blog.csdn.net/m0_47339333?spm=1000.2115.3001.5343',
            },
            {
              label: 'blibli',
              href: 'https://space.bilibili.com/511798206?spm_id_from=333.1007.0.0',
            }
          ],
        },
        {
          title: '更多',
          items: [{
            label: '友链',
            position: 'right',
            to: 'friends',
          }, {
            label: '导航',
            position: 'right',
            to: 'website',
          },
          {
            html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
          },
        ],
        },
      ],
      // copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2020 - PRESENT 📺尚宇 Built with Docusaurus.</p>`,
      copyright: `本站所有内容遵循<a href="https://creativecommons.org/licenses/by/4.0/deed.zh" >${beian}</a>开源协议，仅限非商业性使用，转载请注明出处。</p><p>Copyright © 2022 - PRESENT 📺尚宇 Built with Docusaurus.</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'disnox',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    matomo: {
      matomoUrl: 'https://matomo.disnox.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'disnox/disnox_blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      mapping: 'title',
      lang: 'zh-CN',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/disnox',
      blibli: 'https://space.bilibili.com/511798206?spm_id_from=333.1007.0.0',
      zhihu: 'https://www.zhihu.com/people/chui-zi-26-38',
      csdn: 'https://blog.csdn.net/m0_47339333?spm=1000.2115.3001.5343',
      qq: 'https://www.helloimg.com/image/ZV1U6u',
      wx: 'http://n0i.cn/1DmzeU',
      cloudmusic: 'https://music.163.com/#/user/home?id=3906202648',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: "G-S4SD5NXWXF",
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/disnox/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '📺尚宇',
          copyright: `Copyright © ${new Date().getFullYear()} 📺尚宇 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

module.exports = config
