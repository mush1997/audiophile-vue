import { useMenuStore } from '@/stores/menu'
import { useCartStore } from '@/stores/cart'
import { useShadowStore } from '@/stores/shadow'
import { storeToRefs } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/category/:categoryName', name: 'Category', component: () => import('@/views/CategoryView.vue') },
  { path: '/product/:productName', name: 'Product', component: () => import('@/views/ProductView.vue') },
  { path: '/checkout', name: 'Checkout', component: () => import('@/views/CheckoutView.vue') },
  { path: '/:notFound(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedPosition || { top: 0, behavior: 'smooth' })
      }, 150)
    })
  }
})

router.beforeEach(() => {
  const { hideMenu } = storeToRefs(useMenuStore())
  const { hideCart } = storeToRefs(useCartStore())
  const shadowStore = useShadowStore()
  const { menuShadow, cartShadow } = storeToRefs(shadowStore)
  const { hideShadow } = shadowStore

  hideShadow(hideMenu, menuShadow)
  hideShadow(hideCart, cartShadow)
})

export default router