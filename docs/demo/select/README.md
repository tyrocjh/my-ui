### 下拉选择框 Select

二次封装 el-select ，提供下拉分页功能，兼容 element-ui 原属性、方法。

#### 基本使用

<template>
  <Select-Demo1 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Select/Demo1.vue
</details>

#### 禁用选项

<template>
  <Select-Demo4 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Select/Demo4.vue
</details>

#### 自定义下拉选项option属性

<template>
  <Select-Demo5 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Select/Demo5.vue
</details>

#### 分组

<template>
  <Select-Demo2 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Select/Demo2.vue
</details>

#### 自定义分组属性

<template>
  <Select-Demo3 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Select/Demo3.vue
</details>

#### 下拉分页（配合远程搜索使用）

<template>
  <Select-Demo6 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Select/Demo6.vue
</details>

#### 绑定对象

<template>
  <Select-Demo7 />
</template>

<details>
  <summary>查看代码</summary>

  <<< @/docs/.vuepress/components/Select/Demo7.vue
</details>

#### 属性

|参数|说明|类型|默认值|
|:---|:---|:---|:---|
|v-model|绑定值|boolean / string / number / object|--|
|options|下拉选项列表|array|[]|
|option-props|下拉选项属性|object|{key: 'key', label: 'label', value: 'value'}|
|is-option-group|是否使用分组功能|boolean|false|
|option-group-props|分组属性|object|{label: 'label'}|
|show-pagination|是否使用分页功能|boolean|false|
|total|分页功能：总数|number|0|
|page|分页功能：当前页码，支持.sync|number|1|
|limit|分页功能：每页条数，支持.sync|number|5|
