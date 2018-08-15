<template lang="html">
  <div class="sharepage">
    <div class="sharetitle">攻略分享墙</div>
  <div class="share">
    <div class="item" v-for="item in sharelist" @click="getshareDetail(item)">
      <img src="../assets/houseone.jpg" alt="图片">
      <div class="content"><img :src="item.img" alt="头像">
       <div class="abstract">{{item.title}}
         <p>{{item.content}}</p>
       </div>
      </div>
    </div>
  </div>
  <div class="addshare">发表我的分享</div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from "vuex";
export default {
  computed:{
    ...mapState({sharelist:'sharelist'}),
    ...mapGetters({
      cartData:'shopcartlist',
    })
  },
  methods:{
    ...mapActions({
      getshare:'getshare',
    }),
    getshareDetail(item){//带参数的...mapActions不大会，所以暂时先this.$store.dispatch
      this.$store.dispatch('getshareDetail',item)
    }
  },
  mounted(){
    this.getshare();
  }
}
</script>

<style lang="less" scoped>
.sharepage{
  .sharetitle{
    margin-top: 10px;
    width: 400px;
    height: 80px;
    border-top-right-radius:40px;
    border-bottom-right-radius: 40px;
    background: #c0956b;
    font-family: cursive;
    font-size: 16px;/*no*/
    line-height: 80px;
  }
  .addshare{
    position: fixed;
    right: 0;
    bottom: 50px;
    width: 200px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    background: #fdd835;
    font-family: cursive;
    font-size: 14px;/*no*/
    color: black;
  }
}
.share{
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;//一条轴线排不下时换行
  justify-content: space-between;
  background-color: #f1f1f1;

  .item{
    width: 48%;
    height: 420px;
    padding: 10px;
    background-color: #fff;
    margin-top:20px;

    img{
      height: 280px;
      width: 100%;
    }
    .content{
      height: 120px;
      width:100%;
      display: flex;
      align-items: center;
      img{
          width: 80px;
          height: 80px;
          border-radius: 50%;
      }
      .abstract{

       margin-left: 5px;
        flex:1;
        color:black;
        p{
          color: #5d5a59;
          //移动端多行文本省略号
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}

</style>
