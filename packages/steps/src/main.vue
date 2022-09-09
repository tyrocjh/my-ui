<template>
  <div class="steps">
    <el-steps :direction="direction" :active="2">
      <el-step
        v-for="(item, index) in timeLineDataList"
        :key="index"
        :style="direction == 'vertical' ? 'height:80px;flex-basis: auto' : ''"
      >
        <template slot="icon">
          <span class="dot"></span>
        </template>
        <template slot="description">
          <div class="label">{{ item.label }}</div>
          <div class="reason" v-if="item.info != null">{{ item.info }}</div>
          <div class="time">{{ item.time }}</div>
        </template>
      </el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'DSteps',
  props: {
    timeLineDataList: {
      type: Array,
      require: true,
      default: () => [],
    },
    direction: {
      type: String,
      default: 'horizontal',
    },
  },
  data() {
    return {}
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.steps {
  margin: calc(1.5vh) calc(2vh) calc(4vh) 0;
  .img {
    width: 25px;
    height: 25px;
  }
  ::v-deep(.el-step__line) {
    border: 1px dashed #eaebf2;
    background: #fff;
  }
  ::v-deep(.is-horizontal) .label {
    margin-top: 10px;
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
    .dot {
      background: #4646e6;
    }
    .label {
      color: #333;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 2px;
    }
    .is-wait .label {
      color: #ccc;
    }
  }
  ::v-deep(.el-step__icon) {
    border: none;
    background: #f4f5fa;
  }
  ::v-deep(.dot) {
    display: inline-block;
    background: #ccc;
    width: 12px;
    height: 12px;
    border-radius: 6px;
  }
  ::v-deep(.reason) {
    font-size: 12px;
    color: #333;
  }
  ::v-deep(.time) {
    color: #c0c4cc !important;
  }
}
</style>
