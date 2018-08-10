<template lang="html">
  <div class="order">
    <div class="address">收获地址：某某某某某某某某某某某天桥底</div>
    <div class="nothing" v-if="!totalNum">购物车暂未添加商品
      <router-link to="/myvuex"><span class="look">去看看</span></router-link></div>
    <div class="product" v-for="item in cartData" :key="item.id">
      <img :src="item.img" width="100px" height="100px">

      <div class="textcontent">
        <div class="texttitle">{{item.title}}</div>
        <p>{{item.price}}x{{item.count}}</p>
      </div>

    </div>
    <div class="footer">
      <div class="price">应付：{{totalPrice}} 元</div>
      <div class="pay" @click="submitorder">确认付款</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed:{
           //使用扩展运算符
            ...mapGetters({
                cartData:'shopcartlist',
                totalNum:'totalCount',
                totalPrice:'totalPrice'
            })
        },
  methods:{
    submitorder(){
      this.$router.push({path:'/pay'})
    }
  }

}
</script>

<style lang="less" scoped>
.order{
  padding-bottom: 100px;
  .address{
    width: 600px;
    height: 150px;
    margin: 20px auto;
    line-height: 150px;
    border:1px solid #E2D7D7;/*no*/
    background: #fff;

  }

  .product{
    width: 500px;
    height: 300px;
    background: #fff;
    margin: 20px auto;
    display: flex;
    align-items: center;
    border-radius: 25px;
    .textcontent{
      margin-left: 20px;
      .texttitle{
        height: 50px;
        font-size: 32px;
        text-align: center;
        line-height: 1.2;

      }
    }

  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: #fff;
    border-top: 1px solid rgba(85, 85, 85, 0.66);/*no*/
    display: flex;
    justify-content: flex-end;//让项目右对齐
    .price{
      color: #3ADC40;
      width: 200px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .pay{
      width: 200px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background: #3ADC40;
      font-size: 32px;
      color: #fff;
      p{
        font-size: 24px;
      }
    }
  }
  .nothing{
    margin: 0 auto;
    text-align: center;
  }
  .look{
    color: green;
    font-size: 32px;

  }
}
</style>
