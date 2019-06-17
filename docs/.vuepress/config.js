const path = require("path");

module.exports = {
  base: "/you-donot-know-vue/",
  title: "你不知道的Vue",
  description: "换一个角度介绍你所不知道的Vue",
  dest: path.resolve(__dirname, "../../dist/"),
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: "序言", link: "/preface/" },
      {
        text: "正文",
        items: [
          { text: "MVVM", link: "/mvvm/mvvm-1.md" },
          { text: "介绍", link: "/introduction/" }
        ]
      },
      { text: "附录", link: "/appendix/" },
      {
        text: "Github",
        link: "https://github.com/DZG-MELODY/you-donot-know-vue.git"
      }
    ],
    sidebar: {
      "/preface/": [""],
      "/mvvm/": ["mvvm-1", "mvvm-2"],
      "/introduction/": ["intro-general-1", "intro-vnode-1"],
      "/": [""]
    }
  }
};
