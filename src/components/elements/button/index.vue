<template>
  <component
    v-bind="$attrs"
    :is="isALinktag ? 'a' : 'button'"
    class="z-button"
    :type="!isALinktag ? 'button' : null"
    :href="href"
    :disabled="!isALinktag && isDisabled"
    :aria-disabled="isDisabled"
    :checked="isChecked"
    @blur="$emit('blur', $event)"
    @click="onClick($event)">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'z-button',
  props: {
    isBlock: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isChecked: { type: Boolean, default: false },
    href: { type: String, default: null }
  },
  computed: {
    isALinktag() {
      return this.href && this.href.trim()
    }
  },
  methods: {
    onClick(event) {
      if (event) {
        if (!this.isDisabled) {
          this.$emit('click', event)
        } else {
          event.preventDefault()
        }
      }
    }
  }
}
</script>
