<template lang="html">
  <div class="home">
    <router-view></router-view>
   <div class="footer">
     <yd-tabbar-item class="tabbar" title="首页" link="/indexhome/homeDefault" :class="{active:isActive==0}" @click.native="beActive(0)">
         <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
     </yd-tabbar-item>
     <yd-tabbar-item class="tabbar" title="关于demo" link="/indexhome/homeDemo" :class="{active:isActive==1}" @click.native="beActive(1)">
         <yd-icon name="question" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
     <yd-tabbar-item title="个人中心" link="/indexhome/homeInfo" dot :class="{active:isActive==2}" @click.native="beActive(2)">
         <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
     </yd-tabbar-item>

  </div>
  </div>

</template>

<script>

export default {
  data(){
    return{
      isActive:0,
    }
  },
  methods:{
    beActive(val){
      this.isActive=val;
    }
  }

}
</script>

<style lang="less" scoped>
.home{

  padding-bottom: 80px;//腾地给footer


  .footer{
    display: flex;
    // justify-content: space-between;
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
