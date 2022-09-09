import Backtop from '@pkg/backtop'
import InputPassword from '@pkg/input-password'
import Dialog from '@pkg/dialog'
import Pagination from '@pkg/pagination'
import Steps from '@pkg/steps'
import SvgIcon from '@pkg/svg-icon'
import '@/icons'

const components = [
  Backtop,
  Dialog,
  InputPassword,
  Pagination,
  Steps,
  SvgIcon,
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
  ...components
}

export {
  install,
  Backtop,
  Dialog,
  InputPassword,
  Pagination,
  Steps,
  SvgIcon
}
