module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-baidu-tongji',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?54ac1069b21ec1ee1e30f610f849a894";
              hm.defer = true;
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `,
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'baidu-site-verification',
              content: 'code-rqLUw5reVS',
            },
          },
        ],
      }
    },
  }
}
