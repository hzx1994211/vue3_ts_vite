<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-22 15:49:52
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-28 15:30:24
-->
<template>
  <div class="side-bar">
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical" default-active="1" text-color="#fff" @open="handleOpen" @close="handleClose">
      <el-menu-item index="1">
        <el-icon>
          <location />
        </el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="1-1">用户列表</el-menu-item>
        <el-menu-item index="1-2">用户信息</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <span>系统管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <span>财务管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const menuList = reactive([]);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
.side-bar {
  width: 200px;
  .el-menu-vertical {
    min-height: calc(100vh - 60px);
  }
}
</style>
