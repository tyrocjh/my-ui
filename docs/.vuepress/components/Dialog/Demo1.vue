<template>
  <div class="demo-box">
    <el-button type="primary" @click="dlgShow = true">点击打开Dialog</el-button>

    <d-dialog :visible.sync="dlgShow" title="对话框">内容</d-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dlgShow: false,
    }
  },
}
</script>
