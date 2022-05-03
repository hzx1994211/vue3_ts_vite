<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-22 15:49:52
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 14:18:20
-->
<template>
  <div class="side-bar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu active-text-color="#ffd04b" :unique-opened="true" background-color="#545c64" class="el-menu-vertical" :default-active="activeMenu" text-color="#fff" @open="handleOpen" @close="handleClose">
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
//获取默认展开的菜单栏
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
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
}
@mixin tip-line {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #66b1ff;
  }
}

.el-scrollbar {
  height: 100%;
}

.has-logo {
  .el-scrollbar {
    // 84px 是 logo 区域的 height
    height: calc(100% - 60px);
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}

::v-deep(.el-menu-item),
::v-deep(.el-sub-menu__title),
::v-deep(.el-sub-menu .el-menu-item) {
  height: 60px;
  line-height: 60px;
  &:hover {
    background-color: #ffffff10;
  }
  display: block;
  * {
    vertical-align: middle;
  }
}

::v-deep(.el-menu-item) {
  padding-left: 70px !important;
  &.is-active {
    @include tip-line;
  }
}

.el-menu--collapse {
  ::v-deep(.el-sub-menu) {
    &.is-active {
      .el-sub-menu__title {
        color: #fff !important;
        @include tip-line;
      }
    }
  }
}
</style>
<style lang="scss">
.sidebar-container {
  // 重置当前页面的 element-plus css, ，注意，虽然没有加 scoped 标识，但是被该页面的 sidebar-container 类名包裹，所以不会影响其他页面
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
  .el-scrollbar__view {
    height: 100%;
  }
  .el-scrollbar__bar {
    &.is-vertical {
      right: 0;
    }
    &.is-horizontal {
      display: none;
    }
  }
}
</style>
