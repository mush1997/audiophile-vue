import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/category/:categoryName', name: 'Category', component: () => import('@/views/CategoryView.vue') },
  { path: '/product/:productName', name: 'Product', component: () => import('@/views/ProductView.vue') },
  { path: '/checkout', name: 'Checkout', component: () => import('@/views/CheckoutView.vue') },
  { path: '/:notFound(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => savedPosition || { top: 0, behavior: 'smooth' }
})

export default router
