<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-21 16:49:24
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-21 16:49:26
-->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- :include="cachedViews" -->
      <!-- :key="key" -->
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>


<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px - 43px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
