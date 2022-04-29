<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-18 17:02:36
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-29 16:08:51
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
import { useUserStore } from "@/store/modules/user";
const $router = useRouter();
const urlClick = async () => {
  let username = "admin";
  let password = "12345678";
  const res = await useUserStore().login({
    username,
    password,
  });
  if (res.code == 20000) $router.push({ path: "/" });
};
</script>
