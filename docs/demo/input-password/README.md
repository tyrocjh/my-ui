### 密码输入框 InputPassword

基于 el-input ，封装密码输入框，兼容 element-ui 原属性、方法。

#### 基本使用

<template>
  <InputPassword-Demo1 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/InputPassword/Demo1.vue
</details>

#### 清空密码回调方法

<template>
  <InputPassword-Demo2 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/InputPassword/Demo2.vue
</details>

#### 实时获取密码是否符合规则

<template>
  <InputPassword-Demo3 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/InputPassword/Demo3.vue
</details>

#### 属性

|参数|说明|类型|默认值|
|:---|:---|:---|:---|
|v-model|绑定值|string|--|
|status|是否符合密码规则，支持.sync|boolean|false|
|placeholder|占位符|string|请输入密码|

#### 方法

|事件名称|说明|回调参数|
|:---|:---|:---|
|handle-clean|清空密码回调方法|--|
