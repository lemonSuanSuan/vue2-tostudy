<template lang="html">
  <div>
    <div v-for="item in member"><h1>{{item.name}}{{item.age}}</h1></div>
    <button type="button" name="button" @click="addmember">添加成员</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:'香叶',
      age:12
    }
  },
  props:{
    member:{//声明一个member属性，他是数组类型并且必须传入(传入是指在父组件里绑定父组件的数据到这里声明的props)
      type:Array,//声明传入的这个参数必须是数组
      required:true//声明必须传入这个参数,不传入会出错
    },
    // saysomething:{
    //   type:String,
    //   required:true
    // }
  },
  methods:{
    addmember(){//通过按钮触发这个方法，这个方法的作用就是通过$emit向父组件传送自定义是事件和参数（可选）
      this.$emit('addmem',{'name':this.name,'age':this.age})//这里子组件通过$emit发送自定义事件到父组件，this.$emit(事件名,参数)
    }
  }
}
</script>

<style lang="css">
</style>
