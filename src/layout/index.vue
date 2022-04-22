<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-21 16:21:11
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-22 15:50:44
-->
<template>
  <div class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <!-- 左侧 -->
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <!-- 头部/面包屑 -->
        <navbar />
      </div>
      <!-- 渲染内容 -->
      <app-main />
    </div>
  </div>
</template>
<script lang="ts" setup>
import appMain from "./components/AppMain.vue";
import navbar from "./components/NavBar.vue";
import sidebar from "./components/SideBar.vue";
import { ref } from "vue";
const fixedHeader = ref(true);
</script>
