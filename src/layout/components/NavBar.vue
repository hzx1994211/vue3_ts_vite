<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-22 15:49:29
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-28 11:41:06
-->
<template>
  <div class="nav-bar">
    <div class="nav-bar_logo">
      <router-link class="logo-link" to="/">
        <img id="img_4B2FD02F58B7FAB0F3D4E" src="@/assets/logo_title.png" />
      </router-link>
    </div>
    <div class="nav-bar_box">
      <div class="box_left">
        <Breadcrumb />
      </div>
      <div class="box-right">
        <UserInfo />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import Breadcrumb from "./Breadcrumb/index.vue";
import UserInfo from "./UserInfo/index.vue";
const state = reactive({
  num: 0,
});
</script>
<style lang="scss" scoped>
.nav-bar {
  height: 100%;
  display: flex;
  justify-content: space-between;
  .nav-bar_logo {
    width: 200px;
    display: flex;
    justify-items: center;
    align-items: center;
    .logo-link {
      width: 100%;
      text-align: center;
    }
    img {
      height: 32px;
    }
  }
  .nav-bar_box {
    width: calc(100vw - 200px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .box-right {
      padding-right: 20px;
    }
  }
}
</style>
