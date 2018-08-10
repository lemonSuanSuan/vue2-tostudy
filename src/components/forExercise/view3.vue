
<template lang="html">
  <div>
    <!-- 使用vuex来管理状态的简单探索，很好-->
    <yd-button type="primary" @click.native="increment">自增</yd-button>
    <yd-button type="primary" @click.native="decrement">自减</yd-button>
    <input type="text" v-model="name" @keyup.enter="changename">
    <div>{{count}}</div>
    <div>{{addone}}</div>
    <div class="test">{{this.$store.state.username}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:''
    }
  },
  computed:{
    count:function(){return this.$store.state.count},
    addone:function(){return this.$store.getters.addone},
  },
  methods:{
    increment(){
      this.$store.commit('increment')//不用actions直接调用commit
    },
    decrement(){
      this.$store.commit('decrement')
    },
    changename(){
      this.$store.dispatch('changeusername',this.name)//用actions来触发，还传了参数
    }
  }
}
</script>

<style lang="less">
</style>
