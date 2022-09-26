<template>
  <div class="d-dialog-container">
    <el-dialog
      v-bind="$attrs"
      :visible.sync="visible"
      :title="title"
      :width="width"
      :center="center"
      :top="top"
      :modal="needModal"
      :show-close="showClose"
      :close-on-click-modal="closeOnClickModal"
      :close-on-press-escape="closeOnClickModal"
    >
      <slot></slot>

      <span v-if="needAction" slot="footer">
        <el-button
          v-if="needCancel"
          style="margin-right: 10px; min-width: 80px"
          @click="handleCancel"
        >
          {{ cancelBtnTxt }}
        </el-button>

        <el-button
          type="primary"
          :loading="confirmLoading"
          :disabled="confirmDisable"
          style="min-width: 80px"
          @click="handleConfirm"
        >
          {{ confirmBtnTxt }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DDialog',
  props: {
    confirmLoading: {
      type: Boolean,
      default: false,
    },
    confirmDisable: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    needModal: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    center: {
      type: Boolean,
      default: false,
    },
    needAction: {
      type: Boolean,
      default: true,
    },
    needCancel: {
      type: Boolean,
      default: true,
    },
    confirmBtnTxt: {
      type: String,
      default: '保存',
    },
    cancelBtnTxt: {
      type: String,
      default: '取消',
    },
    width: {
      type: String,
      default: '500px',
    },
    top: {
      type: String,
      default: '15vh',
    },
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    visible: {
      get() {
        return this.show
      },
      set(val) {
        this.$emit('update:show', val)
      },
    },
  },
  methods: {
    // 点击确定
    handleConfirm() {
      this.$emit('handle-confirm')
    },
    // 点击取消
    handleCancel() {
      this.$emit('handle-cancel')
    },
    // 关闭弹窗
    closeDialog() {
      this.$emit('update:show', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.d-dialog-container {
  ::v-deep(.el-dialog) {
    position: relative;
    left: 0;
    transform: none;
    margin: 0 auto;
    border-radius: 15px;
  }
  ::v-deep(.el-dialog__header) {
    padding: 20px 50px;
    border-bottom: 1px solid #dcdfe6;
  }
  ::v-deep(.el-dialog__title) {
    font-weight: 600;
  }
  ::v-deep(.el-dialog__headerbtn) {
    right: 30px;
    font-size: 20px;
  }
  ::v-deep(.el-dialog__headerbtn) .el-dialog__close {
    font-weight: 700;
    color: #303133;
  }
  ::v-deep(.el-dialog__body) {
    padding: 30px 50px 0;
  }
  ::v-deep(.el-dialog__footer) {
    text-align: center;
    padding: 30px 50px 40px 50px;
  }
}
</style>
