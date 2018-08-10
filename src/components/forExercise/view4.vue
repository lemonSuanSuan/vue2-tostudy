<!-- 使用渲染函数而不使用模板的示例 -->
<template lang="html">
  <div>hello,我是333 <button @click="backto">返回上一页</button></div>
</template>

<script>
export default {
  methods:{
    backto(){
      console.log("hhh");
      this.$router.go(-1);
}}}
</script>

<style lang="css">
</style>
