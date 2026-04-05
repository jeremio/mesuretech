import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  // Redirections vers home
  {
    path: '/tools',
    redirect: '/',
  },
  {
    path: '/tools/converters',
    redirect: '/',
  },
  {
    path: '/tools/guide',
    redirect: '/',
  },
  // Convertisseurs (detail)
  {
    path: '/tools/converters/:type',
    name: 'converter',
    component: () => import('../views/tools/converters/ConverterDetail.vue'),
    props: true,
  },
  // Guide (detail)
  {
    path: '/tools/guide/:category',
    name: 'guide-category',
    component: () => import('../views/tools/guide/GuideCategory.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Toujours revenir en haut lors d'un changement de page
    return { top: 0 }
  },
})

export default router
