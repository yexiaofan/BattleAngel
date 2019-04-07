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
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('../components/Grid.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../components/Card.vue')
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: () => import('../components/Collapse.vue')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('../components/Input.vue')
    }
    
  ]
})
