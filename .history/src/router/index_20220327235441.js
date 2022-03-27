import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * @description: 公开路由表
 */
const publicRoutes = [
  {

    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: () => import('@/layout/index')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
