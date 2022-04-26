<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-22 14:44:07
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-26 14:22:55
-->
<template>
  <div>
    <div>首页11111</div>
    <input list="listName" class="list">
    <datalist id="listName">
      <option value="value1" />
      <option value="value2" />
      <option value="value3" />
      <option value="value4" />
      <option value="value5" />
    </datalist>
    <div>{{num}}</div>
    <div @click="btnClick">点击事件</div>
  </div>
</template>
<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
let num = ref(0);
function btnClick() {
  num.value++;
  console.log(num, "----num");
}
</script>

<style lang="scss" scoped>
.list {
  border: 1px solid rgb(118, 118, 118);
}
</style>