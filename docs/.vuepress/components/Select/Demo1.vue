<template>
  <div class="demo-box">
    <d-select v-model="value" :options="options" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [{
        value: 'value1',
        label: '黄金糕',
      }, {
        value: 'value2',
        label: '双皮奶',
      }, {
        value: 'value3',
        label: '蚵仔煎',
      }, {
        value: 'value4',
        label: '龙须面',
      }, {
        value: 'value5',
        label: '北京烤鸭',
      }],
    }
  },
}
</script>
