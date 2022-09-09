<template>
  <div id="app">
    <d-pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.pageIndex"
      :limit.sync="listQuery.pageSize"
    />

    <el-button type="primary" @click="handleAdd">打开对话框</el-button>

    <br /><br />

    <d-steps :time-line-data-list="timeLineDataList" />

    <d-steps :time-line-data-list="timeLineDataList" :direction="direction" />

    <br /><br />

    <d-svg-icon icon-class="eye" />

    <br /><br />

    <d-input-password
      v-model="password"
      style="width:300px;"
      @update:clear="password = $event"
      @update:verify="verifyRes = $event"
      @change="changeFn1">
    </d-input-password>

    <br /><br />

    <div style="height:500px">1111111</div>
    <div style="height:500px">1111111</div>
    <div style="height:500px">1111111</div>

    <!-- 对话框 -->
    <d-dialog :show.sync="roomDlgShow" title="对话框" width="680px">
      内容
    </d-dialog>

    <d-backtop></d-backtop>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      listQuery: {
        pagination: true,
        pageIndex: 1,
        pageSize: 15,
      },
      total: 20,
      roomDlgShow: false,
      password: '',
      verifyRes: false,
      timeLineDataList: [
        { time: '2021-04-01', color: 'A', label: '发起申请', info: '张三' },
        { time: '2021-05-01', color: 'B', label: '直接上级审批', info: '李四'},
        { time: '2021-06-01', color: 'D', label: '分管中心审批', info: '王五' },
        { time: '2021-07-01', color: 'A', label: '完成' }
      ],
      direction: 'vertical',
    }
  },
  methods: {
    handleAdd() {
      this.roomDlgShow = true
    },
    changeFn1() {
      console.log(this.password, this.verifyRes)
    },
  }
}
</script>
