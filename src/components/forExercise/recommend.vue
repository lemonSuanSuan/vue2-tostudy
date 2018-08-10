<template lang="html">
  <section>
      <h1>我要推荐</h1>
      <!-- 子组件的props绑定父组件的数据 ，自定义事件绑定方法-->
      <recommend-child
              :member="recarray"
              @addmem="parentaddmem"
              ></recommend-child>
  </section>
</template>

<script>
import recommendchild from './recommendchild';
export default {
  data(){
    return{
      recarray:[
        {name:'小明',age:20},
        {name:'小红',age:19},
        {name:'大华',age:13}
      ],
      somebody:'',
      words:''
    }
  },
  components:{//注册子组件
    'recommend-child':recommendchild
  },
  methods:{
    parentaddmem(mem){//mem为传过来的参数对象
      this.recarray.push(mem);//将子组件传过来的参数添加到数组
      console.log(this.recarray);
    }

  }
}
</script>

<style lang="css">
</style>
