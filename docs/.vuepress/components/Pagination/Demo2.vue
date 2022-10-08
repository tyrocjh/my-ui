<template>
  <div class="demo-box">
    <d-pagination
      :total="total"
      :page.sync="listQuery.pageIndex"
      :limit.sync="listQuery.pageSize"
      auto-scroll
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 20,
      listQuery: {
        pageIndex: 1,
        pageSize: 15,
      },
    }
  },
}
</script>
