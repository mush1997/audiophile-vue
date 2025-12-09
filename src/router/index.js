import { useMenuStore } from '@/stores/menu'
import { useCartStore } from '@/stores/cart'
import { useShadowStore } from '@/stores/shadow'
import { storeToRefs } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue'), meta: { title: 'Audiophile Website' } },
  { path: '/category/:categoryName', name: 'Category', component: () => import('@/views/CategoryView.vue') },
  { path: '/product/:productName', name: 'Product', component: () => import('@/views/ProductView.vue') },
  { path: '/checkout', name: 'Checkout', component: () => import('@/views/CheckoutView.vue'), meta: { title: 'Checkout | Audiophile' } },
  { path: '/:notFound(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue'), meta: { title: 'Not Found | Audiophile' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' })
        }, 500)
      })
    }
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

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router