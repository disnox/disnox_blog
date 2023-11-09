const path = require('path')
const beian = 'CC BY-NC 4.0'

// const announcementBarContent = ''
const announcementBarContent = `<span>🌟新入站必读 <a href='/test'>小站使用指南🌟</a></span>`

module.exports = async function createConfigAsync() {
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: '尚宇的小站',
    url: 'https://disnox.top',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'disnox',
    projectName: 'blog',
    tagline: '星海横流，岁月成碑',
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
          content: '尚宇, disnox',
        },
        {
          name: 'keywords',
          content: 'blog, C/C++, STM32, Linux, qt, simulink, AD',
        },
        {
          name: 'keywords',
          content: '嵌入式软硬兼狮, C语言, STM32, Linux, qt，simulink, AD',
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: '尚宇',
          src: 'img/logo.webp',
          srcDark: 'img/logo.webp',
        },
        hideOnScroll: true,
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
                label: '🗂️项目介绍',
                to: 'docs/project_group/',
              },
              {
                label: '📂高效工作指南',
                to: 'docs/tools/',
              },
            ],
          },
          {
            label: '📘博客',
            position: 'right',
            to: 'blog',
          },
          {
            label: '🤖项目',
            position: 'right',
            to: 'project',
          },
          {
            label: '更多',
            position: 'right',
            items: [
              {
                label: '归档',
                to: 'blog/archive',
              },
              {
                label: '资源',
                to: 'resource',
              },
              {
                label:  '友链',
                to: 'friends',
              },
              {
                label: '工具推荐',
                to: 'docs/tools/',
              },
            ],
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习',
            items: [
              {
                label: '博客',
                to: 'blog',
              },
              {
                label: '归档',
                to: 'blog/archive',
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
                label: 'bilbil',
                href: 'https://space.bilibili.com/511798206?spm_id_from=333.1007.0.0',
              },
              {
                label: 'CSDN',
                href: 'https://blog.csdn.net/m0_47339333?spm=1000.2115.3001.5343',
              },
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/chui-zi-26-38',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '友链',
                position: 'right',
                to: 'friends',
              },
              {
                label: '导航',
                position: 'right',
                to: 'resource',
              },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
              },
            ],
          },
        ],
        // copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2020 - PRESENT 尚宇 Built with Docusaurus.</p>`,
        copyright: `本站所有内容遵循<a href="https://creativecommons.org/licenses/by/4.0/deed.zh" >${beian}</a>开源协议，仅限非商业性使用，转载请注明出处</p><p>Copyright © 2022 - PRESENT 尚宇 Built with Docusaurus.</p>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['java', 'php', 'rust', 'toml'],
        defaultLanguage: 'javascript',
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
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
        appId: ' ',
        apiKey: ' ',
        indexName: 'disnox',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {},
      },
      giscus: {
        repo: 'disnox/disnox_blog',
        repoId: 'R_kgDOIS7BTg',
        category: 'General',
        categoryId: 'DIC_kwDOIS7BTs4CSN3O',
        theme: 'light',
        darkTheme: 'dark',
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
    headTags: [
      {
        tagName: 'meta',
        attributes: {
          name: 'description',
          content: '尚宇的个人博客',
        },
      },
    ],
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
            remarkPlugins: [(await import('remark-math')).default],
            rehypePlugins: [(await import('rehype-katex')).default],
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
            trackingID: 'G-S4SD5NXWXF',
            anonymizeIP: true,
          },
          // debug: true,
        }),
      ],
    ],
    plugins: [
      'docusaurus-plugin-image-zoom',
      'docusaurus-plugin-sass',
      path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
      path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
      [
        path.resolve(__dirname, './src/plugin/plugin-content-blog'),
        {
          path: 'blog',
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/disnox/blog/edit/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogDescription: '尚宇的个人博客',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Blogs',
          postsPerPage: 10,
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: 'all',
            title: '尚宇',
            copyright: `Copyright © ${new Date().getFullYear()} 尚宇 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
          },
        },
      ],
      [
        '@docusaurus/plugin-ideal-image',
        {
          disableInDev: false,
        },
      ],
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
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
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
    i18n: {
      defaultLocale: 'zh-CN',
      locales: ['en', 'zh-CN'],
      localeConfigs: {
        en: {
          htmlLang: 'en-GB',
        },
      },
    },
  }
}
