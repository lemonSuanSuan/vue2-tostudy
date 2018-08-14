<template lang="html">
  <div class="pay">
    <div class="send">
      <div class="text">对了，我没有钱</div>
    <div class="arrow"></div>
   </div>
   <div class="photo positionone"><img src="../assets/banzhuan.jpg" alt="求职"></div>
   <div class="emoji">
     <div class="pt-50"><img src="../assets/nomoney.jpg" alt="求职"></div>
     <div class="photo ml-40 "><img src="../assets/banzhuan.jpg" alt="求职"></div>
   </div>
   <div class="payway">
     <div class="photo mr-40"><img src="../assets/zhifubao.jpg" alt="求职"></div>
     <div class="pt-50"><img src="../assets/nomoney.jpg" alt="求职"></div>
   </div>
   <div class="payway">
     <div class="photo mr-40"><img src="../assets/wechat.jpg" alt="求职"></div>
     <div class="pt-50"><img src="../assets/placid.jpg" alt="求职"></div>
   </div>
   <div class="time">{{timecount}}</div>
 </div>
</template>

<script>

export default {
  data(){
    return{
      timecount:'',
      end:1536833556,
    }
  },
  mounted(){
    this.countdown(this.end);
  },
  methods:{
    countdown(endtime){
      let timer=setInterval(()=>{
        let now=new Date();
        let end=new Date(endtime*1000);
        let t=end.getTime()-now.getTime();
        // console.log(t);
        if(t>0){
          let day=Math.floor(t/1000/60/60/24);
          let hour=Math.floor((t/1000/60/60)%24)
          let min=Math.floor(t/1000/60%60);
          let sec=Math.floor(t/1000%60);
          hour=hour<10?("0"+hour):hour;
          min=min<10?("0"+min):min;
          sec=sec<10?("0"+sec):sec;
          let formaTime=day+"天"+hour+"时"+min+"分"+sec+"秒";
          // console.log(formaTime);
          this.timecount=formaTime;
        }else{
          clearInterval(timer);
          this.timecount="已结束"
        }
      },1000)


    }
  }
}
</script>

<style lang="less" scoped>
.pay{
  position: relative;

.send {
position:relative;
width:300px;
height:75px;
background:#F8C301;
border-radius:10px; /* 圆角 */
margin:60px auto 0;
text-align: center;
display: table;
.text{
  display: table-cell;
  vertical-align: middle;
  font-size: 32px;
}
.arrow {
position:absolute;
top:20px;
right:-32px; /* 圆角的位置需要细心调试哦 */
width:0;
height:0;
font-size:0;
border:solid 16px;
border-color:#f5f5f5 #f5f5f5 #f5f5f5 #F8C301;
}
}
.photo{
  width: 170px;
  height: 170px;
  border: 1px solid #FEB18F;
  border-radius: 50%;
  background: white;
  text-align: center;
  padding: 24px 12px 12px 12px;
  // transform: translateX(500px);

  img{
    width: 120px;
    height: 120px;
  }
}
.positionone{
  position: absolute;
  right: 20px;
  top:-60px;
}
.emoji{
  display: flex;
  justify-content: flex-end;
  padding-top: 100px;
  padding-right: 20px;
}
.ml-40{
  margin-left: 40px;

}
.payway{
  display: flex;
  padding-top: 100px;
  padding-left: 20px;
}
.mr-40{
  margin-right: 40px;
}
.pt-50{
  padding-top: 50px;
  img{
    width: 240px;
    height: 240px;
  }
}
.time{
  background-color: red;
  width: 250px;
  height: 80px;
  position: absolute;
  right:0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

}


</style>
