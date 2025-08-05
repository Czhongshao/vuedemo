// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'demoIndex',
        component: () => import('@/views/demoIndex.vue')
    },
    // 捕获所有未匹配的路由，重定向到首页
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router