# UI组件库

这是一个基于 Element UI 进行二次封装的桌面端组件库。

> 目的：提升组件复用性、避免重复造轮子。让前端开发更高效，更专注于业务代码的编写

## 使用

1. 使用npm安装：

```
npm install tyro-ui --save
```

2. 引入组件

```
import 'tyro-ui/lib/tyro-ui.css'
import TyroUI from 'tyro-ui'
Vue.use(TyroUI)
```

## 开发

#### 开发组件

```sh
# 开发
npm run dev

# 打包
npm run lib

# 发布npm
npm login
npm publish
```

#### 开发文档

```sh
# 开发
npm run docs:dev

# 打包
npm run docs:build
```
