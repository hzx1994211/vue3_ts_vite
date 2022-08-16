<!--
 * @Author: huangzhenxiang
 * @Date: 2022-08-08 17:55:43
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-08-16 09:57:36
-->
<template>
  <router-view />
  <!-- 由于keep-alive是根据script的name来缓存， cli5.0脚手架不好配置script的组件name 所以该方法暂注释 
        但是vite可以， 不过需要下载插件 npm i vite-plugin-vue-setup-extend -D
        https://www.cnblogs.com/huoshengmiao/p/15964628.html
  -->
  <!-- <router-view #default="{ Component }">
    <transition appear name="fade-transform" mode="out-in">
      <keep-alive :include="includeList.value">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view> -->

  <!-- 缓存 -->
  <!-- :key="$route.path" :include="includeList.value" :exclude="excludeList.value" -->
  <!-- <router-view #default="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.path" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" :key="$route.path" v-if="!$route.meta.keepAlive" />
  </router-view> -->
</template>
<script lang="ts" setup>
// import { useRoute } from 'vue-router'
// import { watch, computed } from 'vue'
// // import { useStore } from '@/store/index'
// const store = useStore()
// const route = useRoute()
// const includeList: any = computed(() => {
//   return store.state.appStore.includeList
// })
// // const excludeList: any = computed(() => {
// //   return store.state.appStore.excludeList
// // })
// watch(() => route, (val) => {
//   if (val.meta.keepAlive && includeList.value.indexOf(val.name) === -1) {
//     // store.commit('appStore/setIncludeList', val.name)
//   }
//   // else {
//   //   store.commit('appStore/setExcludeList', val.name)
//   // }
//   console.log(val, '--val', includeList.value)
// }, { immediate: true, deep: true })
</script>
