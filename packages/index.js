import Pagination from './pagination'

const components = [Pagination]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Pagination,
}
