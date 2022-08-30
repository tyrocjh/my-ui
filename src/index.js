import Pagination from '../packages/pagination'

const components = [
  Pagination
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Pagination
}

export {
  install,
  Pagination
}
