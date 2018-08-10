<template lang="html">
  <div class="footer">
    <!-- <mu-container class="fc">测试而已</mu-container> -->
    <!-- 添加fc后在浏览器element可以看到 class="fc container"-->
    
      <mu-bottom-nav>
        <mu-bottom-nav-item title="首页" icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="我" icon="perm_identity"></mu-bottom-nav-item>
      </mu-bottom-nav>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.footer{
  position: fixed;
  width: 100%;
  bottom: 0;
}
.mu-bottom-nav-shift-wrapper{
  background-color: #f5f5f5;
}
/* 不想全局改变控件样式时，如何改变样式？比如<mu-container>默认样式有左右内边距8px,
我想更改左右内边距。做法如下：
给控件添加一个class即可,添加的类里面与原来的样式中有某些冲突时，冲突的会被自己添加的覆盖，
其他不冲突的样式则会正常都显示。类选择器的名字写添加的名字或者写浏览器检测到的控件的类和添加的类连着写，
中间不要有空格，如.fc.container,浏览器可以看到<mu-container>添加类fc后，
显示的class="fc container"。如果只写.container，会全局改变container
的样式*/
.fc.container{
  padding-right: 0px;
  padding-left: 0px;
  background-color: chocolate;
}
</style>
