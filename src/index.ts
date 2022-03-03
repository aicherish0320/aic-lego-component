import { App } from 'vue'
import LText from './components/LText'

const components = [LText]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 单个组件导入并且作为插件使用
export { LText, install }
// 所有组件一次性全部导入并且作为插件使用
export default {
  install
}
