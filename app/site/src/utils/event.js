import Vue from 'vue'

const event = {
  bus: null,

  init() {
    if (!this.bus) {
      this.bus = new Vue()
    }

    return this
  },

  emit(name, ...args) {
    this.bus.$emit(name, ...args)
    return this
  },

  on(name, func) {
    this.bus.$on(name, func)
    return this
  }
}

export { event }
