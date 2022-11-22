### 表格 Table

二次封装 el-table ，兼容 element-ui 原属性、方法。

#### 基本使用

<template>
  <Table-Demo1 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Table/Demo1.vue
</details>

#### 表格loading

<template>
  <Table-Demo2 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Table/Demo2.vue
</details>

#### 空数据占位符

<template>
  <Table-Demo3 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Table/Demo3.vue
</details>

#### 复选框、索引

<template>
  <Table-Demo4 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Table/Demo4.vue
</details>

#### 排序

<template>
  <Table-Demo5 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Table/Demo5.vue
</details>

#### 插槽slot

<template>
  <Table-Demo6 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Table/Demo6.vue
</details>

#### 属性

|参数|说明|类型|默认值|
|:---|:---|:---|:---|
|header-list|表格头列表|array|[]|
|table-list|表格列表|array|[]|
|loading|表格loading状态|boolean|false|
|stripe|是否为斑马纹|boolean|true|
|placeholder|空数据占位符|string|--|
