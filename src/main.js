// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  router,
  render (h) {
    return h(App)
  },
  methods: {
    afterLeave () {
      this.$root.$emit('trigger-scroll')
    }
  }
}).$mount('#app')
