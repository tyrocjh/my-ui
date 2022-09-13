<template>
  <el-table
    ref="dosTable"
    :data="tableList"
    :stripe="stripe"
    fit
    :row-key="rowKey"
    v-loading="loading"
    :header-cell-style="{
      height: '40px',
      'font-size': '16px',
      'font-weight': '600',
      background: '#F5F6FB',
      color: '#36395C',
    }"
    :row-style="{
      height: '40px',
      'font-size': '14px',
      color: '#36465d',
      background: '#FBRBFD',
    }"
    style="width: 100%"
    :height="height"
    :tree-props="{ children: 'children' }"
    @selection-change="selectionChange"
    @select-all="selectAll"
    @select="selectItem"
    @sort-change="sortChange"
    class="dosTable"
  >
    <!-- border: '2px solid #EFEFF6', -->
    <template v-for="(itm, idx) in tableHeader">
      <!-- 复选框 -->
      <el-table-column
        :key="idx"
        v-if="itm.type === 'selection'"
        type="selection"
        :reserve-selection="itm.reserveSelection || false"
        :selectable="selectable"
        :fixed="itm.fixed ? itm.fixed : null"
        width="55"
      ></el-table-column>
      <!-- 序号 -->
      <el-table-column
        :key="idx"
        v-else-if="itm.type === 'index'"
        type="index"
        width="55"
        label="序号"
        :fixed="itm.fixed ? itm.fixed : null"
      ></el-table-column>
      <!-- 特殊处理列 -->
      <el-table-column
        v-else
        :key="idx"
        :prop="itm.prop ? itm.prop : null"
        :label="itm.label ? itm.label : null"
        :width="itm.width ? itm.width : null"
        :sortable="itm.sortable ? itm.sortable : false"
        :align="itm.align ? itm.align : 'center'"
        :show-overflow-tooltip="itm.tooltip ? itm.tooltip : true"
        :fixed="itm.fixed ? itm.fixed : null"
        min-width="50"
      >
        <template slot-scope="scope">
          <slot v-if="itm.slot" :name="itm.slot" :scope="scope"></slot>
          <span v-else>{{
            scope.row[tableHeader[idx].prop]
              ? scope.row[tableHeader[idx].prop]
              : '--'
          }}</span>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'DTable',
  props: {
    // 表格数据
    tableList: {
      type: Array,
      default: () => [],
    },
    // 表格头部
    tableHeader: {
      type: Array,
      default: () => [],
    },
    // 固定高度
    height: {
      type: [Number, String, Function],
      default: () => null,
    },
    // 加载动画
    loading: {
      type: Boolean,
    },
    // 跟:reserve-selection="true"结合，保证模态框内的客户列表数据翻页依然选中之前选择的
    rowKey: {
      type: String,
      default: function () {
        return 'id'
      },
    },
    stripe: {
      type: Boolean,
    },
  },
  methods: {
    /**
     * 是否可选
     */
    selectable(row) {
      // 默认是可选的
      // 如果将 $selectable 属性设置为了 false 就不可选
      return row.$selectable !== false
    },
    /**
     * 选择框选择后更改,事件分发
     */
    selectionChange(selection) {
      this.$emit('selection-change', selection)
    },
    /**
     * 点击事件
     */
    rowClick(row, column, event) {
      console.log(row, column, event, 21222)
      this.$emit('row-click', row, column, event)
    },
    /**
     * 单选时触发
     */
    selectItem(selection, row) {
      this.$emit('selectItem', selection, row)
    },
    /**
     * 当用户手动勾选全选 Checkbox 时触发的事件
     */
    selectAll(selection) {
      this.$emit('select-all', selection)
    },
    /**
     * 清除全选事件
     */
    _clearSelection() {
      this.$refs.dynamicTable.clearSelection()
    },
    // 排序
    sortChange(column) {
      this.$emit('sort-change', column)
    },
  },
}
</script>
