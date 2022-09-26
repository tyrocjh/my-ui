<template>
  <el-select
    class="d-select"
    v-bind="$attrs"
    v-model="selectValue"
    @change="handleChange"
  >
    <template v-if="isOptionGroup">
      <el-option-group
        v-for="group in options"
        :key="group[optionGroupProps.label]"
        :label="group[optionGroupProps.label]"
      >
        <options :options="group.options" :option-props="optionProps">
          <template v-slot="scope">
            <slot name="option" :row="scope.row" />
          </template>
        </options>
      </el-option-group>
    </template>

    <template v-else>
      <options :options="options" :option-props="optionProps">
        <template v-slot="scope">
          <slot name="option" :row="scope.row" />
        </template>
      </options>
    </template>

    <d-pagination
      v-if="showPagination"
      small-type
      layout="total, prev, pager, next"
      :auto-scroll="false"
      :total="total"
      :page="page"
      :limit="limit"
      @pagination="changePagination"
    />
  </el-select>
</template>

<script>
import Options from './options'

export default {
  name: 'DSelect',
  components: {
    Options,
  },
  model: {
    prop: 'selectModel',
    event: 'change',
  },
  props: {
    selectModel: {
      type: [Object, Array, String],
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    isOptionGroup: {
      type: Boolean,
      default: false,
    },
    optionGroupProps: {
      type: Object,
      default: () => ({
        label: 'label',
      }),
    },
    optionProps: {
      type: Object,
      default: () => ({
        key: 'key',
        label: 'label',
        value: 'value',
      }),
    },
    showPagination: {
      type: Boolean,
      default: false,
    },
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      selectValue: this.selectModel,
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', this.selectValue)
    },
    changePagination(data) {
      this.$emit('pagination', data)
    },
  },
}
</script>

<style lang="scss" scoped></style>
