<template>
  <el-progress v-bind="$attrs" :stroke-width="strokeWidth" :color="color">
  </el-progress>
</template>

<script>
export default {
  name: 'DProgress',
  props: {
    strokeWidth: {
      type: Number,
      default: 20,
    },
    color: {
      type: String,
      default: '#409EFF',
    },
  },
}
</script>
