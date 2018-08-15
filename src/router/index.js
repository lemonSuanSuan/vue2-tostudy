import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
// import login from '@/components/login'//这种是非懒加载路由的方式
// import recommend from '@/components/recommend'
// import link_view from '@/components/link_view'
// import view1 from '@/components/view1'
// import view2 from '@/components/view2'
// import view3 from '@/components/view3'
// import view4 from '@/components/view4'

// import home from '@/components/home'
import indexhome from '@/components/indexhome'   //layout
import homeDefault from '@/components/homeDefault'
import pay from '@/components/pay'

Vue.use(Router)

export default new Router({
  //使用history模式时，要添加base和mode这两句
  // base:'/vueydui/dist/',//base指明项目路径，即打包生成的static文件夹和index.html放在服务器哪个目录下
  // mode:'history',
  //
  linkActiveClass: 'active',//设置激活router-link链接时class属性
  routes: [
    // {//先注释home把，我要把底部导航三个弄成成单页，所以弄出个indexhome实在不行再改回这个
    //   path: '/',
    //   name: 'home',
    //   component: home
    // },
    {
      path: '/',
      redirect:'/indexhome/homeDefault'
    },

    {
      path: '/travel',
      name: 'travel',
      component: resolve=>require(['@/components/travel'],resolve)//路由懒加载
    },
    {
      path: '/express',
      name: 'express',
      component: resolve=>require(['@/components/express'],resolve)//路由懒加载
    },
    {
      path: '/plan',
      name: 'plan',
      component: resolve=>require(['@/components/plan'],resolve)//路由懒加载
    },
    {
      path: '/mycharts',
      name: 'mycharts',
      component: resolve=>require(['@/components/mycharts'],resolve)//路由懒加载
    },
    {
      path: '/aboutdemo',
      name: 'aboutdemo',
      component: resolve=>require(['@/components/aboutdemo'],resolve)//路由懒加载
    },
    {
      path: '/myvuex',
      name: 'myvuex',
      component: resolve=>require(['@/components/myvuex'],resolve)//路由懒加载

    },
    {
      path: '/order',
      name: 'order',
      component: resolve=>require(['@/components/order'],resolve)//路由懒加载

    },
    {
      path: '/pay',
      name: 'pay',
      // component: resolve=>require(['@/components/pay'],resolve)//路由懒加载
      component: pay

    },
    {
      path: '/myresume',
      name: 'myresume',
      component: resolve=>require(['@/components/myresume'],resolve)//路由懒加载

    },
    {
      path: '/indexhome',
      name: 'indexhome',
      component: resolve=>require(['@/components/indexhome'],resolve),//路由懒加载
      children:[
        {path:'homeDefault',component:homeDefault},   //这样嵌套后表示路由为/link/view1
        {path:'homeDemo',component:resolve=>require(['@/components/aboutdemo'],resolve)},
        {path:'homeInfo',component:resolve=>require(['@/components/myresume'],resolve)},
        //注意嵌套路由前面不需要斜杠，以/开头会被当做根路径
      ]

    },
    {
      path: '/share',
      name: 'share',
      component: resolve=>require(['@/components/share'],resolve)//路由懒加载
    },
    {
      path: '/sharedetail',
      name: 'sharedetail',
      component: resolve=>require(['@/components/sharedetail'],resolve)//路由懒加载

    },


//下面是开始学习写的组件
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: index
    // },
    {
      path: '/login',
      name: 'login',
      // component: login  //非懒加载
      component:resolve=>require(['@/components/login'],resolve)//路由懒加载
    },
    // {
    //   path: '/recommend',
    //   name: 'recommend',
    //   component: recommend,
    //   meta:{
    //     requireLogin:true
    //   }
    // },
    // {
    //   path: '/link',
    //   name: 'link_view',
    //   component: link_view,
    //   redirect:'/link/view1',//这里是为了进入/link时显示view1的渲染内容所以重定向
    //   children:[
    //     {path:'view1',component:view1},//这样嵌套后表示路由为/link/view1
    //     {path:'view2',component:view2},
    //     {path:'view3',component:view3},
    //     {path:'view4',component:view4},
        //注意嵌套路由前面不需要斜杠，以/开头会被当做根路径
      // ]

    // },

  ]
})
