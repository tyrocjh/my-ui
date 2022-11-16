<template>
  <div class="demo-box" style="height: 200px;">
    向下滑就能看到啦~
    <d-backtop :bottom="100">
      <div style="
          height: 50px;
          width: 50px;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 50px;
          color: #1989fa;">
        UP
      </div>
    </d-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>
