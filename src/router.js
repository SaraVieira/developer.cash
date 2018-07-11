import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Salaries from './views/Salaries.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/salaries',
      name: 'salaries',
      component: Salaries
    }
  ]
})
