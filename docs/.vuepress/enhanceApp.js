import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import DDialog from '../../packages/dialog'
import DSelect from '../../packages/select'
import Table from '../../packages/table'
import DInputPassword from '../../packages/input-password'
import DBacktop from '../../packages/backtop'
import DProgress from '../../packages/progress'
import DSteps from '../../packages/steps'
import DGlobalLoading from '../../packages/global-loading'

export default async ({
  Vue,
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  if(!isServer) {
    Vue.use(ElementUI, {
      size: 'small',
    })

    await import('../../packages/pagination').then(module => {
      Vue.use(module.default)
    })

    Vue.use(DDialog)
      .use(DSelect)
      .use(Table)
      .use(DInputPassword)
      .use(DBacktop)
      .use(DProgress)
      .use(DSteps)
      .use(DGlobalLoading)
  }
}
