#### (3) html

<template>
  <div class="app-container">
    <stars-table
      :data-source="dataSource"
      @selectNum="selectNum"
      @changeSize="changeSize"
      @changeNum="changeNum"
    >
    <!-- 插槽使用 -->
      <template #test="params">
        <span>{{params.params.test}}</span>
      </template>
    </stars-table>
  </div>
</template>
<script>
import StarsTable from '@/components/Stars/StarsTable'
export default {
  name: 'StarsTable',
  components: {StarsTable },
  data() {
    return {
      // 表格配置
      dataSource: {
        data: [
          {
            'id': 1,
            'appIssueTime': '2022-04-13',
            'appName': '版本01',
            'appVersion': '0.12.3',
            'appPlatform': 1,
            'appAutoUpdate': 1,
            'appDesc': 'dddd',
            'downloadAddr': 'www.baidu.com',
            'userName': 'hzx',
            'test': '003'
          },
          {
            'id': 2,
            'appIssueTime': '2022-04-13',
            'appName': '版本01',
            'appVersion': '0.12.3',
            'appPlatform': 1,
            'appAutoUpdate': 1,
            'appDesc': 'dddd',
            'downloadAddr': 'www.baidu.com',
            'userName': 'hzx',
            'test': '006'
          }
        ], // 表格数据
        cols: [
          {
            label: '发布时间',
            prop: 'appIssueTime',
            isCodeTableFormatter: function (val) {
              return new Date(val)
            }
          },
          {
            label: 'APP名称',
            prop: 'appName'
          },
          {
            label: '点击事件',
            prop: 'test',
            isTemplate: true //添加插槽
          },
          {
            label: 'APP版本',
            prop: 'appVersion'
          },
          {
            label: '平台',
            prop: 'appPlatform',
            isCodeTableFormatter: function (val) {
              if (val.appPlatform === 1) {
                return 'IOS'
              } else {
                return 'Android'
              }
            }
          },
          {
            label: '是否自动更新',
            prop: 'appAutoUpdate',
            isCodeTableFormatter: function (val) {
              if (val.appAutoUpdate === 1) {
                return '是'
              } else {
                return '否'
              }
            }
          },
          {
            label: '更新描述',
            prop: 'appDesc',
            width: 300
          },
          {
            label: '下载地址',
            prop: 'downloadAddr'
          },
          {
            label: '发布人',
            prop: 'userName'
          }
        ], // 表格的列数据
        isSelection: false, // 表格有多选时设置
        isOperation: true, // 表格有操作列时设置
        isIndex: true, // 列表序号
        loading: false, // loading
        isRowData: false, //点击行事件
        pageData: {
          total: 13, // 总条数
          pageSize: 10, // 每页数量
          pageNum: 1 // 页码
        },
        operation: {
          // 表格有操作列时设置
          label: '操作', // 列名
          width: '140', // 根据实际情况给宽度
          data: [
            {
              label: '删除', // 操作名称
              type: 'danger',
              permission: '2010702', // 后期这个操作的权限，用来控制权限
              handleRow: this.handleRow
            },
            {
              label: '编辑', // 操作名称
              type: 'danger',
              permission: '2010702', // 后期这个操作的权限，用来控制权限
              handleRow: this.handleRow
            },
          ]
        }
      },
      selected:[]
    }
  },
  created() {
  },
  methods: {
    // 表格操作列回调
    handleRow (index, row, lable) {
      this.$confirm('确认删除该版本?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('删除成功')
      })
    },
    // 改变每页数量
    changeSize (size) {
      this.dataSource.pageData.pageSize = size
    },
    // 改变页码
    changeNum (pageNum) {
      this.dataSource.pageData.pageNum = pageNum
    },
    // 多选事件
    selectNum (val) {
      this.selected = val
    },
    handParams (row) {
      console.log(row, '---row111');
    },
    testClick (r) {
      console.log(r, '--s');
    }
  }
}
</script>
