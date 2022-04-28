<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-22 14:44:07
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-28 16:34:17
-->
<template>
  <div>
    <div>{{num}}</div>
    <div @click="btnClick">点击事件</div>
    <div>
      <div class="home-title">
        <div class="home-title-left">
          左边
        </div>
        <div class="home-title-right">
          右边
        </div>
      </div>
      <div class="home-main">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
        <div class="home-pagination-block">
          <el-pagination v-model:currentPage="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
const data = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const tableData = reactive(data);
const num = ref(0);
const currentPage4 = ref(4);
const pageSize4 = ref(100);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
function btnClick() {
  num.value++;
  console.log(num, "----num");
}
</script>

<style lang="scss" scoped>
.home-title {
  display: flex;
  justify-content: space-between;
  & > div {
    flex: 1;
  }
}
.home-pagination-block + .home-pagination-block {
  margin-top: 10px;
}
</style>