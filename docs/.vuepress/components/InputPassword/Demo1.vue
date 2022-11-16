<template>
  <div class="demo-box">
    <d-input-password v-model="password" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
    }
  },
}
</script>
