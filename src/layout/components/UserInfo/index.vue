<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-28 11:36:58
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-03 15:46:18
-->
<template>
  <div class="user">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <img src="@/assets/image/profile.jpg" alt="">
        <span class="user-name">{{user.name}}</span>
        <el-icon class="el-icon--right ">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in list" :key="item.value" :command="item.value">{{item.label}}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";
const menuList = [
  {
    label: "个人中心",
    value: "user",
  },
  {
    label: "退出登陆",
    value: "out",
  },
];
const store = useUserStore();
const list = reactive(menuList);
const user = reactive({
  name: "hzx",
});
function handleCommand(item: string | number | object) {
  if (item == "out") {
    store.logout();
    window.location.reload();
  }
}
</script>
<style lang="scss" scoped>
.user {
  .el-dropdown-link {
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      display: inline-block;
      cursor: pointer;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
}
</style>