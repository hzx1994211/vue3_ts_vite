<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:02:36
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-22 15:00:08
 * @FilePath: \vite_vue3_ts\src\pages\login\Login.vue
-->
<template>
  <div>
    <div>登陆页面</div>
    <div @click="urlClick">点击跳转</div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const $router = useRouter();
const urlClick = () => {
  $router.push({ path: "/" });
};
</script>
