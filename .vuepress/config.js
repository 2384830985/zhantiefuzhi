module.exports = {
    title: '粘贴复制大前端的技术文档',
    description: 'he never grew up,but he never stop growing',
    themeConfig: {
        // navbar: false,
        displayAllHeaders: true, // 默认值：false
        nav: [//右侧按钮
            { text: '仿有赞+ts+vue', link: '/home/', },
            { text: '项目(开源)', link: '/guide/foo/' },
            { text: '插件库', link: 'http://139.199.111.14/api/index.html' },
            { text: '掘金', link: 'https://juejin.im/user/5993a8e5f265da24874cecfe' },
            { text: 'github', link: 'https://github.com/2384830985' },
            // { text: 'github', //下拉
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese' },
            //         { text: 'Japanese', link: '/language/japanese' }
            //     ]
            // },
        ],
        // sidebar: [
        //     '/',
        //     '/page-a',
        //     ['/page-b', 'Explicit link text']
        // ],
        sidebar: 'auto',//自动生成侧边栏
        lastUpdated: 'Last Updated', // string | boolean
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            // updatePopup: {
            //    message: "New content is available.",
            //    buttonText: "Refresh"
            // }
        },
        // sidebar: [//侧边栏
        //     {
        //         title: 'Group 1',
        //         collapsable: false,
        //         children: [
        //             '/guide/',
        //         ]
        //     },
        //     {
        //         title: 'Group 2',
        //         collapsable: false,
        //         children: [
        //             '/home/'
        //         ]
        //     }
        // ]
    },
    dest: 'public',//打包的位置
    // base: 'https://2384830985.github.io/zhantiefuzhi/public/',//必须加不然打包出的少一个.
    post: '1234',//端口号http://0.0.0.0:8080.
    details: 'VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。',
    // footer: 'MIT Licensed | Copyright © 2018-present Evan You',
    footer: '正git commit -m "first commit"在审核。。。',
}