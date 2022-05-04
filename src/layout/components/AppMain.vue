<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-21 16:49:24
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-04 18:02:56
-->
<template>
  <div class="app-main">
    <router-view v-slot="{ Component,route}">
      <transition>
        <component :is="Component" :name="route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>


<style lang="scss" scoped>
.app-main {
  padding: 20px;
}
/* 下滑 */
.down-enter-active,
.down-leave-active {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
.down-enter-from {
  transform: translate3d(0, -50%, 0);
  opacity: 0.2;
}
.down-leave-to {
  transform: translate3d(0, 50%, 0);
  opacity: 0.2;
}
</style>
