<!--
 * @Author: huangzhenxiang
 * @Date: 2022-05-03 09:32:16
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 15:24:39
-->
<template>
  <!-- 'simple-mode': isCollapse,  -->
  <div v-if="!item.meta || !item.meta.hidden" :class="{ 'first-level': isFirstLevel }">
    <!-- !alwaysShowRootMenu &&  -->
    <template v-if="theOnlyOneChild && !theOnlyOneChild.children">
      <SidebarItemLink v-if="theOnlyOneChild.meta" :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <svg-icon v-if="theOnlyOneChild.meta.icon" :name="String(theOnlyOneChild.meta.icon)" />
          <template v-if="theOnlyOneChild.meta.title" #title>
            {{ theOnlyOneChild.meta.title }}
          </template>
        </el-menu-item>
      </SidebarItemLink>
    </template>

    <el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <svg-icon v-if="item.meta && item.meta.icon" :name="String(item.meta.icon)" />
        <span v-if="item.meta && item.meta.title">{{ item.meta.title }}</span>
      </template>
      <template v-if="item.children">
        <!-- :is-collapse="isCollapse" -->
        <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :is-first-level="false" :base-path="resolvePath(child.path)" />
      </template>
    </el-sub-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, PropType, computed } from "vue";
import { RouteRecordRaw } from "vue-router";
import { isExternal } from "@/utils/validate";
import path from "path-browserify";
import SidebarItemLink from "./SidebarItemLink.vue";
const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true,
  },
  isCollapse: {
    type: Boolean,
    required: false,
  },
  isFirstLevel: {
    type: Boolean,
    default: true,
  },
  basePath: {
    type: String,
    required: true,
  },
});
// const alwaysShowRootMenu = computed(() => {
//   return !!(props.item.meta && props.item.meta.alwaysShow);
// });
//过滤不需要展示在菜单栏的路由
const showingChildNumber = computed(() => {
  if (props.item.children) {
    const showingChildren = props.item.children.filter((item) => {
      return !(item.meta && item.meta.hidden);
    });
    return showingChildren.length;
  }
  return 0;
});
//过滤只有一个菜单栏的路由
const theOnlyOneChild = computed(() => {
  if (showingChildNumber.value > 1) {
    return null;
  }
  if (props.item.children) {
    for (const child of props.item.children) {
      if (!child.meta || !child.meta.hidden) {
        return child;
      }
    }
  }
  // If there is no children, return itself with path removed,
  // because this.basePath already contains item's path information
  return { ...props.item, path: "" };
});
// console.log(theOnlyOneChild, "---theOnlyOneChild");
const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>

<style lang="scss" scoped>
.svg-icon {
  margin-right: 20px;
  min-width: 1em;
  font-size: 16px;
}

.simple-mode {
  &.first-level {
    ::v-deep(.el-sub-menu) {
      .el-sub-menu__icon-arrow {
        display: none;
      }
      span {
        visibility: hidden;
      }
    }
  }
}
</style>
