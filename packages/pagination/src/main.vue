<template>
  <div class="d-pagination-container">
    <el-pagination
      v-bind="$attrs"
      v-on="$listeners"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :page-sizes="pageSizes"
      :layout="layout"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from '../../../src/utils/scroll-to'

export default {
  name: 'DPagination',
  props: {
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 15,
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 15, 20]
      },
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
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
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
        scrollTo(0, 300)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 300)
      }
    },
  },
}
</script>

<style scoped>
.d-pagination-container {
  text-align: center;
  padding: 32px 16px;
}
</style>
