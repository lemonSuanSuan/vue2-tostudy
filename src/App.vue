<template>
  <!-- 注释这里的<div id="app"></div>发现并不会影响什么，说明根实例里的el:#app作用是找到index.html里的挂载点 -->
  <div id="app">
    <!-- <v-header></v-header> -->
<!-- app.vue为根组件，所有组件都会渲染到这里 -->
    <router-view></router-view>
    <!-- <v-footer></v-footer> -->
  </div>
</template>

<script>
// 因为使用layout来涵盖头部和尾部，所以app.vue组件里面关于头尾部的引入和使用注释掉
// import header from "./components/header";//引入头部组件,注意在app.vue这里不能用@components/header
// import footer from "./components/footer";
export default {
  name: 'App',
  // components:{//将头部和尾部注册为局部组件
  //   'v-header':header,
  //   'v-footer':footer
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5d5a59;
  line-height: 1;

  /* vue-cli自动生成的app这个div里的样式会被继承，所以记得按照实际情况修改 */
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */



}
</style>
