<template lang="html">
  <div class="express">
    <!-- {{expressList[0].context}} -->
    <h1>快递</h1>
    <div class="exlist">
      <div class="item shadow" v-for="item in expressList">
        <div class="icon"></div>
        <div class="context"><p>{{item.context}}</p>
          <p>{{item.time}}</p>
        </div>
      </div>
      <div class="bottomtext">已经到底啦~</div>
    </div>


  </div>

</template>

<script>

export default {
  data(){
    return{
      expressList:[],
      city:'广州'


    }
  },
  mounted(){
    this.$nextTick(function(){
      this.get_res()})
    // this.get_res();
  },
methods:{
  get_res(){
    let params={type:'yuantong',postid:'11111111111'}
    this.$axios.get('api/query',params).then((res)=>{
    console.log(res);
    this.expressList=res.data.data;
  }).catch((e)=>{
    //上面用的测试接口可能会挂掉，如果挂掉就用本地准备的json数据
    console.log(e);
    let response= require('../assets/json/express.json')
    this.expressList=response.data;

  })
  }
 }
}
</script>

<style lang="less" scoped>
.express{
  h1{
    font-size: 16px;/*no*/
    padding: 40px 20px 10px 20px;
    background: rgb(70, 70, 70);
    color: #fff;
  }
  .shadow{
    box-shadow: 0 0 8px #dadada;
  }
  .exlist{
    margin-bottom: 30px;

    .item{
      display: flex;
      align-items: center;
      height: 130px;
      margin-top: 8px;
      background-color: #fff;

      .icon{
        width: 100px;
        height:100px;
        background: url('../assets/photo.jpg') no-repeat;
        background-size: 100px 100px;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;

      }
      .context{
        flex:1;//可以使得.icon不被挤压
        padding-left:10px;
        padding-right: 10px;
        line-height: 1.2;
      }
    }
    .bottomtext{
      margin: 5px auto;
      text-align: center;
    }
  }



}
</style>
