<template>
  <div class="demo-box">
    <d-select
      v-model="value"
      is-option-group
      :option-group-props="optionGroupProps"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      optionGroupProps: {
        label: 'groudName'
      },
      options: [{
        groudName: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海',
        }, {
          value: 'Beijing',
          label: '北京',
        }]
      }, {
        groudName: '城市名',
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
