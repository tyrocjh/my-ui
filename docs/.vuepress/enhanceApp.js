import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import DPagination from '../../packages/pagination'
import DDialog from '../../packages/dialog'
import DSelect from '../../packages/select'
import DInputPassword from '../../packages/input-password'
import DBacktop from '../../packages/backtop'
import DProgress from '../../packages/progress'
import DSteps from '../../packages/steps'
import DGlobalLoading from '../../packages/global-loading'

Vue.use(ElementUI, {
  size: 'small',
})

Vue.use(DPagination)
  .use(DDialog)
  .use(DSelect)
  .use(DInputPassword)
  .use(DBacktop)
  .use(DProgress)
  .use(DSteps)
  .use(DGlobalLoading)
