import GlobalLoading from './src/main'

GlobalLoading.install = function(Vue) {
  Vue.component(GlobalLoading.name, GlobalLoading)
}

export default GlobalLoading
