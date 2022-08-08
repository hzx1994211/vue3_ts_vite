<!--
 * @Author: huangzhenxiang
 * @Date: 2022-08-08 17:55:43
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-08-08 17:55:45
-->
<template>
  <router-view />
  <!-- <router-view #default="{ Component }">
    <transition appear name="fade-transform" mode="out-in">
      <keep-alive :include="includeList.value">
        <component :is="Component" />
      </keep-alive>
    </transition>
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
