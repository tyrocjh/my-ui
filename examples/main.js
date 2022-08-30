import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import TyroUI from '../src'
// import { Pagination } from '../src'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small', // [medium / small / mini]
})

Vue.use(TyroUI)
// Vue.use(Pagination)

new Vue({
  render: h => h(App),
}).$mount('#app')
