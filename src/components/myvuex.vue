<template lang="html">
  <div class="myvuex">
    <yd-list theme="4">
        <yd-list-item v-for="item, key in this.$store.state.list" :key="key">
            <img slot="img" :src="item.img">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
                <div>
                    <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                </div>
                <div class="add" @click="addtocart(item)">+</div>
            </yd-list-other>
        </yd-list-item>
    </yd-list>
    <div class="footer">
      <div class="price">合计：{{totalPrice}} 元</div>
      <div class="cart" @click="status.isShowPublish=true">
        <yd-icon name="shopcart"></yd-icon>
        <div class="number" v-show="totalNum">{{totalNum}}</div>
      </div>
      <div class="pay" @click="submitorder">去结算</div>
    </div>
    <my-cart :isShow="status.isShowPublish" :top-distance="status.topNum" @on-close="closeDialog">
      <div slot="header">
        <h1>购物车</h1>
      </div slot="main">
        <div class="dialog_publish_main" slot="main">
            <div class="clear" @click="clearAll">一键清空<yd-icon name="delete"></yd-icon></div>
            <div class="cartlist" v-for="item in cartData">
              <span>{{item.title}}</span><div><span>数量{{item.count}}</span><span class="del" @click="delcart(item)">-</span></div>
            </div>

        </div>
    </my-cart>
  </div>

</template>

<script>
import {mapGetters,mapActions} from "vuex";//先引入，然后在下面使用，这样在组件里使用比较方便
export default {
  data(){
    return{
      status:{//弹窗相关的状态
        isShowPublish:false,
        topNum:10
      },
    }
  },
  computed:{
           //使用扩展运算符
            ...mapGetters({
                cartData:'shopcartlist',//这样就可以直接用cartData,而不用写this.$store.getters.shopcartlist
                totalNum:'totalCount',
                totalPrice:'totalPrice'
            })
        },
  methods:{
    addtocart(item){
      this.$store.dispatch('addtocart',item)
    },
    delcart(item){
      this.$store.dispatch('delfromcart',item)
    },
    //可以用mapActions,就不用向上面这样写this.$store.dispatch（）
    ...mapActions({clearAll:'clearcart'}),
    closeDialog(){
    this.status.isShowPublish=false;
    //把绑定的弹窗数组 设为false即可关闭弹窗
    },
    submitorder(){
      this.$router.push({path:'/order'})
    }
  },

  mounted(){
    this.$store.dispatch('getlist');
  },
  components:{
    'my-cart':resolve=>require(['./mydialog'],resolve)
  }
}
</script>

<style lang="less" scoped>
.myvuex{
  padding-bottom: 100px;
  .add{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(123, 113, 113, 0.26);
    text-align: center;
    line-height: 50px;
    font-size: 32px;
    color: #fff;

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
      color: #FD473D;
      width: 200px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .cart{
      color: #FD473D;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid rgba(85, 85, 85, 0.66);/*no*/
      margin-right: 20px;
      position: relative;
      .number{
        position: absolute;
        right: 0;
        top:0;
        background: red;
        color: #fff;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;

        border-radius: 50%;
        font-size: 32px;

      }

    }
    .pay{
      width: 200px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background: #FD473D;
      font-size: 32px;
      color: #fff;
      p{
        font-size: 24px;
      }
    }
  }
  .clear{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // color: red;
  }
  .cartlist{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:20px;
    .del{
      display: inline-block;
      margin-left: 10px;
      .add;
    }
  }


}
</style>
