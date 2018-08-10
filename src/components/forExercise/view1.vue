<template lang="html">
  <div>
    <yd-countup
           endnum="1200"
           duration="3"
           decimals="2"
           separator=","
           prefix="$"
           suffix="美元"
   ></yd-countup>
   <!-- 下面是过渡组件使用实践 -->
   <div>
     <button type="button" name="button" @click="show=!show">过渡</button>
     <transition name="fade">
       <p v-show="show" class="isp">过渡的文字</p>
     </transition>
   </div>

   <!-- 下面是锚点实践 -->
   <div class="container">
     <div class="menu">
       <ul>
         <li class="menuitem" @click="goAnchor('#maodian1')">定位到maodian1</li>
         <li class="menuitem" @click="goAnchor('#maodian2')">定位到maodian2</li>
          <li class="menuitem" @click="goAnchor('#maodian3')">定位到maodian3</li>
       </ul>
     </div>
       <div class="content" id="content">
         <div class="md" id="maodian1">锚点1</div>
         <div class="md" id="maodian2">锚点2</div>
         <div class="md" id="maodian3">锚点3</div>
       </div>
   </div>
   <div>{{count}}</div>

  <div><button @click="jumpview4">跳转到view4</button></div>
  </div>
</template>

<script>
export default {
  data(){
    return{show:true,}
  },
  computed:{
    count:function(){return this.$store.state.count}
  },
  methods:{
    goAnchor(selector) {
      console.log("进入goAnchor");
      var anchor = this.$el.querySelector(selector)
      console.log(this.$el);//根据输出可知this.$el指的是当前模板
      console.log(anchor.offsetTop);
      this.$nextTick(function(){
      //下面这句的意思是将锚点顶部与父元素顶部之间的距离，赋值给父元素的scrollTop即滚动条滑动的距离，以使得定位到锚点
       document.querySelector("#content").scrollTop = anchor.offsetTop
       //这里会有个注意点，如果父元素(#content)的height不是小于或等于锚点子元素的高度的话，
       // 就会有后面的锚点子元素高度不足撑到可见区域顶部的情况，这时可能就要添加判断了
  })},
  jumpview4(){
    this.$router.push('/link/view4')
  }
}
}
</script>

<style lang="less" scoped>
.container{
  display: flex;
  position: relative;
  .menu{
    flex:1;
    background: red;
    height: 150px;
    .menuitem{
      background: #FF4D4D;
      text-align: center;
      margin-top: 20px;

    }
  }
  .content{
    height: 400px;
    flex:3;
    background: blue;
    overflow-y: scroll;
    .md{
      height: 400px;
      margin-top: 20px;
    }
  }
}
.isp{
  color:blue;
  width: 300px;
  height: 300px;
  background-color: green;
}
.fade-enter-active, .fade-leave-active{//定义过渡持续过程，注意这两个要定义在v-enter和v-leave之前，否则无效
  transition:all 2s ease;//这里的属性all指的是下面-enter 和-leave-to中的定义的所有属性
}
.fade-enter, .fade-leave-to{//.fade-enter定义触发v-if为true时的初始样式,.fade-leave-to定义v-if被触发为false后最后一刻的样式
  color:red;
  width: 100px;
  height: 100px;
}

</style>
