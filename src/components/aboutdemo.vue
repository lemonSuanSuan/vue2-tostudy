<template lang="html">
  <div class="aboutdemo">
    <div class="item border" >没错，这是一个好好学习天天向上的demo.页面和功能全是自主设计和开发.
    可能,缺那么一点美感,和那么一点深度。内涵，坚信你看得见~沉浸在自我感动中</div>
    <div class="item border">首先关于整个demo的实现：<div class="about">vue、webpack、vueRouter、vuex、axios、echarts、less</div></div>
    <div class="border">
        <div class="item">然后关于部分页面：</div>
        <div class="item"><b>记事本：</b>使用<span class="about">slot</span>对公用子组件派发不同内容，以及
          <span class="about">组件间双向通讯（props down,event up）</span></div>
        <div class="item"><b>物流数据：</b>axios请求测试接口数据</div>
        <div class="item"><b>计划：</b><span class="about">动态组件+ keep-alive</span>,使用is属性实现动态切换，
          并且使用keep-alive对动态组件进行缓存.页面完成得挺有趣的我觉得，输入你的体重看看。我怎么这么有才呢（狗头）</div>
        <div class="item"><b>消费统计：</b><span class="about">ECharts</span> 中实现异步数据加载更新</div>
        <div class="item"><b>vuex:</b>如题，使用<span class="about">vuex</span>进行数据状态管理，<span class="about">多个组件依赖同一数据状态时，</span>
          使用vuex统一管理，当数据发生变化时所有相关组件数据会<span class="about">响应式更新</span>。这里myvuex.vue,order.vue和home.vue三个组件就都依赖了购物车数据。
          在复杂的应用中你会明白vuex带来的便利。当然对于简单小应用没必要用到vuex就是了</div>
    </div>
    <div class="item border">另外,用了<span class="about">rem自适应布局,路由懒加载</span>等等优化的手段。
    须得好好整理笔记.</div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.aboutdemo{
  font-size: 32px;
  line-height: 1.5;
  padding: 10px;
  .item{
    margin: 10px 0px;
    background: #fff;
  }
  .border{
    border:1px solid #fdd835;/*no*/
  }
  .about{
    color: red;
  }
}
</style>
