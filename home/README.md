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

## 1.项目搭建
先看一波完成后的项目介绍（`webstorm`里面`ts`不支持引入`vue`所有爆红色，强迫症患者可以用`vscode`支持会更好）
![](https://user-gold-cdn.xitu.io/2018/10/31/166c97cb6827c1ef?w=405&h=727&f=png&s=39636)
```
  public //当前文件
    static //可以放静态资源不会被打包（我放的是富文本编译器的文件后期会太慢可以换成cdn直接引入到index.html）
  src //当前项目文件
    assets //静态资源存放需要被打包
    components //组件存放处
        beforeUpload //单个图片上传组件 （基于element）
        pagination //分页插件 （基于element）
        reset //重置按钮组件
        tinyMceEditor //富文本编译器（这个是重点ts支持的vue插件当前对于我们伸手党来说比较少）
        uploadListImg //批量图片上传（基于element）
        verification //表单验证
    utils //当前项目公用方法
    views //当前项目存放地址
        aixo //当前项目ajax封装
        content //当前项目业务逻辑
        filters //当前项目过滤器
        haveNot //404页面
        layout //项目结构布局
        login //当前项目登陆页面
        method //当前项目的静态遍历存放
        store //当前项目vuex存放（不要为了用vuex而用，其实很多项目都不需要用到vuex的）
        system //权限管理相关
        typings //ts定义使用
        utils //存放其他文件（我这边存了cookie的文件）
    app.vue //全局路由页面
    main.ts //启始的js
    permission.ts //路由中转页面
    route //路由页面
    shims-tsx.d //支持jsx
    shims-vue.d //支持vue
    vue-config //vue配置
    vue-shim.d.ts //声明全局方法（ts会自动抓取.d.ts文件部分全局方法需要定义才可以使用）
```

组件组件后面会一个一个讲解，公共方法也会讲，先要下载当前需要的`ts`的插件
```
##   最主要到是这3个
1.   aixo
2.   element
3.   js-cookie
```
看下package.js 可以看到我们当前到依赖
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca0f579843c00?w=1257&h=653&f=png&s=178351)

然后我们去下载当前到依赖

---
### 福利篇
教你如何看插件是否可以使用当前到`vue` + `ts`项目（当前`ts`+`vue`还是比较少）
[`TypeSearch`](https://microsoft.github.io/TypeSearch/)
如果和下面的图一样能搜索出来的基本可以判断支持ts
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca18c9bd65f38?w=1094&h=525&f=png&s=27425)

---
### 下载当前项目依赖
我们打开当前图形管理工具
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca1b4bbe6653d?w=1871&h=778&f=png&s=134579)
选择然后下载（还要下载当前`ts`的）
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca1e344c32ac5?w=1221&h=768&f=png&s=190835)
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca1cd1eeed073?w=1203&h=839&f=png&s=168400)
这样才算把整个`aixo`下载好（其他插件都一样都需要下载2个）
第二个主要是在`node_modules`里面的`@types`里面定义一遍才可以使用
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca2124e4cefd4?w=1528&h=530&f=png&s=122681)
路由页面和`vue`的页面差别不是很大
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca26df1f4629d?w=1677&h=613&f=png&s=180837)
`main.js`差别也不大
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca27f545a5c2a?w=1254&h=607&f=png&s=153549)

## `app.vue`文件

![](https://user-gold-cdn.xitu.io/2018/10/31/166ca29f4d4c3662?w=1325&h=568&f=png&s=139770)
讲一下这个把 `vue-property-decorator`不然小伙伴们对这个会很不懂的
```
### vue-property-decorator
@Prop  父子组件之间传值
   ## 使用方式
   @Prop({
        type: String,
        default: 'Default Value'
    }) msg: string;

@Model  数据双向绑定
    @Model('change') checked: boolean

@Watch  监听数据变化
    //监听路由变化
    @Watch('$route')
    onRouteChanged(route: any, oldRoute: any) :void {
        this.$forceUpdate() ## 刷新当前的数据
    }

@Provide  提供  /  @Inject  注入
    ## 父
     @Provide('users')
      users = [
        {
          name: 'test',
          id: 0
        }
      ]
    ## 子
    @Inject('users') users;

修饰器
    const Log = (msg) => {
      return createDecorator((component, key) => {
        console.log("#Component", component);
        console.log("#Key", key); //log
        console.log("#Msg", msg); //App
      })
    }
    @Log('fullMessage get called')
    get fullMessage() {
      return `${this.message} from Typescript`
    }

```
可能您还是不懂建议看下官方文档[`vue-property-decorator`](https://github.com/kaorun343/vue-property-decorator)这里就不详细赘述了，由于本人比较愚钝（伸手党一枚）

![](https://user-gold-cdn.xitu.io/2018/10/31/166ca25f7845f8dc?w=1489&h=652&f=png&s=193789)
下面送上项目成功后的样子（明天应该会详细讲解一下本ui整体的搭建以及插件的使用）具体的插件的文档会近期更新上
![](https://user-gold-cdn.xitu.io/2018/10/31/166c9f3efe3b3b33?w=1912&h=964&f=png&s=141966)
后面会有一个基于element+ts完整的后台会搞出来然后会出一个基础版本各位老爷点个赞👍
![](https://user-gold-cdn.xitu.io/2018/10/31/166ca40f97bef2fa?w=1919&h=972&f=png&s=90281)

