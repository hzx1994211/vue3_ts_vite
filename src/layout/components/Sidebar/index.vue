<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-22 15:49:52
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 11:21:14
-->
<template>
  <div class="side-bar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical" default-active="1" text-color="#fff" @open="handleOpen" @close="handleClose">
        <!-- :is-collapse="isCollapse" -->
        <SidebarItem v-for="routeItem in routes" :key="routeItem.path" :item="routeItem" :base-path="routeItem.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";
import { usePermissionStore } from "@/store/modules/permission";
import SidebarItem from "./SidebarItem.vue";
const menuList = reactive([]);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const route = useRoute();

const routes = computed(() => {
  return usePermissionStore().routes;
});
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta !== null || meta !== undefined) {
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
  }
  return path;
});
</script>
<style lang="scss" scoped>
.side-bar {
  width: 200px;
  .el-menu-vertical {
    min-height: calc(100vh - 60px);
    .submenu-title-noDropdown {
      padding-left: 70px !important;
    }
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
}
</style>
