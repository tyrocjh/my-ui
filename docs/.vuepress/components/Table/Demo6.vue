<template>
  <div class="demo-box">
    <d-table
      :header-list="headerList"
      :table-list="tableList"
    >
      <el-table-column slot="status" label="状态" prop="status" align="center">
        <template slot-scope="scope">
          {{ scope.row.status ? "合格" : "不合格" }}
        </template>
      </el-table-column>
      <el-table-column slot="operates" label="操作" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="handleClick(scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </d-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'phone', label: '电话' },
        { prop: 'address', label: '地址' },
        { slot: 'status' },
        { slot: 'operates' },
      ],
      tableList: [
        { date: '2020-01-02', name: '小红', phone: 13548546235, address: '广州', status: true },
        { date: '2022-02-02', name: '小白', phone: 13587452632, address: '云浮', status: false },
        { date: '2018-11-03', name: '小黄', phone: 13521236954, address: '云南', status: true },
        { date: '2021-05-12', name: '小绿', phone: 18542563259, address: '广西', status: false },
        { date: '2011-01-02', name: '小蓝', phone: 13695478523, address: '深圳', status: true },
      ]
    }
  },
  methods: {
    handleClick(row) {
      this.$message.success(row.name)
    }
  }
}
</script>
