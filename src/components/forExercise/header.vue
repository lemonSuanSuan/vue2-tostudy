<template lang="html">
  <div class="header">
    <mu-appbar style="width: 100%;" color="primary">
  <mu-button icon slot="left">
    <mu-icon value="arrow_back"></mu-icon>
  </mu-button>
  柠檬
  <mu-menu slot="right">
    <mu-button icon>
    <mu-icon value="more_vert"></mu-icon>
  </mu-button>
    <!-- slot="content"是菜单内容插槽 -->
    <mu-list slot="content">
      <mu-list-item button href="https://www.baidu.com">
        <mu-list-item-content>
          <mu-list-item-title>分享</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-content>
          <mu-list-item-title>退出</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-menu>
</mu-appbar>
<!-- 测试 -->
<!-- <mu-container>fgdsfgggg</mu-container> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.mu-item{
  height:30px;
    border-bottom: 1px solid beige;
}
.mu-item-content{
  color: #8AAFF1;
}

</style>
