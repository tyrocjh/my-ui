<template>
  <div class="demo-box">
    <d-steps :data-list="list" :active="1" :step-props="stepProps" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepProps: {
        title: 'title',
        descript: 'info',
        time: 'time',
      },
      list: [
        { time: '2021-04-01', title: '发起申请', info: '张三' },
        { time: '2021-05-01', title: '直接上级审批', info: '李四' },
        { time: '2021-06-01', title: '分管中心审批', info: '王五' },
        { time: '2021-07-01', title: '完成' },
      ],
    }
  },
}
</script>
