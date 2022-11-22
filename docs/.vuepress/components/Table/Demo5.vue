<template>
  <div class="demo-box">
    <d-table
      :header-list="headerList"
      :table-list="tableList"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄', sortable: true },
        { prop: 'phone', label: '电话' },
        { prop: 'address', label: '地址' },
      ],
      tableList: [
        { date: '2020-01-02', name: '小红', age: 20, phone: 13548546235, address: '广州' },
        { date: '2022-02-02', name: '小白', age: 10, phone: 13587452632, address: '云浮' },
        { date: '2018-11-03', name: '小黄', age: 15, phone: 13521236954, address: '云南' },
        { date: '2021-05-12', name: '小绿', age: 30, phone: 18542563259, address: '广西' },
        { date: '2011-01-02', name: '小蓝', age: 22, phone: 13695478523, address: '深圳' },
      ]
    }
  },
}
</script>
