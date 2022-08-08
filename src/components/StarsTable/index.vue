<!--
 * @Author: huangzhenxiang
 * @Date: 2022-04-09 14:24:53
 * @LastEditors: huangzhenxiang
 * @LastEditTime: 2022-04-28 10:45:05
-->
<template>
  <div>
    <el-table ref="table" :height="height" v-loading="dataSource.loading" style="width: 100%" :class="{ 'no-data': !dataSource.data || !dataSource.data.length }" :data="dataSource.data" @row-click="getRowData" @selection-change="handleSelectionChange">
      <!-- 是否有多选 -->
      <el-table-column v-if="dataSource.isSelection" :selectable="dataSource.selectable" type="selection" :width="dataSource.selectionWidth || 50" align="center" />
      <!-- 是否需要序号 -->
      <el-table-column v-if="dataSource.isIndex" type="index" label="序号" width="55" align="center" />

      <template v-for="item in dataSource.cols">
        <!-- 表格的列展示 特殊情况处理 比如要输入框 显示图片 -->
        <el-table-column v-if="item.isTemplate" :key="item.prop" v-bind="item">
          <template slot-scope="scope">
            <!-- 比如要输入框 显示图片等等 自己定义 -->
            <slot :name="item.prop" :params="scope.row" />
          </template>
        </el-table-column>
        <!-- 需要特殊颜色显示字体-->
        <el-table-column v-if="item.isSpecial" :key="item.prop" v-bind="item" align="center">
          <template slot-scope="scope">
            <span :class="item.styleName">{{ item.isSpecial(scope.row[scope.column.property]) }}</span>
          </template>
        </el-table-column>
        <!-- 需要带图标的某列，带回调事件-->
        <el-table-column v-if="item.isIcon" :key="item.prop" v-bind="item" align="center">
          <template slot-scope="scope">
            <!-- 阻止事件冒泡 -->
            <span @click.stop="">
              <span>{{ item.filter(scope.row[scope.column.property]) }}</span>
              <i v-if="item.icon" :class="[
                  item.icon(scope.row[scope.column.property]),
                  'icon-normal',
                ]" @click="item.handlerClick(scope.row)" />
            </span>
            <!-- 比如要输入框 显示图片等等 自己定义 -->
            <slot :name="item.prop" :params="scope" />
          </template>
        </el-table-column>
        <!-- 兼容图片带tooltip -->
        <el-table-column v-if="item.isImagePopover" :key="item.prop" v-bind="item" align="center">
          <template slot-scope="scope">
            <el-popover placement="right" title="" trigger="hover">
              <img slot="reference" class="reference-img" :src="scope.row[scope.column.url]" alt="" />
            </el-popover>
          </template>
        </el-table-column>
        <!-- 大部分适用 -->
        <el-table-column v-if="
            !item.isImagePopover &&!item.isTemplate &&!item.isSpecial &&!item.isIcon" :key="item.prop" v-bind="item.isCodeTableFormatter ? Object.assign({ formatter: item.isCodeTableFormatter }, item) : item" align="center" show-overflow-tooltip />
      </template>
      <!-- 是否有操作列 -->
      <!-- 没有数据时候不固定列 -->
      <el-table-column v-if="dataSource.isOperation" :show-overflow-tooltip="dataSource.operation.overflowTooltip" v-bind="
          dataSource.data && dataSource.data.length ? { fixed: 'right' } : null
        " style="margin-right: 20px" class-name="handle-td" label-class-name="tc" :width="dataSource.operation.width" :label="dataSource.operation.label" align="center">
        <!-- UI统一一排放3个，4个以上出现更多 -->
        <template slot-scope="scope">
          <!-- 三个一排的情况，去掉隐藏的按钮后的长度 -->
          <template v-if="dataSource.operation.data.length > 0">
            <!-- 阻止事件冒泡 -->
            <div class="handle-td_btn" @click.stop="">
              <div class="td-btn_box" v-for="item in dataSource.operation.data" :key="item.label">
                <template v-if="item.type !== 'icon'">
                  <!-- v-hasPermi="item.permission" -->
                  <el-button v-bind="item" :type="item.type ? item.type : ''" size="mini" @click.native.prevent="
                      item.handleRow(scope.$index, scope.row, item.label)
                    ">
                    {{ item.label }}
                  </el-button>
                </template>
                <template v-else>
                  <i :class="[icon, item.icon]" v-bind="item" @click="item.handleRow(scope.$index, scope.row, item.label)" />
                </template>
              </div>
            </div>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <div class="stars-table_page">
      <el-pagination v-if="dataSource.pageData.total > 0" :current-page="dataSource.pageData.pageNum" :page-sizes="
          dataSource.pageData.pageSizes
            ? dataSource.pageData.pageSizes
            : [10, 20, 30, 50]
        " :page-size="dataSource.pageData.pageSize" layout="total, sizes, prev, pager, next" :total="dataSource.pageData.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>
<script>
export default {
  name: "StarsTable",
  // 接收父组件传递过来的值
  props: {
    //  表格数据和表格部分属性的对象
    // eslint-disable-next-line vue/require-default-prop
    dataSource: {
      type: Object,
    },
    height: {
      type: Number,
      default: 560
    }
  },
  data () {
    return {};
  },
  watch: {
    "dataSource.cols": {
      // 监听表格列变化
      deep: true,
      handler () {
        // 解决表格列变动的抖动问题
        this.$nextTick(this.$refs.table.doLayout);
      },
    },
  },
  methods: {
    handleAdd (name) {
      console.log(name);
      this.$emit("toolMsg", name);
    },
    handleRow (index, row, lable) {
      console.log(index, row, lable);
    },
    handleSizeChange (val) {
      this.$emit("changeSize", val);
      console.log(`每页 ${val} 条`);
    },
    //分页
    handleCurrentChange (val) {
      this.$emit("changeNum", val);
      console.log(`当前页: ${val}`);
    },
    //选择数量
    handleSelectionChange (val) {
      this.$emit("selectNum", val);
    },
    // 点击行即可选中
    getRowData (row) {
      console.log(row, '--row');
      if (this.dataSource.isRowData) {
        //选中行
        this.$refs.table.toggleRowSelection(row);
        this.$emit('handRowData', row)
      }
    },
    handClickParams (row) {
      console.log(row, '---ss');
      this.$emit('handParams', row)
    }
  },
};
</script>
<style lang="scss" scoped>
.stars-table_page {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.handle-td_btn {
  display: flex;
  justify-content: center;
}
.handle-td_btn div {
  margin-left: 5px;
}
.reference-img {
  width: 40px;
  height: 40px;
  background-size: 100% 100%;
  border-radius: 4px;
}
.image-popover {
  width: 200px;
  height: 200px;
  background-size: 100% 100%;
}
.icon {
  width: 25px;
  font-size: 20px;
  font-weight: bold;
}
</style>
