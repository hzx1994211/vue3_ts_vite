<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-28 11:36:58
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-28 11:40:39
-->
<template>
  <div class="user">
    <div>{{user}}</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const user = reactive({
  name: "hzx",
});
</script>
