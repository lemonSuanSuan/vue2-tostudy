// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import 'babel-polyfill' //兼容ie9

import axios from './utils/http'

import store from './store'

import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';

Vue.use(YDUI);
Vue.use(MuseUI);
Vue.config.productionTip = false

Vue.prototype.$axios=axios;
Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
};

// 路由钩子函数鉴权（全局守卫）
router.beforeEach((to, from, next) => {
    // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireLogin)) {
    //要求登录的去判断本地tokenid是否存在，即判断是否登录了
    if (window.localStorage.getItem("tokenId")) {
      console.log(localStorage.getItem("tokenId"));
        next();//已登录，所以直接跳转到to路由
      }
    else {
      // //防止无限循环（这里我并没有发现死循环所以暂时注释啦）
      //      if (to.name === 'login') {
      //          next();
      //          return
      //      }
      console.log("死循环吗");

      Toast({
                    mes: '请先登录',
                });
        next({
          path: "/login",
          // query: { redirect: to.fullPath }//把要跳转的地址作为参数传到下一步,作用就是登录成功之后可以根据query中的内容跳转回原来的路由(页面)
        });
      }
    }
    else {
      //不要求的直接跳转路由
      next();
    }
  }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
