<template lang="html">
  <div class="planone">
    <div class="inputweight">
      <div class="input1">
        <input placeholder="输入" type="number" pattern="[1-9]{4}" v-model="kgnumber">
        <span>kg</span>
      </div>
      <div class="submit" @click="changeweight">提交</div>
      <img src="../assets/foottwo.jpg" alt="">
    </div>
    <div class="compare">
      <div class="item":class="[kgnumber < number.old ? 'goodstatus':'badstatus']"><p>今天</p>{{kgnumber}}</div>
      <div class="vstext">vs</div>
      <div class="item" :class="[kgnumber > number.old ? 'goodstatus':'badstatus']"><p>昨天</p>{{number.old}}</div>

    </div>
    <div class="todayplan">
      <div class="title">今日份</div>
      <div class="list" v-for="item in number.list">{{item.id}}.{{item.detail}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    number:{
      type:Object,
      required:true,
    }
  },
  computed:{
    kgnumber:{
      get:function(){
        console.log("初始"+this.number.new);
        return this.number.new;},
      set:function(val){//子组件input输入数据后触发inputevent事件，将val传给父组件去修改
        this.$emit('inputevent',val)
      }

    }
  },

  methods:{
    changeweight(){
      // console.log("触发事件了吗");
      //上面完成双向通讯是因为我要响应式显示修改后的值，但是其实这个场景不需要用到双向通讯也行
      //双向通讯适用于这样的场景适用于在父组件里提交，这样子组件的修改就要响应式更改到父组件数据，
      //比如时代+里的提交推荐信息，户型选择（子组件）的数据与推荐表单（父组件）实现双向通讯
      let params={newweight:this.kgnumber}
      this.$axios.post('api/changeweight',params).then((res)=>{
        this.$dialog.toast({
                    mes: '保存成功',//这里应该是response的信息，因为这个接口不存在，所以手动成功哈哈哈
                    timeout: 1500,
                    icon: 'success'
                });

      }).catch((e)=>{
        console.log("这是一个错误"+e);
      })
    }

  }

}
</script>

<style lang="less" scoped>
.planone{
  height: 900px;
  background: url('../assets/planonebg.jpg') no-repeat;
  background-size: 750px 440px;
  position: relative;
  .inputweight{
    background: pink;
    width:250px;
    height:250px;
    position: absolute;
    top: 450px;
    left: 10px;
    text-align: center;
    border-radius: 20px;
    img{
      width: 140px;
      height: 140px;
    }
    .input1{
      display: relative;
      input{
        display: block;
        width: 100px;
        margin: 10px auto;
        color: #fff;
        background: black;
      }
      span{
        position: absolute;
        top:13px;
        right:80px;
        color: #fff;

      }
    }
    .submit{
      width: 70px;
      height: 70px;
      background: #00A180;
      position: absolute;
      top: 0;
      right: 0;
      border-bottom-left-radius: 100%;
      border-top-right-radius: inherit;
      text-align: center;
      line-height: 70px;
      color: #fff;
    }

  }
  .compare{
    position: absolute;
    top: 450px;
    right:10px;
    width: 400px;
    height: 250px;
    background: rgb(255, 192, 203);
    display: flex;
    justify-content: space-around;
    align-items: center;

    .item{
      width:100px;
      height:100px;
      line-height: 1.5;
      background: pink;
      text-align: center;
      font-size: 30px;
      color: #fff;
    }
    .goodstatus{
      background: green;
      transform: translateY(-20px);

    }
    .badstatus{
      background: red;
      transform: translateY(20px);

    }
    .vstext{
      font-size: 50px;
    }
  }
  .todayplan{
    position: absolute;
    top:710px;
    margin: 5px 10px;
    background: rgb(255, 192, 203);
    width: 730px;
    height: 320px;;
    .title{
      width:200px;
      height: 60px;
      background:#00A180;
      // text-align: center;
      font-size: 40px;
      color: #fff;
      padding-left: 10px;
      line-height: 60px;
      border-bottom-right-radius: 100%;
      margin-bottom: 20px;
    }
    .list{
      margin: 10px 10px;
      border-bottom:1px dotted blue;
      line-height: 1.2;
    }
  }
}
</style>
