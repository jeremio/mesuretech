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
  // Routes des outils
  {
    path: '/tools',
    component: () => import('../views/tools/ToolsView.vue'),
    children: [
      {
        path: '',
        name: 'tools',
        redirect: { name: 'converters' },
      },
    ],
  },
  // Convertisseurs
  {
    path: '/tools/converters',
    name: 'converters',
    component: () => import('../views/tools/converters/ConvertersView.vue'),
  },
  {
    path: '/tools/converters/:type',
    name: 'converter',
    component: () => import('../views/tools/converters/ConverterDetail.vue'),
    props: true,
  },
  // Guide des unités
  {
    path: '/tools/guide',
    name: 'guide',
    component: () => import('../views/tools/guide/GuideView.vue'),
  },
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
