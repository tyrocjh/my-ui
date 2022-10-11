import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DPagination from '../../packages/pagination'
import DDialog from '../../packages/dialog'

Vue.use(ElementUI, {
  size: 'small',
})

Vue.use(DPagination).use(DDialog)
