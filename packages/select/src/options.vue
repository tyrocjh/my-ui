<template>
  <div class="d-select-options">
    <el-option
      v-for="item in options"
      :key="
        item[optionProps.key] ||
        item[optionProps.value] ||
        item[optionProps.label]
      "
      :value="optionProps.value ? item[optionProps.value] : item"
      :label="item[optionProps.label]"
      :disabled="item.disabled"
    >
      <slot :row="item" />
    </el-option>
  </div>
</template>

<script>
export default {
  name: 'Options',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    optionProps: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
