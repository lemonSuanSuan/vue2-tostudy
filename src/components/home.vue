<template lang="html">
  <div class="home">
    <div class="search">
    明明什么都没做，就已经{{time}}了
    </div>
    <yd-slider autoplay="6000" class="banner">
     <yd-slider-item>
            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
    </yd-slider-item>
    <yd-slider-item>
            <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
    </yd-slider-item>
    <yd-slider-item>
            <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
    </yd-slider-item>
   </yd-slider>
   <div class="boxs">
      <div class="boxone">
        <span class="bigfont">{{date}}</span>
        <div class="todolist" @click="status.isShowneed=true">
          <div v-for="item in limit_four" class="listitem">
            <yd-icon name="time" size="0.4rem"></yd-icon><span class="content">{{item.title}}</span></div>
        </div>
        <div class="isdone"><span>已完成</span><yd-icon name="order"  @click.native="status.isShowPublish=true"></yd-icon></div>
        <div class="add"><span>添加代办</span><yd-icon name="compose" @click.native="status.isShowadd=true"></yd-icon></div>

      </div>
      <div class="boxtwo">
          <div class="boxtwo-1" @click="toexpressPage">物流数据</div>
          <div class="boxtwo-1" @click="toplanPage">计划</div>
   </div>
   </div>
      <div class="boxs">
        <div class="boxthree">
          <div class="boxtwo-1" @click="tochartsPage">消费统计</div>
          <div class="boxtwo-1" @click="tomyvuexPage">vuex</div>
      </div>
      <div class="boxone center" @click="tointroducePage">关于demo</div>
   </div>
   <div class="footer">
     <yd-tabbar-item class="tabbar" title="首页" link="/">
         <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
     </yd-tabbar-item>
     <yd-tabbar-item class="tabbar" title="下单直通车" link="/order">
         <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
         <yd-badge slot="badge" type="danger" v-show="totalNum">{{totalNum}}</yd-badge>
    </yd-tabbar-item>
     <yd-tabbar-item title="个人中心" link="/myresume" class='active'>
         <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
         <yd-badge slot="badge" type="danger">2</yd-badge>
     </yd-tabbar-item>

  </div>
  <!-- 弹窗子组件 之完成事项弹窗-->
 <my-dialog :isShow="status.isShowneed" :top-distance="status.topNum" @on-close="closeDialog">
    <div slot="header">
      <h1>待做事项</h1>
    </div slot="main">
      <div class="dialog_publish_main" slot="main">
        <div class="dialogslot" v-for="item in needtodolist">
          <yd-icon name="time" size="0.4rem"></yd-icon>
          <span>{{item.title}}</span>
          <div class="slotcontent">{{item.detail}}</div>
        </div>
      </div>
  </my-dialog>
  <my-dialog :isShow="status.isShowPublish" :top-distance="status.topNum" @on-close="closeDialog">
    <div slot="header">
      <h1>已完成事项</h1>
    </div slot="main">
      <div class="dialog_publish_main" slot="main">
        <div class="dialogslot" v-for="item in isdonelist">
          <yd-icon name="checkoff" size="0.4rem"></yd-icon>
          <span>{{item.title}}</span>
          <div class="slotcontent">{{item.detail}}</div>
        </div>
      </div>
  </my-dialog>
  <my-dialog :isShow="status.isShowadd"  @on-close="closeDialog">
    <div slot="header">
      <h1>添加待办</h1>
    </div slot="main">
      <div class="dialog_publish_main" slot="main">
          <input v-model="addlist.title" class="input" type="text" placeholder="请输入标题">
          <yd-textarea v-model="addlist.detail"class="detailevent" slot="right" placeholder="请输入详细事项" maxlength="200"></yd-textarea>
          <div class="submit" @click="addlistEvent">添加</div>

      </div>
  </my-dialog>



  </div>

</template>

