import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// https://github.com/Mrconfident/CRM/blob/master/src/router/index.js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
  }, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  }, {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../pages/Team.vue')
  }, {
    path: '/room/:roomID',
    name: 'Room',
    component: () => import(/* webpackChunkName: "room" */ '../pages/Room.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
