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
        value: '选项1',
        label: '黄金糕',
        disabled: true,
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
        disabled: true,
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
    }
  },
}
</script>
