### 对话框 Dialog

二次封装 el-dialog ，兼容 element-ui 原属性、方法。

#### 基本使用

<template>
  <Pagination-Demo1 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Pagination/Demo1.vue
</details>

#### 切换页码后回到页面头部

<template>
  <Pagination-Demo2 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Pagination/Demo2.vue
</details>

#### 属性

|参数|说明|类型|默认值|
|:---|:---|:---|:---|
|page|当前页，支持 .sync 修饰符|number|1|
|limit|每页显示条目个数，支持 .sync 修饰符|number|15|
|auto-scroll|切换页码后，是否自动回到页面头部|boolean|true|

#### 方法

|事件名称|说明|回调参数|
|:---|:---|:---|
|pagination|pageSize/currentPage改变时会触发|当前页、每页显示条目个数|
