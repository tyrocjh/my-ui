### 对话框 Dialog

二次封装 el-dialog ，兼容 element-ui 原属性、方法。

#### 基本使用

<template>
  <Dialog-Demo1 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Dialog/Demo1.vue
</details>

#### 内置保存/取消功能

<template>
  <Dialog-Demo2 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Dialog/Demo2.vue
</details>

#### 属性

|参数|说明|类型|默认值|
|:---|:---|:---|:---|
|need-action|是否使用内置保存/取消功能|boolean|false|
|need-cancel|内置保存/取消功能，是否使用取消按钮|boolean|true|
|confirm-loading|内置保存/取消功能，按钮loading状态|boolean|false|
|confirm-disable|内置保存/取消功能，按钮禁用状态|boolean|false|
|confirm-btn-txt|内置保存/取消功能，保存按钮文案|string|保存|
|cancel-btn-txt|内置保存/取消功能，取消按钮文案|string|取消|

#### 方法

|事件名称|说明|回调参数|
|:---|:---|:---|
|handle-confirm|内置保存/取消功能，确认按钮回调|--|
|handle-cancel|内置保存/取消功能，取消按钮回调|--|
