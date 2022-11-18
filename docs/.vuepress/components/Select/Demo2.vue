<template>
  <div class="demo-box">
    <d-select
      v-model="value"
      is-option-group
      :options="options"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海',
        }, {
          value: 'Beijing',
          label: '北京',
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都',
        }, {
          value: 'Shenzhen',
          label: '深圳',
        }, {
          value: 'Guangzhou',
          label: '广州',
        }, {
          value: 'Dalian',
          label: '大连',
        }]
      }],
    }
  },
}
</script>
