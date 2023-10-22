import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02a6db06 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _2b1935e8 = () => interopDefault(import('..\\pages\\changepassword.vue' /* webpackChunkName: "pages/changepassword" */))
const _0b9411ba = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _32ce015a = () => interopDefault(import('..\\pages\\customer-review.vue' /* webpackChunkName: "pages/customer-review" */))
const _9bdcbf22 = () => interopDefault(import('..\\pages\\flas-sale.vue' /* webpackChunkName: "pages/flas-sale" */))
const _9ab1fca4 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _6659695c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _eefc2dc8 = () => interopDefault(import('..\\pages\\official-store.vue' /* webpackChunkName: "pages/official-store" */))
const _2c51ea07 = () => interopDefault(import('..\\pages\\official-store-grid.vue' /* webpackChunkName: "pages/official-store-grid" */))
const _d87ec83e = () => interopDefault(import('..\\pages\\OfficialStoreFilter.vue' /* webpackChunkName: "pages/OfficialStoreFilter" */))
const _f55ea872 = () => interopDefault(import('..\\pages\\OfficialStoreFilterGrid.vue' /* webpackChunkName: "pages/OfficialStoreFilterGrid" */))
const _6b2cea8e = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _14291bd2 = () => interopDefault(import('..\\pages\\product-details.vue' /* webpackChunkName: "pages/product-details" */))
const _baf9447e = () => interopDefault(import('..\\pages\\product-grid.vue' /* webpackChunkName: "pages/product-grid" */))
const _4079d1ce = () => interopDefault(import('..\\pages\\product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _69a1ed95 = () => interopDefault(import('..\\pages\\refund.vue' /* webpackChunkName: "pages/refund" */))
const _7a0b95c8 = () => interopDefault(import('..\\pages\\return-and-replacement.vue' /* webpackChunkName: "pages/return-and-replacement" */))
const _1763cde0 = () => interopDefault(import('..\\pages\\sell-on-ecommerce.vue' /* webpackChunkName: "pages/sell-on-ecommerce" */))
const _be604bf0 = () => interopDefault(import('..\\pages\\sell-on-filter.vue' /* webpackChunkName: "pages/sell-on-filter" */))
const _75fe0385 = () => interopDefault(import('..\\pages\\seller-form.vue' /* webpackChunkName: "pages/seller-form" */))
const _996da030 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _4d489f5c = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _108751f8 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-dashboard.vue' /* webpackChunkName: "pages/affiliate/affiliate-dashboard" */))
const _135f4da1 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe" */))
const _9a108902 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe-register.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe-register" */))
const _47717e2b = () => interopDefault(import('..\\pages\\affiliate\\affiliate-transfer.vue' /* webpackChunkName: "pages/affiliate/affiliate-transfer" */))
const _aa0c6876 = () => interopDefault(import('..\\pages\\category\\all-category.vue' /* webpackChunkName: "pages/category/all-category" */))
const _0335e6ac = () => interopDefault(import('..\\pages\\category\\category-grid.vue' /* webpackChunkName: "pages/category/category-grid" */))
const _3ba4c602 = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _56abd0fe = () => interopDefault(import('..\\pages\\seller\\seller-account-setting.vue' /* webpackChunkName: "pages/seller/seller-account-setting" */))
const _1def1414 = () => interopDefault(import('..\\pages\\seller\\seller-customer-returns.vue' /* webpackChunkName: "pages/seller/seller-customer-returns" */))
const _505a2970 = () => interopDefault(import('..\\pages\\seller\\seller-inventories.vue' /* webpackChunkName: "pages/seller/seller-inventories" */))
const _9de333da = () => interopDefault(import('..\\pages\\seller\\seller-inventory-post.vue' /* webpackChunkName: "pages/seller/seller-inventory-post" */))
const _3e8964d5 = () => interopDefault(import('..\\pages\\seller\\seller-message.vue' /* webpackChunkName: "pages/seller/seller-message" */))
const _f75102f2 = () => interopDefault(import('..\\pages\\seller\\seller-orders.vue' /* webpackChunkName: "pages/seller/seller-orders" */))
const _7d2b4d77 = () => interopDefault(import('..\\pages\\seller\\seller-profile.vue' /* webpackChunkName: "pages/seller/seller-profile" */))
const _2d6874ca = () => interopDefault(import('..\\pages\\seller\\seller-wallet.vue' /* webpackChunkName: "pages/seller/seller-wallet" */))
const _5679f522 = () => interopDefault(import('..\\pages\\user\\my-reviews.vue' /* webpackChunkName: "pages/user/my-reviews" */))
const _015ad9af = () => interopDefault(import('..\\pages\\user\\user-orders.vue' /* webpackChunkName: "pages/user/user-orders" */))
const _bed95162 = () => interopDefault(import('..\\pages\\user\\user-profile.vue' /* webpackChunkName: "pages/user/user-profile" */))
const _5c5dad61 = () => interopDefault(import('..\\pages\\user\\user-whichlist.vue' /* webpackChunkName: "pages/user/user-whichlist" */))
const _c69c7376 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _02a6db06,
    name: "cart"
  }, {
    path: "/changepassword",
    component: _2b1935e8,
    name: "changepassword"
  }, {
    path: "/checkout",
    component: _0b9411ba,
    name: "checkout"
  }, {
    path: "/customer-review",
    component: _32ce015a,
    name: "customer-review"
  }, {
    path: "/flas-sale",
    component: _9bdcbf22,
    name: "flas-sale"
  }, {
    path: "/forget-password",
    component: _9ab1fca4,
    name: "forget-password"
  }, {
    path: "/login",
    component: _6659695c,
    name: "login"
  }, {
    path: "/official-store",
    component: _eefc2dc8,
    name: "official-store"
  }, {
    path: "/official-store-grid",
    component: _2c51ea07,
    name: "official-store-grid"
  }, {
    path: "/OfficialStoreFilter",
    component: _d87ec83e,
    name: "OfficialStoreFilter"
  }, {
    path: "/OfficialStoreFilterGrid",
    component: _f55ea872,
    name: "OfficialStoreFilterGrid"
  }, {
    path: "/payment",
    component: _6b2cea8e,
    name: "payment"
  }, {
    path: "/product-details",
    component: _14291bd2,
    name: "product-details"
  }, {
    path: "/product-grid",
    component: _baf9447e,
    name: "product-grid"
  }, {
    path: "/product-list",
    component: _4079d1ce,
    name: "product-list"
  }, {
    path: "/refund",
    component: _69a1ed95,
    name: "refund"
  }, {
    path: "/return-and-replacement",
    component: _7a0b95c8,
    name: "return-and-replacement"
  }, {
    path: "/sell-on-ecommerce",
    component: _1763cde0,
    name: "sell-on-ecommerce"
  }, {
    path: "/sell-on-filter",
    component: _be604bf0,
    name: "sell-on-filter"
  }, {
    path: "/seller-form",
    component: _75fe0385,
    name: "seller-form"
  }, {
    path: "/service",
    component: _996da030,
    name: "service"
  }, {
    path: "/update-password",
    component: _4d489f5c,
    name: "update-password"
  }, {
    path: "/affiliate/affiliate-dashboard",
    component: _108751f8,
    name: "affiliate-affiliate-dashboard"
  }, {
    path: "/affiliate/affiliate-programe",
    component: _135f4da1,
    name: "affiliate-affiliate-programe"
  }, {
    path: "/affiliate/affiliate-programe-register",
    component: _9a108902,
    name: "affiliate-affiliate-programe-register"
  }, {
    path: "/affiliate/affiliate-transfer",
    component: _47717e2b,
    name: "affiliate-affiliate-transfer"
  }, {
    path: "/category/all-category",
    component: _aa0c6876,
    name: "category-all-category"
  }, {
    path: "/category/category-grid",
    component: _0335e6ac,
    name: "category-category-grid"
  }, {
    path: "/category/category-list",
    component: _3ba4c602,
    name: "category-category-list"
  }, {
    path: "/seller/seller-account-setting",
    component: _56abd0fe,
    name: "seller-seller-account-setting"
  }, {
    path: "/seller/seller-customer-returns",
    component: _1def1414,
    name: "seller-seller-customer-returns"
  }, {
    path: "/seller/seller-inventories",
    component: _505a2970,
    name: "seller-seller-inventories"
  }, {
    path: "/seller/seller-inventory-post",
    component: _9de333da,
    name: "seller-seller-inventory-post"
  }, {
    path: "/seller/seller-message",
    component: _3e8964d5,
    name: "seller-seller-message"
  }, {
    path: "/seller/seller-orders",
    component: _f75102f2,
    name: "seller-seller-orders"
  }, {
    path: "/seller/seller-profile",
    component: _7d2b4d77,
    name: "seller-seller-profile"
  }, {
    path: "/seller/seller-wallet",
    component: _2d6874ca,
    name: "seller-seller-wallet"
  }, {
    path: "/user/my-reviews",
    component: _5679f522,
    name: "user-my-reviews"
  }, {
    path: "/user/user-orders",
    component: _015ad9af,
    name: "user-user-orders"
  }, {
    path: "/user/user-profile",
    component: _bed95162,
    name: "user-user-profile"
  }, {
    path: "/user/user-whichlist",
    component: _5c5dad61,
    name: "user-user-whichlist"
  }, {
    path: "/",
    component: _c69c7376,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
