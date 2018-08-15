<template lang="html">
<div class="sharedetail">
  <div class="housepic"><img src="../assets/houseone.jpg" alt="民宿图片"></div>
  <div class="info">{{detail.title}}
    <div class="author">share by<img :src="detail.img" alt=""></div>
  </div>
  <div class="content"><p>{{detail.content}}</p></div>
</div>
</template>

<script>
import {mapState} from "vuex";
export default {
  computed:{
    ...mapState({detail:'currentshare'}),
  },

}
</script>

<style lang="less">
.sharedetail{
  .housepic{
    img{
      width: 100%;
    }
  }
  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    font-family:  cursive;
    font-size: 18px;/*no*/
    background-color: #fff;
    margin:10px auto;
  }
  .author{
    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
  .content{
    padding: 10px;
    font-size: 14px;/*no*/
    line-height: 1.5;
    p{
      text-indent: 2em;
    }
  }
}
</style>
