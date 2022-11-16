<template>
  <div class="demo-box">
    是否符合密码规则：{{ passwordStatus }}

    <br /><br />
    
    <d-input-password v-model="password" :status.sync="passwordStatus" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      passwordStatus: false
    }
  },
}
</script>
