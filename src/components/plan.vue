<template lang="html">
<div class="plan">
  <div class="menu">
    <div class="menuitem" :class="{'active':this.currentComponent=='plan-one'}" @click="toshow('plan-one')">
      <div class="menuicon bgcolor-red">-</div>
      <span class="color-red">每天一减</span>
    </div>
    <div class="menuitem" :class="{'active':this.currentComponent=='plan-two'}" @click="toshow('plan-two')">
      <div class="menuicon bgcolor-blue">+</div>
      <span class="color-blue">每天一加</span>
    </div>
  </div>
  <div class="motto">
    <b>每天，不过是加加减减</b>
  </div>
  <!-- 使用keep-alive缓存动态组件,为了切换时保留输入的数据 -->
  <keep-alive>
    <component :is="currentComponent" v-bind="currentProperties" v-on="currentEvent"></component>
  </keep-alive>

</div>
</template>

<script>
// import planone from './planone'
export default {
  data(){
    return{
      currentComponent:'plan-one',
      weight:{
        new:'',
        old:45,
        list:[
          {id:1,detail:'一顿也不能少'},
          {id:2,detail:'说我不用减肥的人都是坏人'},
          {id:3,detail:'人头攒动的街头，总会有一个发传单的人拨开人群，目光坚定，心无旁骛地单单只朝我走来，微笑着递给我一张别人都得不到的传单：减肥广告！'},
          {id:4,detail:'不是不想减肥，而是，敌人太强大'},
        ]
      }
    }
  },
  components:{
    'plan-one':resolve=>require(['./planone'],resolve),
    'plan-two':resolve=>require(['./plantwo'],resolve),

  },
  computed: {//注意computed里不要使用箭头函数
      currentProperties: function() {
      if (this.currentComponent === 'plan-one') {
        return {number: this.weight}
      }
    },
    currentEvent: function() {
    if (this.currentComponent === 'plan-one') {
      return {inputevent: this.parentEvent}
    }
    }
  },
  methods:{
    toshow(componentName){
      this.currentComponent=componentName;

    },
    parentEvent(val){//这里通过输出到控制台可以看到如果子组件不回传并赋值的话，父组件的mes是不会变的。

      this.weight.new=val;
      console.log(this.weight.new);
    },
  }
}
</script>

<style lang="less" scoped>
.plan{
  height: 100%;
  .active{
    background: rgba(253, 216, 53, 0.3);
    border: 1px solid blue;/*no*/
  }
  .bgcolor-red{
    background-color: red;
  }
  .bgcolor-blue{
    background-color: blue;
  }
  .color-blue{
    color: blue;
  }
  .color-red{
    color: red;
  }
  .menu{
    background-color: rgba(132, 129, 116, 0.38);
    .menuitem{
      display: flex;
      align-items: center;
      padding: 10px;
      font-size: 30px;
      .menuicon{
        text-align: center;
        line-height: 100px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        color: #fff;
        font-size: 24px;/*no*/
        margin-right: 20px;
      }
    }
  }
  .motto{
    margin: 6px 0;
    background: rgba(253, 216, 53, 0.3);

    padding: 10px;
    font-size: 20px;/*no*/
  }

}

</style>
