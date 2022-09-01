<template>
  <el-backtop
    class="back-top"
    v-bind="$attrs"
    :bottom="bottom"
    :right="right"
  >
    <i class="el-icon-caret-top"></i>
  </el-backtop>
</template>

<script>
export default {
  name: 'DBacktop',
  props: {
    bottom: {
      type: Number,
      default: 30,
    },
    right: {
      type: Number,
      default: 30,
    },
  },
}
</script>

<style lang="scss" scoped>
.back-top {
  width: 50px;
  height: 50px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.07);
}
</style>
