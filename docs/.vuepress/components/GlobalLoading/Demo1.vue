<template>
  <div class="demo-box">
    刷新页面看效果，3秒后消失~
    <d-global-loading v-if="show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  created() {
    setTimeout(() => {
      this.show = false
    }, 3000);
  }
}
</script>
