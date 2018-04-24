// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import attrchange from 'lazysizes/plugins/attrchange/ls.attrchange.min'
import lazysizes from 'lazysizes'

Vue.config.productionTip = false
Vue.use(attrchange)
Vue.use(lazysizes)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
