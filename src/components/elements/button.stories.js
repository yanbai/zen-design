import Vue from 'vue'
import MyButton from './button/index.vue'

export default { title: 'Button' }

export const withText = () => '<z-button>with text</z-button>'

export const withEmoji = () => '<z-button>😀 😎 👍 💯</z-button>'

export const asAComponent = () => ({
  components: { MyButton },
  template: '<z-button>rounded</z-button>'
})