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
      small
      layout="total, prev, pager, next"
      :padding="false"
      :total="total"
      :page.sync="currentPage"
      :limit.sync="pageSize"
      @pagination="changePagination"
      style="margin-top: 10px;"
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
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      },
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      },
    },
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
