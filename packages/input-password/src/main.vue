<template>
  <div class="dossen-input-password">
    <div class="input-password">
      <el-input
        ref="password" v-bind="$props" v-trim :type="inputType"
        @change="changeFn" @input="inputFn" :placeholder="placeholder">
      </el-input>
      <svg-icon v-if="inputType == 'password'" class="el-icon-view" icon-class="eye" @click="typeChangeFn" />
      <svg-icon v-else class="el-icon-view" icon-class="eyeClose" @click="typeChangeFn" />
      <i v-if="value.length" class="el-input__icon el-icon-circle-close" @click="clearFn"></i>
    </div>

    <ul v-if="verifyShow" class="verifications" @mouseover="mouseoverFn" @mouseout="mouseoutFn">
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
import trim from '@/directives/trim'

export default {
  name: 'DInputPassword',
  directives: { trim },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入密码'
    },
  },
  data() {
    return {
      verifyShow: false,
      isLength: false,
      isNumber: false,
      isCapitalize: false,
      isLowercase: false,
      inputType: 'password',
      timer: null,
    }
  },
  mounted() {
    this.$refs.password.$el.querySelector('.el-input__inner').style =
      'padding-right:55px;'
  },
  methods: {
    // 离开
    mouseoutFn() {
      this.timer = setTimeout(() => {
        this.verifyShow = false
      }, 3000)
    },
    // 停留
    mouseoverFn() {
      this.verifyShow = true
      clearTimeout(this.timer)
    },
    // 清除内容
    clearFn() {
      this.$emit('update:clear', '')
    },
    // 改变input类型
    typeChangeFn() {
      if (this.inputType === 'password') {
        this.inputType = 'text'
      } else {
        this.inputType = 'password'
      }
    },
    // 值改变
    changeFn(v) {
      this.$emit('change', v)
      this.timer = setTimeout(() => {
        this.verifyShow = false
      }, 3000)
    },
    // 输入值
    inputFn(v) {
      let len = v.length,
        numRex = /[0-9]/g,
        capitalizeRex = /[a-z]/g,
        lowercase = /[A-Z]/g,
        verify = true

      if (len >= 8 && len <= 32) {
        this.isLength = true
      } else {
        this.isLength = false
        verify = false
      }
      if (v.search(numRex) >= 0) {
        this.isNumber = true
      } else {
        this.isNumber = false
        verify = false
      }
      if (v.search(capitalizeRex) >= 0) {
        this.isCapitalize = true
      } else {
        this.isCapitalize = false
        verify = false
      }
      if (v.search(lowercase) >= 0) {
        this.isLowercase = true
      } else {
        this.isLowercase = false
        verify = false
      }
      this.verifyShow = true
      this.$emit('update:verify', verify)
      this.$emit('input', v)
    },
  },
}
</script>

<style lang="scss" scoped>
.dossen-input-password {
  position: relative;
  display: inline-block;
  li {
    list-style: none;
  }
  .input-password {
    position: relative;
    &:hover {
      .el-icon-circle-close {
        display: block;
      }
    }
    .el-input__inner {
      padding-right: 45px;
    }
    .el-icon-view {
      position: absolute;
      right: 10px;
      top: 7px;
      line-height: 0;
      font-size: 20px;
      cursor: pointer;
    }
    .el-icon-circle-close {
      position: absolute;
      right: 35px;
      top: 1px;
      line-height: 0;
      cursor: pointer;
      display: none;
      color: #ccc;
      &:hover {
        color: #999999;
      }
    }
  }
  .verifications {
    padding: 0;
    position: absolute;
    left: 0;
    top: 20px;
    background: #fff;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
    line-height: 30px;
    box-shadow: 0px 4px 8px 0 #00000050;
    color: rgb(172, 172, 172);
    z-index: 1;
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
