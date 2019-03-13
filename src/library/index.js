import Button from './components/Button'
import Icon from './components/Icon'
import ButtonGroup from './components/ButtonGroup'

const components = {
  Button,
  Icon,
  ButtonGroup
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
