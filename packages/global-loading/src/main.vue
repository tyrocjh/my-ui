<template>
  <div class="d-loading-wrapper">
    <div class="d-main">
      <div class="d-load-container">
        <div class="d-box-loading"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DGlobalLoading',
}
</script>

<style lang="scss" scoped>
.d-loading-wrapper {
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .d-main {
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
    .d-load-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      .d-box-loading {
        width: 50px;
        height: 50px;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        &:before {
          content: '';
          width: 50px;
          height: 5px;
          background: #000;
          opacity: 0.1;
          position: absolute;
          top: 59px;
          left: 0;
          border-radius: 50%;
          animation: d-loading-shadow 0.5s linear infinite;
        }
        &:after {
          content: '';
          width: 50px;
          height: 50px;
          background: #409eff;
          animation: d-loading-animate 0.5s linear infinite;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 3px;
        }
      }
      .d-tips {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -23px;
        font-size: 14px;
        color: #999;
        white-space: nowrap;
      }
    }
  }
}

@keyframes d-loading-animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes d-loading-shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
