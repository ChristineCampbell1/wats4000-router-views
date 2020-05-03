import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Survey from '@/views/Survey.vue'
import Secret from '@/views/Secret.vue'

Vue.use(VueRouter)

export default new VueRouter({

  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: '/Secret',
    name: 'Secret',
    component: Secret
  }
  ]
})
