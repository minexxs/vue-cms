<template>
  <div class="app-container">
    <!-- Header 区域 ，使用的是 Mint-UI 中的 Header组件 -->
    <mt-header fixed title="黑马程序员·gz10期"></mt-header>

    <!-- 用来占位的容器 -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- 底部的Tabbar 使用的是 mui 中的 tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>


<script>

</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
}

h4 {
  color: red;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  // 注意：mui 咱们的 动画位移有冲突
  // transform: translateX(30px);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}
</style>
