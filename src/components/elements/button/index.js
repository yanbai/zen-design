import ZenButton from './index.vue'

ZenButton.install = (Vue) => {
  Vue.component(ZenButton.name, ZenButton)
}

export { ZenButton }
