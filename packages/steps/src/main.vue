<template>
  <div class="d-steps">
    <el-steps v-bind="$attrs">
      <el-step v-for="(item, index) in dataList" :key="index">
        <template slot="icon">
          <span class="v-dot"></span>
        </template>
        <template slot="description">
          <div class="v-title">{{ item[stepProps.title] }}</div>
          <div class="v-descript">{{ item[stepProps.descript] }}</div>
          <div class="v-time">{{ item[stepProps.time] }}</div>
        </template>
      </el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'DSteps',
  props: {
    dataList: {
      require: true,
      type: Array,
      default: () => [],
    },
    stepProps: {
      type: Object,
      default: () => ({
        title: 'title',
        descript: 'descript',
        time: 'time'
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.d-steps {
  .v-dot {
    display: inline-block;
    background: #ccc;
    width: 12px;
    height: 12px;
    border-radius: 6px;
  }
  .v-descript {
    font-size: 12px;
    color: #333;
  }
  .v-time {
    color: #c0c4cc !important;
  }
  ::v-deep(.is-horizontal) .v-title {
    margin-top: 10px;
  }
  ::v-deep(.el-step__line) {
    border: 1px dashed #eaebf2;
    background: #fff;
  }
  ::v-deep(.is-finish),
  .is-process,
  .is-success {
    .el-step__line {
      background: #4646e6;
      border: none;
      color: #4646e6;
    }
    .el-step__icon {
      border: none;
      background: #e2e6fe;
    }
    .v-dot {
      background: #4646e6;
    }
    .v-title {
      margin-bottom: 2px;
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
  ::v-deep(.el-step__icon) {
    border: none;
    background: #f4f5fa;
  }
}
</style>
