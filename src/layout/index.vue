<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-21 16:21:11
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 11:41:55
-->
<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>
        <div :class="['navbar']">
          <!-- 头部/面包屑 -->
          <navbar />
        </div>
      </el-header>
      <el-container>
        <el-aside class="sidebar">
          <!-- 左侧 -->
          <sidebar class="sidebar-container" />
        </el-aside>
        <el-main>
          <div class="app-wrapper-main">
            <!-- 渲染内容 -->
            <app-main />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import appMain from "./components/AppMain.vue";
import navbar from "./components/NavBar/index.vue";
import sidebar from "./components/Sidebar/index.vue";
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.app-wrapper {
  background: #f2f2f2;
  .navbar {
    height: 60px;
    width: 100vw;
    background-color: #7b1f20;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
  .sidebar {
    min-height: calc(100vh - 60px);
    width: 200px;
    background-color: #fff;
    box-shadow: 0px 0 6px rgb(41 7 0 / 15%);
  }
  .app-wrapper-main {
    background: #fff;
    padding: 10px;
    height: calc(100vh - 120px);
  }
}
</style>
