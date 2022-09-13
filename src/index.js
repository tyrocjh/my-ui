import Backtop from '@pkg/backtop'
import Dialog from '@pkg/dialog'
import GlobalLoading from '@pkg/global-loading'
import InputPassword from '@pkg/input-password'
import Pagination from '@pkg/pagination'
import Progress from '@pkg/progress'
import Select from '@pkg/select'
import Steps from '@pkg/steps'
import SvgIcon from '@pkg/svg-icon'
import Table from '@pkg/table'
import '@/icons'

const components = [
  Backtop,
  Dialog,
  GlobalLoading,
  InputPassword,
  Pagination,
  Progress,
  Select,
  Steps,
  SvgIcon,
  Table,
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
  GlobalLoading,
  InputPassword,
  Pagination,
  Progress,
  Select,
  Steps,
  SvgIcon,
  Table,
}
