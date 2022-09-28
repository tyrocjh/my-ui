<template>
  <div class="d-input-password">
    <div class="d-input-password-wrapper">
      <el-input
        ref="dPassword" v-bind="$attrs" v-on="$listeners" v-model.trim="inputValue" :type="inputType"
        :placeholder="placeholder" @change="handleChange" @input="handleInput">
      </el-input>
      <svg-icon v-if="inputType === 'password'" class="d-icon-eye" icon-class="d-eye" @click="inputType = 'text'" />
      <svg-icon v-else class="d-icon-eye" icon-class="d-eye-close" @click="inputType = 'password'" />
      <i v-if="inputValue.length" class="el-input__icon el-icon-circle-close" @click="handleClean"></i>
    </div>

    <ul v-if="verifyShow" class="d-verifications" @mouseover="handleMouseover" @mouseout="handleMouseout">
      <li>
        <i v-if="isLength" class="el-icon-success"></i>
        <i v-else class="el-icon-error"></i>
        密码长度限制8~32位
      </li>
      <li>
        <i v-if="isNumber" class="el-icon-success"></i>
        <i v-else class="el-icon-error"></i>
        必须包含数字
      </li>
      <li>
        <i v-if="isCapitalize" class="el-icon-success"></i>
        <i v-else class="el-icon-error"></i>
        必须包含小写字母
      </li>
      <li>
        <i v-if="isLowercase" class="el-icon-success"></i>
        <i v-else class="el-icon-error"></i>
        必须包含大写字母
      </li>
    </ul>
  </div>
</template>

<script>
import SvgIcon from '@pkg/svg-icon'

export default {
  name: 'DInputPassword',
  components: {
    SvgIcon
  },
  model: {
    prop: 'inputModel',
    event: 'change',
  },
  props: {
    inputModel: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入密码'
    },
  },
  data() {
    return {
      inputValue: this.inputModel,
      inputType: 'password',
      timer: null,
      verifyShow: false,
      isLength: false,
      isNumber: false,
      isCapitalize: false,
      isLowercase: false,
    }
  },
  mounted() {
    this.$refs.dPassword.$el.querySelector('.el-input__inner').style =
      'padding-right:55px;'
  },
  methods: {
    handleInput(value) {
      const len = value.length,
        numRex = /[0-9]/g,
        capitalizeRex = /[a-z]/g,
        lowercase = /[A-Z]/g
      
      let verify = true

      if (len >= 8 && len <= 32) {
        this.isLength = true
      } else {
        this.isLength = false
        verify = false
      }
      if (value.search(numRex) >= 0) {
        this.isNumber = true
      } else {
        this.isNumber = false
        verify = false
      }
      if (value.search(capitalizeRex) >= 0) {
        this.isCapitalize = true
      } else {
        this.isCapitalize = false
        verify = false
      }
      if (value.search(lowercase) >= 0) {
        this.isLowercase = true
      } else {
        this.isLowercase = false
        verify = false
      }
      this.verifyShow = true
      this.$emit('update:status', verify)
    },
    handleChange() {
      this.setTimer()
    },
    handleClean() {
      this.inputValue = ''
      this.$emit('handle-clean')
    },
    handleMouseover() {
      this.verifyShow = true
      clearTimeout(this.timer)
    },
    handleMouseout() {
      this.setTimer()
    },
    setTimer() {
      this.timer = setTimeout(() => {
        this.verifyShow = false
      }, 3000)
    },
  },
}
</script>

<style lang="scss" scoped>
.d-input-password {
  position: relative;
  display: inline-block;
  li {
    list-style: none;
  }
  .d-input-password-wrapper {
    position: relative;
    &:hover {
      .el-icon-circle-close {
        display: block;
      }
    }
    .el-input__inner {
      padding-right: 45px;
    }
    .d-icon-eye {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
      cursor: pointer;
    }
    .el-icon-circle-close {
      position: absolute;
      right: 35px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
      width: 25px;
      height: 25px;
      line-height: 25px;
      color: #ccc;
      cursor: pointer;
      &:hover {
        color: #999999;
      }
    }
  }
  .d-verifications {
    z-index: 9999;
    position: absolute;
    top: 20px;
    left: 0;
    padding: 0;
    width: 100%;
    line-height: 30px;
    font-size: 14px;
    color: rgb(172, 172, 172);
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 31%);
    li {
      margin-left: 10px;
    }
    i {
      margin-right: 10px;
    }
    .el-icon-success {
      color: #67c23a;
    }
    .el-icon-error {
      color: #f56c6c;
    }
  }
}
</style>
