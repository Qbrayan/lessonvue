// import VueResource from 'vue-resource'
// Vue.use(VueResource)
import Vue from 'vue'
import Router from 'vue-router'
import Signup from 'components/Signup'
import Login from 'components/Login'
import Home from 'components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    }
  ]
})
