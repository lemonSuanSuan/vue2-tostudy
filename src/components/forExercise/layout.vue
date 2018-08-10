<template lang="html">
  <div class="layout">
    <div class="header_wrap">
      <slot name="header">
        <template>
         <mu-appbar :title="title" style="width: 100%;" color="primary" >
          <mu-button icon slot="left">
            <mu-icon value="arrow_back"></mu-icon>
          </mu-button>
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
        </template>
      </slot>
    </div>
    <div class="content_wrap">
      <slot><div class="test"></div></slot>
    </div>
    <div class="footer_wrap">
      <template>
            <mu-bottom-nav>
              <mu-bottom-nav-item title="首页" icon="home"></mu-bottom-nav-item>
              <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
              <mu-bottom-nav-item title="我" icon="perm_identity"></mu-bottom-nav-item>
            </mu-bottom-nav>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {//接收来自父组件的页面标题
      type: String,
      default: '',
    }
  }
}

</script>

<style lang="less">
.layout{
  width: 100%;
  height: 100%;
  overflow-y: auto;//如果内容溢出框，则提供滚动机制
  .header_wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999;//设置z-index值为999以保证排在最上面
  }
  .content_wrap {
    padding: 56px 0 50px 0;
    //从浏览器可以看到header的高度为56px，所以设置内容div的上内边距为56px使得内容不会被掩盖
    background: #f5f5f5;
    .test{
      background-color: green;
      height: 100px;
    }
  }
  .footer_wrap{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
}
</style>
