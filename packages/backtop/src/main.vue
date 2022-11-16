<template>
  <el-backtop class="d-back-top" v-bind="$attrs" :bottom="bottom" :right="right">
    <slot />
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
.d-back-top {
  width: 50px;
  height: 50px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.07);
}
</style>
