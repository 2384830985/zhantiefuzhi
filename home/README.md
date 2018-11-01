## 前言

最近尝试了vue+ts的组合个人感觉vue对于ts并没有特别的像angular2这样的友好，但是对于ts和js之间个人还是选择ts的。语法糖来说es6简直舒爽，下面我详细介绍下怎么使用ts+vue。ts+vue的插件会少上很多，但是肯定会随着vue对ts的支持插件也会越来越多（作为一个菜鸡毕竟经历众多项目可以给一些新手一点提示 QQ群838293023备注（github进来的）

> 游泳健身了解一下：[github](https://github.com/2384830985)

---

 ##  内容总结
 
 1.   vue cli3的安装。
 2.   vue config文件配置
 3.   项目结构文件搭建
 4.   路由的使用
 5.   vue cli启动以及启用下载ts 支持vue 的插件
 6.   ts aixo的使用
 7.   vue X的使用
 8.   图片上传（批量上传）//ts element的使用
 9.   分页的使用
 10.   重制按钮的分装
 11.   富文本编译器
 12.   表单验证
 
 ---


## 1.VueCLI 3.0
[VueCLI 3.0](https://cli.vuejs.org/zh/) 首先安装node.js[自己百度安装](https://www.baidu.com/s?ie=UTF-8&wd=node.js)   

安装：
```
# 然后我们安装vuecli3.0 npm 或者 yarn都是可以的网上慢的小伙子可以用yarn
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
创建一个项目：
```
vue create my-project
# OR
vue ui
```


![](https://user-gold-cdn.xitu.io/2018/10/31/166c8eca906313a6?w=879&h=269&f=png&s=36391)

 1.   第一个是自己创建过的模版。   
 2.   第二个是系统默认的  
 3.   第三个自己选配置   
我这边有创建过一个，我们选红色选中的这个

![](https://user-gold-cdn.xitu.io/2018/10/31/166c8f0faa9ab7f6?w=762&h=350&f=png&s=47087)

我们这样选择。**空格键是否选中，上下选择**

![](https://user-gold-cdn.xitu.io/2018/10/31/166c8f2c2c84da42?w=1266&h=168&f=png&s=29601)

直接回车（默认同意）

![](https://user-gold-cdn.xitu.io/2018/10/31/166c8fb691ed1778?w=1431&h=339&f=png&s=86519)

一路回车然后选择package.json 看下我们选择了啥ts 然后sass 语法检查esl

然后再回车就进行最后的cli项目的下载了。耐心等待

![](https://user-gold-cdn.xitu.io/2018/10/31/166c8fe177785078?w=1373&h=289&f=png&s=45006)

![](https://user-gold-cdn.xitu.io/2018/10/31/166c90baf66f61ba?w=713&h=320&f=png&s=38890)

我们下载好了   

```
# 输入
vue ui
```

![](https://user-gold-cdn.xitu.io/2018/10/31/166c90dc2827bec2?w=1444&h=729&f=png&s=83644)

欢迎来到vuecli3.0 图形话界面，现别着急现看我们的项目文件结构

## 2.vue config文件配置
---

##### 下面是我们的文件的结构

![](https://user-gold-cdn.xitu.io/2018/10/31/166c91281335b519?w=497&h=482&f=png&s=42090)
```
  ##  文件介绍
 
 1.   node_modules //当前node模块存放处
 2.   public //index页面所在镜头文件也可以放这个里面
 3.   src //当前项目存放
        assets //静态文件存放
        components //组件存放
        views //项目存放
        app.vue //这个我们文件的主要路由输入地方
        main //总的js文件
        router //路由文件
        shims-tsx.d //兼容jsx
        shims-vue.d //兼容vue
        store //vuex总文件
 4.   pakeage.js //文件（我们安装的依赖都再里面可以看到，也可以根据这个去下载node_modules）
 5.   我们还少一个vue.config.js 和 pakeage.js 同级
```
##### 为我等伸手党送上一份福利
```
// vue.config.js
module.exports = {
    // 选项...
    // 当使用基于 HTML5 history.pushState 的路由时；
    // 当使用 pages 选项构建多页面应用时。
    baseUrl:"",
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
    outputDir:"webApp",
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir:"assets",
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath:"index.html",
    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
    filenameHashing:true,
    // 多页面
    pages:undefined,
    // 编译警告
    lintOnSave:false,
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler:false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies:[],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap:false,
    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
    crossorigin:undefined,
    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
    integrity:false,
    // 反向代理
    devServer:{
        // devServer: {
        //     proxy: {
        //       '/api': {
        //         target: '1',
        //         ws: true,
        //         changeOrigin: true
        //       }
        //     }
        // }
    }
}
```

![](https://user-gold-cdn.xitu.io/2018/10/31/166c9323eecd5c7d?w=1452&h=823&f=png&s=103201)

![](https://user-gold-cdn.xitu.io/2018/10/31/166c933146f55643?w=1253&h=811&f=png&s=160014)

![](https://user-gold-cdn.xitu.io/2018/10/31/166c932bc6db2c7f?w=1441&h=860&f=png&s=106960)

vue+ts基本的项目搭建就完成了

## 小结
内容比较多我分6个专题来写这个vu+ts+element,如中间有问题可以直接下面留言
[`第二集`](https://juejin.im/post/5bd96dd95188257f630da8df)
<!--## Build Setup-->

<!--``` bash-->
<!--# install dependencies-->
<!--npm install //下载依赖-->

<!--# serve with hot reload at localhost:8080-->
<!--vue ui //用vue cli3脚手架下载工具去视图画下载依赖（以及打包运行）-->
<!--```-->

<!--![项目结构](https://user-gold-cdn.xitu.io/2018/10/14/1667229711a67e0f?w=502&h=1086&f=png&s=107921)-->
<!-->
判断是否可以使用ts+vue是否支持福利[链接](https://microsoft.github.io/TypeSearch/)