<script>
import {mapGetters} from "vuex";
export default {
  data() {
            return {
              mydate:new Date(),
              todolist:[
                {title:"吃饭",detail:"认真吃饭最重要",isdone:0},
                {title:"完成",detail:"认真吃饭最重要",isdone:1},
                {title:"睡觉",detail:"年轻人应该早睡早起",isdone:1},
                {title:"打豆豆",detail:"豆豆是谁为什么要打他，打人是不对的，真的，真的啊",isdone:0},
                {title:"多读书多看报少吃零食多睡觉睡觉睡觉",detail:"只要人人都献出一点爱，只要人人都献出一点爱世界将变成美好的人间",isdone:1},
                {title:"多读书多看报少吃零食多睡觉睡觉睡觉",detail:"只要人人都献出一点爱，世界将变成美好的人间",isdone:0},
                {title:"多读书多看报少吃零食多睡觉睡觉睡觉",detail:"只要人人都献出一点爱，世界将变成美好的人间",isdone:0},
                {title:"搬砖",detail:"待做",isdone:0},
                {title:"咸鱼",detail:"做一条有理想的咸鱼",isdone:1}
              ],
              status:{//弹窗相关的状态
                isShowPublish:false,
                isShowneed:false,
                isShowadd:false,
                topNum:10
              },
              addlist:{
                title:'',
                detail:'',
                isdone:0
              }

            }
        },

  computed:{
    time(){
      let hour=this.mydate.getHours();
      let minute=this.mydate.getMinutes()
      let time=hour+":"+minute
      return time
    },
    date(){
      let month=this.mydate.getMonth();
      let day=this.mydate.getDate();
      let date=month+'月'+day+'日';
      return date;
    },
    needtodolist(){
      let need=[]
      for(let i=0;i<this.todolist.length;i++){

        if(this.todolist[i].isdone==0){
          need.push(this.todolist[i]);
        }
      }
      return need
    },
    limit_four(){//使用计算属性获得数组的前3条
      //本来这里直接使用计算属性needtodolist来返回，结果这个页面如果有多处用到needtodolist来循环就
      // 有问题了所以还是乖乖计算一遍，不要轻易的那计算属性来计算计算属性啊勤奋点
      let limit=[]
      for(let i=0;i<this.todolist.length;i++){

        if(this.todolist[i].isdone==0){
          limit.push(this.todolist[i]);
        }
      }
      return limit.splice(0,4) //注意splice(startIndex,endiIndex)并不包括endIndex
    },
    isdonelist(){
      let isdone=[]
      for(let i=0;i<this.todolist.length;i++){

        if(this.todolist[i].isdone==1){
          isdone.push(this.todolist[i]);
        }
      }
      return isdone
    },
    //使用扩展运算符
     ...mapGetters({
         totalNum:'totalCount',
     })

  },
  methods:{
 closeDialog(){
 this.status.isShowPublish=false;
 this.status.isShowneed=false;
 this.status.isShowadd=false;
 //把绑定的弹窗数组 设为false即可关闭弹窗
 },
 addlistEvent(){
   if(this.addlist.title || this.addlist.detail){
     // 有接口接收情况下，我没有接口啊哈哈哈哈
     // let params=this.addlist;
     // this.$axios.post('api/addlist',params).then(res=>{
     //   this.isShowadd=false;
     // })
     let params=this.addlist;
     this.todolist.push(params);
     this.$dialog.toast({
                   mes: '提交成功',
                   timeout: 1500,
                   icon: 'success'
               });
     this.closeDialog();//关闭
   }else{
     this.$dialog.toast({
                   mes: '未填写相关信息',
                   timeout: 1500
               });
   }
 },
 toexpressPage(){
   this.$router.push({path:'/express'})
 },
 toplanPage(){
   this.$router.push({path:'/plan'})
 },
 tochartsPage(){
   this.$router.push({path:'/mycharts'})
 },
 tointroducePage(){
   this.$router.push({path:'/aboutdemo'})
 },
 tomyvuexPage(){
   this.$router.push({path:'/myvuex'})
 }
 },

  mounted(){
            this.timer = setInterval(()=>{
              this.mydate = new Date();//修改数据date
            }, 60000);
  },
  beforeDestroy:function(){
      if(this.timer){
        clearInterval(this.timer); //在Vue实例销毁前，清除定时器
      }
    },
  components:{
    'my-dialog':resolve=>require(['./mydialog'],resolve)
  }

}
</script>

<style lang="less" scoped>
.home{
  background-color: rgb(70, 70, 70);
  height: 100%;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 100px;//腾地给footer
  color: #fff;
  .bigfont{
    font-size: 40px;/*no*/
    padding-left: 20px;
  }
  .dialogslot{
     border-bottom: 1px solid #999;/**/
     padding-bottom: 10px;

    .slotcontent{
      font-size: 12px;/*no*/
      padding-left: 70px;
      padding-top: 10px;
      line-height: 1.2;
      color: rgb(76, 175, 80);

    }
  }
  .input{
    color: inherit;
    width: 100%;
    margin-bottom: 20px;
  }
  .detailevent{
    border: 1px solid #5d5a59;/*no*/
  }
  .submit{
    background-color: green;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    line-height: 100px;//高度与行高相等实现单行文本的纵向居中
    margin:10px auto;//div居中
  }

  .search{
    height: 80px;
    background-color: rgba(189, 189, 189, 0.44);
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    line-height: 80px;
    // color: #fff;
  }
  .banner{
    height: 200px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .boxs{
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    .center{
      text-align: center;
      line-height: 400px;
      font-size: 40px;
    }
    .boxone{
      height: 400px;
      background-color: rgba(178, 178, 178, 0.38);
      border-top-left-radius: 50px;
      border-bottom-right-radius: 50px;
      flex:1.5;//让boxone和boxtwo的宽度比为1.5：1，所以设置了box1的flex:1.5，boxtwo的flex:1;
      position: relative;//为了让.isdone和.add相对它做绝对定位
      .isdone{
        position: absolute;
        left: 20px;
        bottom: 0;
        display: flex;
        flex-direction: column;//主轴设为纵向
        justify-content: center;
        align-items: center;
      }
      .add{
        position: absolute;
        right: 20px;
        bottom: 0;
        display: flex;
        flex-direction: column;//主轴设为纵向
        justify-content: center;
        align-items: center;
      }
      .todolist{
        padding: 10px;
        border: 3px solid #FDD835;/*no*/
        max-height: 230px;
        // overflow: hidden;
        width:400px;
        .listitem{
          display: flex;
          align-items: center;
          line-height: 1.2;
          .content{
            flex:1;
            width: 0;//在flex布局下面三句实现省略号的会失效，需要设置width:0才会生效
            //下面三句实现单行超出显示省略号
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }



        }
      }
    }
    .boxtwo{
      height: 400px;
      flex:1;
      padding-left: 20px;
      //为了让他的子项目纵向两端对齐而设置下面三句
      display: flex;
      flex-direction: column;//主轴设为纵向
      justify-content: space-between;
    }
    .boxthree{
      height: 400px;
      flex:1;
      padding-right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .boxtwo-1{
      background-color: rgba(178, 178, 178, 0.38);
      width:100%;
      height: 190px;
      line-height: 190px;
      text-align: center;
      border-top-right-radius: 50px;
      border-bottom-left-radius: 50px;
      font-size: 40px;
    }

  }
  .footer{
    display: flex;
    // justify-content: space-between;
    height: 100px;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #333;

    .active{
        color: #CEC086;
      }


  }

}
</style>
