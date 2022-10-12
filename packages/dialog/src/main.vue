<template>
  <div class="d-dialog-container">
    <el-dialog
      v-bind="$attrs"
      v-on="$listeners"
      :visible.sync="show"
      :center="center"
      :width="width"
    >
      <slot name="title" slot="title"></slot>

      <slot></slot>

      <div v-if="needAction" class="actions" :style="styleObj">
        <el-button v-if="needCancel" @click="handleCancel">
          {{ cancelBtnTxt }}
        </el-button>
        <el-button
          type="primary"
          :loading="confirmLoading"
          :disabled="confirmDisable"
          @click="handleConfirm"
        >
          {{ confirmBtnTxt }}
        </el-button>
      </div>

      <slot name="footer" slot="footer"></slot>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '500px',
    },
    needAction: {
      type: Boolean,
      default: false,
    },
    needCancel: {
      type: Boolean,
      default: true,
    },
    confirmLoading: {
      type: Boolean,
      default: false,
    },
    confirmDisable: {
      type: Boolean,
      default: false,
    },
    confirmBtnTxt: {
      type: String,
      default: '确定',
    },
    cancelBtnTxt: {
      type: String,
      default: '取消',
    },
  },
  data() {
    return {
      styleObj: {
        textAlign: this.center ? 'center' : 'right',
      },
    }
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      },
    },
  },
  methods: {
    handleConfirm() {
      this.$emit('handle-confirm')
    },
    handleCancel() {
      this.$emit('handle-cancel')
    },
  },
}
</script>

<style lang="scss" scoped>
.d-dialog-container {
  .actions {
    margin-top: 30px;
  }
  ::v-deep(.el-dialog) {
    position: relative;
    left: 0;
    transform: none;
    margin: 0 auto;
    border-radius: 10px;
  }
  ::v-deep(.el-dialog__header) {
    padding: 20px 30px;
    border-bottom: 1px solid #dcdfe6;
  }
  ::v-deep(.el-dialog__body) {
    padding: 30px 30px;
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
}
</style>
