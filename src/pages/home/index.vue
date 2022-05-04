<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-22 14:44:07
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-05-04 17:31:32
-->
<template>
  <div>
    <div class="home-title">
      <el-row>
        <el-col :span="6" :offset="2">
          <el-input v-model="state.input1" size="large" class="w-50 m-2" placeholder="Please Input" />
        </el-col>
        <el-col :span="6" :offset="2">
          <el-input v-model="state.input2" size="large" class="w-50 m-2" placeholder="Please Input" />
        </el-col>
        <el-col :span="6" :offset="2">
          <el-input v-model="state.input3" size="large" class="w-50 m-2" placeholder="Please Input" />
        </el-col>
      </el-row>

      <div class="home-title_right">
        <el-button type="primary" size="large" :loading="state.loading">查询</el-button>
        <el-button style="margin-left:20px" size="large" type="primary" :loading="state.loading">重置</el-button>
      </div>
    </div>
    <div class="home-main">
      <el-table :data="state.tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <div class="home-pagination_block">
        <el-pagination v-model:currentPage="state.currentPage" v-model:page-size="state.pageSize" :page-sizes="[100, 200, 300, 400]" :small="state.small" :disabled="state.disabled" :background="state.background" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="state.handleSizeChange" @current-change="state.handleCurrentChange" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
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
const state = reactive({
  num: 0,
  disabled: false,
  small: false,
  background: false,
  loading: false,
  tableData: data,
  currentPage: 4,
  pageSize: 100,
  input1: "",
  input2: "",
  input3: "",
  handleCurrentChange: (val: number) => {
    state.currentPage = val;
    console.log(`current page: ${val}`, state.currentPage);
  },
  handleSizeChange: (val: number) => {
    console.log(`${val} items per page`);
  },
});
</script>

<style lang="scss" scoped>
.home-title {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    flex: 1;
  }
  .home-title_right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.home-pagination_block + .home-pagination_block {
  margin-top: 10px;
}
</style>