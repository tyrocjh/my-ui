<template>
  <div class="demo-box">
    <el-button type="primary" @click="dlgShow = true">点击打开Dialog</el-button>

    <d-dialog
      :visible.sync="dlgShow"
      title="对话框"
      need-action
      confirm-btn-txt="好的"
      cancel-btn-txt="不了"
      @handle-confirm="handler"
      @handle-cancel="handler"
    >
      内容
    </d-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dlgShow: false,
    }
  },
  methods: {
    handler() {
      this.dlgShow = false
    },
  },
}
</script>
