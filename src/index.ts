import { App } from 'vue'
export {
  textDefaultProps,
  textStylePropNames,
  TextComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
  ImageComponentProps,
  shapeDefaultProps,
  shapeStylePropsNames,
  ShapeComponentProps,
  AllComponentProps
} from './defaultProps'
import LImage from './components/LImage'
import LShape from './components/LShape'
import LText from './components/LText'

const components = [LText, LImage, LShape]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 单个组件导入并且作为插件使用
export { LText, LImage, LShape, install }
// 所有组件一次性全部导入并且作为插件使用
export default {
  install
}
