<template lang="html">
  <div class="myresume">

    <div class="tv">
      <div class="danmu1 stytleOne">搬砖使我快乐</div>
      <div class="danmu2 stytleTwo">pick me</div>
      <div class="danmu3 stytleThree">这是一个求职信号~求职信号~信号~号</div>
      <div class="danmu4 stytleFour">搬砖勤奋,沉迷搬砖无法自拔</div>
      <div class="danmu1 stytleFive">四有青年 offer，没有我再想想办法</div>
      <div class="danmu2 stytleSix">vue,es6,html5,css3</div>
    </div>
    <div class="resume">
      <div class="basicinfo"><img src="../assets/study.jpg" alt="求职"><div class="name">姓名:lemon</div></div>
      <div class="education"><h1>教育背景</h1><div class="detail">based on but more than  nine-year compulsory education</div></div>
      <div class="experience"><h1>工作经历</h1><div class="detail">got my first job last year</div></div>
      <div class="skills"><h1>专业技能</h1>
        <div class="add" @click="status.isShowadd=true">添加技能</div>
        <div class="detail" v-for="item in skills">{{item.name}}:{{item.proficiency}}</div>
      </div>
      <div class="end">please have a look at my formal resume and if possible,call me</div>
    </div>

    <my-dialog :isShow="status.isShowadd"  @on-close="closeDialog">
      <div slot="header">
        <h1>添加技能</h1>
      </div slot="main">
        <div class="dialog_publish_main" slot="main">
            <input v-model="addlist.name" class="input" type="text" placeholder="请输入名称">
            <yd-textarea v-model="addlist.proficiency"class="detailevent" slot="right" placeholder="请输入详细描述" maxlength="200"></yd-textarea>
            <div class="submit" @click="addlistEvent">添加</div>

        </div>
    </my-dialog>




  </div>
</template>

<script>
export default {
  data(){
    return{
      skills:[
        {name:'vue.js',proficiency:'还行'},
        {name:'es6/es7',proficiency:'还行，promise? =>? async/await? let?const? Set?...?'},
        {name:'html5/css3',proficiency:'还行'},
        {name:'work',proficiency:'都行'},
        {name:'study',proficiency:'都行,I like study'},
        {name:'eat',proficiency:'精通'},
        {name:'earning',proficiency:'lack of money'}
      ],
      status:{//弹窗相关的状态
        isShowadd:false,
        topNum:10
      },
      addlist:{
        name:'',
        proficiency:''
      }

    }
  },
  methods:{
 closeDialog(){
 this.status.isShowadd=false;
 //把绑定的弹窗数组 设为false即可关闭弹窗
 },
 addlistEvent(){
   if(this.addlist.name || this.addlist.proficiency){
     // 有接口接收情况下，我没有接口啊哈哈哈哈
     // let params=this.addlist;
     // this.$axios.post('api/addlist',params).then(res=>{
     //   this.isShowadd=false;
     // })
     let params=this.addlist;
     this.skills.push(params);
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
 }
 },
 components:{
   'my-dialog':resolve=>require(['./mydialog'],resolve)
 }
}
</script>

<style lang="less" scoped>
.myresume{
  padding-bottom: 30px;

.tv{
  position: relative;
  width: 600px;
  height: 300px;
  margin: 10px auto;
  background: rgba(204, 204, 204, 0.6);
  border: 10px solid black;
  overflow: hidden;//超出部分隐藏

}

.danmu1 {

  animation: danmu 8s linear 0s infinite;
}
.danmu2{
  animation: danmu 8s linear 3s infinite;
}
.danmu3{

  animation: danmu 8s linear 1s infinite;
}
.danmu4{

  animation: danmu 8s linear 2s infinite;
}

@keyframes danmu {
  0% {

    transform: translateX(600px);
  }

  50%{
    transform: translateX(300px);
  }
  100% {
    transform: translateX(0px);
  }
}
.stytleOne{
  position: absolute;
  left: 0;
  font-size: 40px;
  color: #fff;
}
.stytleTwo{
  position: absolute;
  left: 0;
  top:50px;
  font-size: 32px;
  color: green;
}
.stytleThree{
  position: absolute;
  left: 0;
  top:220px;
  font-size: 28px;
  color: red;
}
.stytleFour{
  position: absolute;
  left: 0;
  top:160px;
  font-size: 28px;
  color: #FDD835;
}
.stytleFive{
  position: absolute;
  left: 0;
  top:130px;
  font-size: 24px;
  color: blue;
}
.stytleSix{
  position: absolute;
  left: 0;
  top:100px;
  font-size: 24px;
  color: #1A3D58;
}
//以上，动画相关
//以下，简历相关
.resume{
  position: relative;
  // height: 800px;
  // width:
  padding: 10px 20px 70px 20px;
  .basicinfo{

  padding:10px 50px;
    display: flex;
    align-items: center;
    background: #FDD835;
    font-size: 32px;
    .name{
      margin-left: 50px;
      color: black;
    }
  }

  img{
    width: 160px;
    height: 200px;
  }
  h1{
    background: #FDD835;
    height: 50px;
    width: 150px;
    line-height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-top-right-radius: 50px;
  }
  .detail{
    margin-top: 10px;
    font-size: 14px;/*no*/
  }
  .end{
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    height: 50px;
    line-height: 50px;
    background: #FDD835;
    color: red;
  }
  .skills{
    position: relative;
    .add{
      width: 150px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      position: absolute;
      top:0;
      right: 20px;
      background: #FDD835;
      border-radius: 20px;
      color: #fff;
    }
  }
}
//添加技能弹框相关
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
}
</style>
