import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _23ce1dd5 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _76a67340 = () => interopDefault(import('..\\pages\\changepassword.vue' /* webpackChunkName: "pages/changepassword" */))
const _5272167b = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _58e86f02 = () => interopDefault(import('..\\pages\\customer-review.vue' /* webpackChunkName: "pages/customer-review" */))
const _61596c17 = () => interopDefault(import('..\\pages\\flas-sale.vue' /* webpackChunkName: "pages/flas-sale" */))
const _4e7d2154 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _352d6df8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _57e1b318 = () => interopDefault(import('..\\pages\\official-store.vue' /* webpackChunkName: "pages/official-store" */))
const _82a578a2 = () => interopDefault(import('..\\pages\\official-store-grid.vue' /* webpackChunkName: "pages/official-store-grid" */))
const _261bf589 = () => interopDefault(import('..\\pages\\OfficialStoreFilter.vue' /* webpackChunkName: "pages/OfficialStoreFilter" */))
const _6196f16f = () => interopDefault(import('..\\pages\\OfficialStoreFilterGrid.vue' /* webpackChunkName: "pages/OfficialStoreFilterGrid" */))
const _75ffbf3e = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _1c05dfbf = () => interopDefault(import('..\\pages\\product-details.vue' /* webpackChunkName: "pages/product-details" */))
const _36701119 = () => interopDefault(import('..\\pages\\product-grid.vue' /* webpackChunkName: "pages/product-grid" */))
const _73afca71 = () => interopDefault(import('..\\pages\\product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _66e3fa26 = () => interopDefault(import('..\\pages\\refund.vue' /* webpackChunkName: "pages/refund" */))
const _77809a74 = () => interopDefault(import('..\\pages\\return-and-replacement.vue' /* webpackChunkName: "pages/return-and-replacement" */))
const _20997188 = () => interopDefault(import('..\\pages\\sell-on-ecommerce.vue' /* webpackChunkName: "pages/sell-on-ecommerce" */))
const _2745d140 = () => interopDefault(import('..\\pages\\sell-on-filter.vue' /* webpackChunkName: "pages/sell-on-filter" */))
const _7281852d = () => interopDefault(import('..\\pages\\seller-form.vue' /* webpackChunkName: "pages/seller-form" */))
const _a44074e0 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _0113c40c = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _84d83748 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-dashboard.vue' /* webpackChunkName: "pages/affiliate/affiliate-dashboard" */))
const _2f96956e = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe" */))
const _5a7870d7 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe-register.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe-register" */))
const _1c46e5d3 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-transfer.vue' /* webpackChunkName: "pages/affiliate/affiliate-transfer" */))
const _5f80311d = () => interopDefault(import('..\\pages\\category\\all-category.vue' /* webpackChunkName: "pages/category/all-category" */))
const _4aa95b5c = () => interopDefault(import('..\\pages\\category\\category-grid.vue' /* webpackChunkName: "pages/category/category-grid" */))
const _17eb0baa = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _1c835e56 = () => interopDefault(import('..\\pages\\seller\\seller-account-setting.vue' /* webpackChunkName: "pages/seller/seller-account-setting" */))
const _33bad8c4 = () => interopDefault(import('..\\pages\\seller\\seller-customer-returns.vue' /* webpackChunkName: "pages/seller/seller-customer-returns" */))
const _6d76e4a0 = () => interopDefault(import('..\\pages\\seller\\seller-inventories.vue' /* webpackChunkName: "pages/seller/seller-inventories" */))
const _f438648a = () => interopDefault(import('..\\pages\\seller\\seller-inventory-post.vue' /* webpackChunkName: "pages/seller/seller-inventory-post" */))
const _19e06ba6 = () => interopDefault(import('..\\pages\\seller\\seller-message.vue' /* webpackChunkName: "pages/seller/seller-message" */))
const _2579e3a2 = () => interopDefault(import('..\\pages\\seller\\seller-orders.vue' /* webpackChunkName: "pages/seller/seller-orders" */))
const _31b1b2cf = () => interopDefault(import('..\\pages\\seller\\seller-profile.vue' /* webpackChunkName: "pages/seller/seller-profile" */))
const _52375543 = () => interopDefault(import('..\\pages\\seller\\seller-wallet.vue' /* webpackChunkName: "pages/seller/seller-wallet" */))
const _18a5870c = () => interopDefault(import('..\\pages\\user\\my-reviews.vue' /* webpackChunkName: "pages/user/my-reviews" */))
const _0a907d57 = () => interopDefault(import('..\\pages\\user\\user-orders.vue' /* webpackChunkName: "pages/user/user-orders" */))
const _83dbaeb2 = () => interopDefault(import('..\\pages\\user\\user-profile.vue' /* webpackChunkName: "pages/user/user-profile" */))
const _156d88b9 = () => interopDefault(import('..\\pages\\user\\user-whichlist.vue' /* webpackChunkName: "pages/user/user-whichlist" */))
const _1bc1a5ed = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _23ce1dd5,
    name: "cart"
  }, {
    path: "/changepassword",
    component: _76a67340,
    name: "changepassword"
  }, {
    path: "/checkout",
    component: _5272167b,
    name: "checkout"
  }, {
    path: "/customer-review",
    component: _58e86f02,
    name: "customer-review"
  }, {
    path: "/flas-sale",
    component: _61596c17,
    name: "flas-sale"
  }, {
    path: "/forget-password",
    component: _4e7d2154,
    name: "forget-password"
  }, {
    path: "/login",
    component: _352d6df8,
    name: "login"
  }, {
    path: "/official-store",
    component: _57e1b318,
    name: "official-store"
  }, {
    path: "/official-store-grid",
    component: _82a578a2,
    name: "official-store-grid"
  }, {
    path: "/OfficialStoreFilter",
    component: _261bf589,
    name: "OfficialStoreFilter"
  }, {
    path: "/OfficialStoreFilterGrid",
    component: _6196f16f,
    name: "OfficialStoreFilterGrid"
  }, {
    path: "/payment",
    component: _75ffbf3e,
    name: "payment"
  }, {
    path: "/product-details",
    component: _1c05dfbf,
    name: "product-details"
  }, {
    path: "/product-grid",
    component: _36701119,
    name: "product-grid"
  }, {
    path: "/product-list",
    component: _73afca71,
    name: "product-list"
  }, {
    path: "/refund",
    component: _66e3fa26,
    name: "refund"
  }, {
    path: "/return-and-replacement",
    component: _77809a74,
    name: "return-and-replacement"
  }, {
    path: "/sell-on-ecommerce",
    component: _20997188,
    name: "sell-on-ecommerce"
  }, {
    path: "/sell-on-filter",
    component: _2745d140,
    name: "sell-on-filter"
  }, {
    path: "/seller-form",
    component: _7281852d,
    name: "seller-form"
  }, {
    path: "/service",
    component: _a44074e0,
    name: "service"
  }, {
    path: "/update-password",
    component: _0113c40c,
    name: "update-password"
  }, {
    path: "/affiliate/affiliate-dashboard",
    component: _84d83748,
    name: "affiliate-affiliate-dashboard"
  }, {
    path: "/affiliate/affiliate-programe",
    component: _2f96956e,
    name: "affiliate-affiliate-programe"
  }, {
    path: "/affiliate/affiliate-programe-register",
    component: _5a7870d7,
    name: "affiliate-affiliate-programe-register"
  }, {
    path: "/affiliate/affiliate-transfer",
    component: _1c46e5d3,
    name: "affiliate-affiliate-transfer"
  }, {
    path: "/category/all-category",
    component: _5f80311d,
    name: "category-all-category"
  }, {
    path: "/category/category-grid",
    component: _4aa95b5c,
    name: "category-category-grid"
  }, {
    path: "/category/category-list",
    component: _17eb0baa,
    name: "category-category-list"
  }, {
    path: "/seller/seller-account-setting",
    component: _1c835e56,
    name: "seller-seller-account-setting"
  }, {
    path: "/seller/seller-customer-returns",
    component: _33bad8c4,
    name: "seller-seller-customer-returns"
  }, {
    path: "/seller/seller-inventories",
    component: _6d76e4a0,
    name: "seller-seller-inventories"
  }, {
    path: "/seller/seller-inventory-post",
    component: _f438648a,
    name: "seller-seller-inventory-post"
  }, {
    path: "/seller/seller-message",
    component: _19e06ba6,
    name: "seller-seller-message"
  }, {
    path: "/seller/seller-orders",
    component: _2579e3a2,
    name: "seller-seller-orders"
  }, {
    path: "/seller/seller-profile",
    component: _31b1b2cf,
    name: "seller-seller-profile"
  }, {
    path: "/seller/seller-wallet",
    component: _52375543,
    name: "seller-seller-wallet"
  }, {
    path: "/user/my-reviews",
    component: _18a5870c,
    name: "user-my-reviews"
  }, {
    path: "/user/user-orders",
    component: _0a907d57,
    name: "user-user-orders"
  }, {
    path: "/user/user-profile",
    component: _83dbaeb2,
    name: "user-user-profile"
  }, {
    path: "/user/user-whichlist",
    component: _156d88b9,
    name: "user-user-whichlist"
  }, {
    path: "/",
    component: _1bc1a5ed,
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
