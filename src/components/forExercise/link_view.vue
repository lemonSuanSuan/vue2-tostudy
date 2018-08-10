<template lang="html">
  <div>
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->

    <div class="footer">
      <yd-tabbar >
        <yd-tabbar-item v-for="(item,index) in nav" :title="item.title" :link="item.link" :active="index===ind" @click.native="beActive(index)">
            <yd-icon :name="item.iconname" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
     </yd-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ind:0,
      nav:[{title:'首页',iconname:'home',link:'/link/view1'},
          {title:'购物车',iconname:'shopcart',link:'/link/view2'},
          {title:'个人中心',iconname:'ucenter-outline',link:'/link/view3'}]
    }
  },
  methods:{
    beActive(index){
      this.ind=index;
    }
  }
}
</script>

<style lang="less" scoped>
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
