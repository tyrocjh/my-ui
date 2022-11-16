<template>
  <div class="demo-box">
    <d-input-password v-model="password" @handle-clean="handleClean" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
    }
  },
  methods: {
    handleClean() {
      this.$message.success('密码被清掉啦~')
    }
  }
}
</script>
