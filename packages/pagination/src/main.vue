<template>
  <div class="d-pagination-container" :style="styleObj">
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
    align: {
      type: String,
      default: 'center',
    },
    padding: {
      type: Boolean,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      styleObj: {
        textAlign: this.align,
        padding: this.padding ? '30px 0' : '0',
      },
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
