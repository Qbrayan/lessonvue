// The Vue build version to load with the `import` command
require('./assets/css/app.css')
require('./assets/css/foundation.css')
// require('./assets/js/app.js')
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import head from 'components/header'

Vue.component('header-part', head)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

