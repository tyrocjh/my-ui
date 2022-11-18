<template>
  <div class="demo-box">
    <d-select v-model="value" :options="options" :option-props="optionProps" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      optionProps: {
        label: 'name',
        value: 'id',
      },
      options: [{
        id: '1',
        name: '黄金糕',
      }, {
        id: '2',
        name: '双皮奶',
      }, {
        id: '3',
        name: '蚵仔煎',
      }, {
        id: '4',
        name: '龙须面',
      }, {
        id: '5',
        name: '北京烤鸭',
      }],
    }
  },
}
</script>
