import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// TODO: Import the Survey component
// TODO: Import the Secret component

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // TODO: Add the Survey route definition
  // TODO: Add the Secret route definition
]

const router = new VueRouter({
  routes
})

export default router
