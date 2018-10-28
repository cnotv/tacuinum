import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/diseases',
      name: 'diseases',
      component: () => import(/* webpackChunkName: "diseases" */ './views/Diseases.vue')
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import(/* webpackChunkName: "cases" */ './views/Cases.vue')
    },
    {
      path: '/symptoms',
      name: 'symptoms',
      component: () => import(/* webpackChunkName: "symptoms" */ './views/Symptoms.vue')
    },
    {
      path: '/farms',
      name: 'farms',
      // route level code-splitting
      // this generates a separate chunk (farms.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "farms" */ './views/Farms.vue')
    },
    {
      path: '/farm',
      name: 'farm',
      component: () => import(/* webpackChunkName: "farm" */ './views/Farm.vue')
    },
  ]
})
