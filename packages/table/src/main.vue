<template>
  <el-table
    class="d-table"
    v-bind="$attrs"
    v-on="$listeners"
    v-loading="loading"
    :data="tableList"
    :stripe="stripe"
    :header-cell-style="headerCellStyle"
    :row-style="rowStyle"
  >
    <template v-for="(item, idx) in headerList">
      <!-- 插槽 -->
      <slot v-if="item.slot" :name="item.slot" />
      <!-- 复选框 -->
      <el-table-column
        v-else-if="item.type === 'selection'"
        type="selection"
        :key="idx"
        :fixed="item.fixed"
        :selectable="selectable"
        :reserve-selection="item.reserveSelection || false"
        :align="item.align || defaultAlign"
        :width="item.width"
      ></el-table-column>
      <!-- 索引 -->
      <el-table-column
        v-else-if="item.type === 'index'"
        type="index"
        :key="idx"
        :label="item.label || '序号'"
        :fixed="item.fixed"
        :align="item.align || defaultAlign"
        :width="item.width"
      ></el-table-column>
      <!-- 普通列 -->
      <el-table-column
        v-else
        :key="idx"
        :label="item.label"
        :prop="item.prop"
        :sortable="item.sortable"
        :show-overflow-tooltip="item.showOverflowTooltip"
        :fixed="item.fixed"
        :align="item.align || defaultAlign"
        :width="item.width"
      >
        <template slot-scope="scope">
          <span>{{ scope.row[item.prop] || placeholder }}</span>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'DTable',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    headerList: {
      type: Array,
      default: () => [],
    },
    tableList: {
      type: Array,
      default: () => [],
    },
    stripe: {
      type: Boolean,
      default: true,
    },
    headerCellStyle: {
      type: Object,
      default: () => ({
        padding: '2px 0',
        fontSize: '14px',
        color: '#36395C',
        background: '#F5F6FB',
      }),
    },
    rowStyle: {
      type: Object,
      default: () => ({
        fontSize: '14px',
      }),
    },
    placeholder: {
      type: String,
      default: '--',
    },
  },
  data() {
    return {
      defaultAlign: 'center',
    }
  },
  methods: {
    // 复选框是否可选
    selectable(row) {
      return row.$selectable !== false
    },
  },
}
</script>

<style lang="scss" scoped>
.d-table {
  width: 100%;
}
</style>
