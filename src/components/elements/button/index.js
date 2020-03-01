import PantryButton from './index.vue'

PantryButton.install = (Vue) => {
  Vue.component(PantryButton.name, PantryButton)
}

export { PantryButton }
