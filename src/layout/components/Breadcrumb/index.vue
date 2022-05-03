<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-28 11:25:36
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 15:02:02
-->
<template>
  <el-breadcrumb class="app-breadcrumb">
    <el-breadcrumb-item v-for="(route,index) in state.breadcrumbs" :key="route.path">
      <span v-if="route.redirect === 'noRedirect' || index === state.breadcrumbs.length - 1" class="no-redirect">{{
          route.meta.title
        }}</span>
      <a v-else @click.prevent="state.handleLink(route)">
        {{ route.meta.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { reactive, watch, onBeforeMount } from "vue";
import { useRoute, useRouter, RouteLocationMatched } from "vue-router";
import { compile } from "path-to-regexp";
const route = useRoute();
const router = useRouter();
const pathCompile = (path: string) => {
  const { params } = route;
  const toPath = compile(path);
  return toPath(params);
};

const state = reactive({
  breadcrumbs: [] as Array<RouteLocationMatched>,
  getBreadcrumb: () => {
    const matched = route.matched.filter(
      (item) => item.meta && item.meta.title
    );
    state.breadcrumbs = matched.filter((item) => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false;
    });
  },
  //添加router
  handleLink(item: any) {
    console.log(item, "--item");

    const { redirect, path } = item;
    if (redirect) {
      router.push(redirect).catch((err) => {
        console.warn(err);
      });
      return;
    }
    router.push(pathCompile(path)).catch((err) => {
      console.warn(err);
    });
  },
});
watch(
  () => route.path,
  (path) => {
    if (path.startsWith("/redirect/")) {
      return;
    }
    state.getBreadcrumb();
  }
);
//解决刷新面包屑丢失
onBeforeMount(() => {
  state.getBreadcrumb();
});
</script>
<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
