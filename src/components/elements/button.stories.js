import Vue from 'vue'
import MyButton from './button/index.vue'

export default { title: 'Button' }

export const withText = () => '<dp-button>with text</dp-button>'

export const withEmoji = () => '<dp-button>😀 😎 👍 💯</dp-button>'

export const asAComponent = () => ({
  components: { MyButton },
  template: '<dp-button>rounded</dp-button>'
})