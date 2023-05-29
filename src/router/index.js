import { createRouter, createWebHistory } from "vue-router";

import Index from '@/views/Index.vue'
import Button from '@/views/Button.vue'
import Tipography from '@/views/Tipography.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/tipography',
      name: 'tipography',
      component: Tipography
    }
  ]
})

export default router