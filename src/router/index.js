import { createRouter, createWebHistory } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { useShadowStore } from '@/stores/shadow'
import { storeToRefs } from 'pinia'

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

router.beforeEach(() => {
  const { hideMenu } = storeToRefs(useMenuStore())
  const { menuShadow, cartShadow, alertShadow } = storeToRefs(useShadowStore())
  hideMenu.value = true
  menuShadow.value = false
  cartShadow.value = false
  alertShadow.value = false
})

export default router
