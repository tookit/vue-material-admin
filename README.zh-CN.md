
# Vue Material Admin


[![CircleCI](https://circleci.com/gh/tookit/vue-material-admin/tree/dev.svg?style=svg)](https://circleci.com/gh/tookit/vue-material-admin/tree/dev)

简体中文 | [English]](./README.md) 

关于Vue Material Admin 的开发，请关注我的博客 [http://isocked.com], 基于vuetify 2.3.10开发的vuepress主题

## 计划
* 重构 媒体/文件管理
* 重构 邮件管理
* 重构 聊天
* 在local环境下增加 模拟REST API
* 创建一个真实环境的API,详情请见[vma-api](https://github.com/tookit/vma-api), 有助于更好集成生产环境
* 创建一个websocket chat server用于集成聊天组件

## 简介
Vue Material Admin Template 是一个由[Vue](https://vuejs.org/index.html/) 和 [Vuetifyjs](https://vuetifyjs.com/)构建的后台管理模板,

## 你可以在这里找到我
[VMA](https://discord.gg/7f6TVx)

## 预览
![Preivew](http://vma.isocked.com//static/preview/01_preview.png)

## 文档

[doc](http://doc.isocked.com/)

## 目录结构
``` bash
├── src
│   ├── api
│   ├── components
│   ├── mixins
│   ├── views
│   ├── router
│   ├── store
│   ├── util
│   ├── theme
│   │   ├── default.sass
│   └── App.vue
│   └── event.js
│   └── main.js
├── dist
├── release
├── static (or asset)
├── node_modules
├── test
├── README.md
├── package.json
├── vue.config.js
├── index.html
└── .gitignore
```

### 依赖安装
```
yarn install
```

### 本地开发
```
yarn run serve
```

### 编译文件用于生产环境
```
yarn run build
```

### 测测
```
yarn run test
```

### Eslint
```
yarn run lint
```

### 配置
See [Configuration Reference](https://cli.vuejs.org/config/).


### 引用

* [Vuetifyjs](https://vuetifyjs.com/)
* [Vue](https://vuejs.org/index.html/)
* [ICON](https://materialdesignicons.com/)
* [ECharts](http://echarts.baidu.com/option.html)
* [SASS](http://sass-lang.com/)

### 捐赠
如果你觉得这个项目对你用于的话，或者帮助持续改进这个项目，:tropical_drink:


[Paypal Me](https://www.paypal.me/tookit)

[Buy me a coffee](https://www.buymeacoffee.com/tookit)

<a href="https://www.buymeacoffee.com/tookit" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## License

[MIT](https://github.com/tookit/vue-material-admin/blob/master/LICENSE)
