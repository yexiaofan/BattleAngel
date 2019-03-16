import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('../components/Icon.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../components/Button.vue')
    }
  ]
})
