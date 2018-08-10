<template lang="html">
  <div class="home">
    <router-view></router-view>
   <div class="footer">
     <yd-tabbar-item class="tabbar" title="首页" link="/indexhome/homeDefault" >
         <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
     </yd-tabbar-item>
     <yd-tabbar-item class="tabbar" title="关于demo" link="/indexhome/homeDemo">
         <yd-icon name="question" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
     <yd-tabbar-item title="个人中心" link="/indexhome/homeInfo" dot>
         <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
     </yd-tabbar-item>
  </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="less" scoped>
.home{
  padding-bottom: 80px;//腾地给footer
  .footer{
    display: flex;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #333;
    color: #fff;
    .active{
        color: #FDD835;
      }


  }

}
</style>
