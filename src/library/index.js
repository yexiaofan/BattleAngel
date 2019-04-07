import Button from './components/Button'
import Icon from './components/Icon'
import ButtonGroup from './components/ButtonGroup'
import Row from './components/Row'
import Col from './components/Col'
import Card from './components/Card'
import Collapse from './components/Collapse'
import Panel from './components/Panel'
import Input from './components/Input'

const components = {
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  Card,
  Collapse,
  Panel,
  Input
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
