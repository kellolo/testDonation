import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Donation from '../views/Donation.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
