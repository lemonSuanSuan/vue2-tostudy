<template lang="html">
  <div>
    <yd-rollnotice autoplay="2000">
        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
    </yd-rollnotice>
    <div class="container">
      <div class="menu">
        <ul>
          <li class="menuitem" @click="toshow('first-com')">显示组件1</li>
          <li class="menuitem" @click="toshow('second-com')">显示组件2</li>
        </ul>
      </div>
      <!-- 动态组件 -->

        <div class="dyn-component">
          <keep-alive include="first-com">
              <component :is="show" v-bind="currentProperties" v-on="currentEvent"></component>
          </keep-alive>
        </div>
    </div>
    <div><button @click="jumpview4">跳转到view4</button></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:'first-com',
      mes:'123',

    }
  },
  computed: {//注意computed里不要使用箭头函数
      currentProperties: function() {
      if (this.show === 'first-com') {
        return {message: this.mes}
      }
    },
    currentEvent: function() {
    if (this.show === 'first-com') {
      return {inputevent: this.parentEvent}
    }
    }
  },
  methods:{
    toshow(componentName){
      this.show=componentName;
    },
    parentEvent(val){//这里通过输出到控制台可以看到如果子组件不回传并复制的话，父组件的mes是不会变的。
      console.log("使用子组件回传的值赋予给父组件的mes值之前"+this.mes);
      console.log("传回来的是"+val);
      this.mes=val;
    },
    jumpview4(){
      this.$router.push('/link/view4')
    }
  },
  mounted(){console.log("父组件重新渲染");},
  beforeDestroy(){console.log("父组件被销毁");},

  components:{
    //firsr-com里通过下面可以验证在动态组件中：
    // 1.如果要缓存input里的输入v-model绑定子组件的data childmessage,把props赋给childmessage即可
    // 绑定子组件data时，data会根据props对应的父组件数据即输入变化而变化，但是在子组件中输出props和computed不会不会变化
    // 2.如果不需要缓存的话直接把v-model绑定props即可，即v-model=message.(这样绑定的话就算缓存了切换动态组件会还原props初始值，对切换路由倒不会还原，很迷)
    //绑定子组件的props时，即v-model=message的话，子组件的data不会变化，props和computed会根据输入变化而变化
    //3.最后我发现绑定computed的话因为计算属性自带缓存功能所以不用keep-alive也能保存input
    'first-com':{template:'<div><lable>输入</lable><input v-model="computedchildmessage"/></button><div>{{childmessage}}</div><div>{{computedchildmessage}}</div><div>{{message}}</div></div>',
                data(){return{
                  childmessage:this.message
                }},
                props:['message'],
                computed:{
                  computedchildmessage:{
                    get:function(){
                      console.log("这里调用计算属性的get");
                      console.log("prop:"+this.message);
                      return this.message;},
                    set:function(val){
                      console.log("这里调用set,传数据回去给父组件");
                      this.$emit('inputevent',val)
                    }
                  }
                },
                // watch:{
                //   message(newValue, oldValue) {
                //     console.log("没有监听吗");
                //   console.log(newValue);
                //   this.computedchildmessage=this.message;
                //   }
                // },
                methods:{
                  showcomputed(){
                    // console.log("进入方法了吗");
                    console.log(this.computedchildmessage)
                  }
                },
                created(){
                  console.log("进入created了");
                 this.computedchildmessage = this.message//这一句会使得在创建后调用计算属性computedchildmessage的set方法，好像不写也没关系
               },
               activated:function(){console.log("组件1进入activated")},
               deactivated:function(){console.log("组件1进入deactivated");},

                mounted(){console.log("渲染组件1");},
                beforeDestroy(){console.log("销毁first");}},
    'second-com':{template:'<div>这是子组件22222222</div>',mounted(){console.log("渲染组件2");},beforeDestroy(){console.log("销毁2");},
    activated:function(){console.log("组件2进入activated")},
    deactivated:function(){console.log("组件2进入deactivated");}}
  }
}
</script>

<style lang="less" scoped>
.container{
  display: flex;

  .menu{
    flex:1;
    background: red;
    .menuitem{
      background: #FF4D4D;
      text-align: center;
      margin-top: 20px;

    }
  }
  .dyn-component{
    flex:3;
    background: blue;
  }
}

</style>
