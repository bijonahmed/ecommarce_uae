import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _896a0940 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _29a01f0b = () => interopDefault(import('..\\pages\\changepassword.vue' /* webpackChunkName: "pages/changepassword" */))
const _044192f4 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _05243c97 = () => interopDefault(import('..\\pages\\customer-review.vue' /* webpackChunkName: "pages/customer-review" */))
const _23904d6c = () => interopDefault(import('..\\pages\\flas-sale.vue' /* webpackChunkName: "pages/flas-sale" */))
const _f605862a = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _3d881cd9 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _f1ee5b82 = () => interopDefault(import('..\\pages\\official-store.vue' /* webpackChunkName: "pages/official-store" */))
const _266e3ec4 = () => interopDefault(import('..\\pages\\official-store-grid.vue' /* webpackChunkName: "pages/official-store-grid" */))
const _e4461ec4 = () => interopDefault(import('..\\pages\\OfficialStoreFilter.vue' /* webpackChunkName: "pages/OfficialStoreFilter" */))
const _88eb4bf8 = () => interopDefault(import('..\\pages\\OfficialStoreFilterGrid.vue' /* webpackChunkName: "pages/OfficialStoreFilterGrid" */))
const _de8d5a14 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _26e833a4 = () => interopDefault(import('..\\pages\\product-grid.vue' /* webpackChunkName: "pages/product-grid" */))
const _6427ecfc = () => interopDefault(import('..\\pages\\product-list.vue' /* webpackChunkName: "pages/product-list" */))
const _7849a9b8 = () => interopDefault(import('..\\pages\\refund.vue' /* webpackChunkName: "pages/refund" */))
const _69e34b3f = () => interopDefault(import('..\\pages\\return-and-replacement.vue' /* webpackChunkName: "pages/return-and-replacement" */))
const _a5cfa446 = () => interopDefault(import('..\\pages\\sell-on-ecommerce.vue' /* webpackChunkName: "pages/sell-on-ecommerce" */))
const _c15279aa = () => interopDefault(import('..\\pages\\sell-on-filter.vue' /* webpackChunkName: "pages/sell-on-filter" */))
const _faf5357c = () => interopDefault(import('..\\pages\\seller-form.vue' /* webpackChunkName: "pages/seller-form" */))
const _7998f825 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _a89c28e2 = () => interopDefault(import('..\\pages\\update-password.vue' /* webpackChunkName: "pages/update-password" */))
const _66eacbb2 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-dashboard.vue' /* webpackChunkName: "pages/affiliate/affiliate-dashboard" */))
const _11fa9a1e = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe" */))
const _082e2ba2 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-programe-register.vue' /* webpackChunkName: "pages/affiliate/affiliate-programe-register" */))
const _460ccaa8 = () => interopDefault(import('..\\pages\\affiliate\\affiliate-transfer.vue' /* webpackChunkName: "pages/affiliate/affiliate-transfer" */))
const _23b6078a = () => interopDefault(import('..\\pages\\category\\all-categorys.vue' /* webpackChunkName: "pages/category/all-categorys" */))
const _349ebae7 = () => interopDefault(import('..\\pages\\category\\category-grid.vue' /* webpackChunkName: "pages/category/category-grid" */))
const _71de743f = () => interopDefault(import('..\\pages\\category\\category-list.vue' /* webpackChunkName: "pages/category/category-list" */))
const _2b7a1421 = () => interopDefault(import('..\\pages\\seller\\seller-account-setting.vue' /* webpackChunkName: "pages/seller/seller-account-setting" */))
const _93fad19a = () => interopDefault(import('..\\pages\\seller\\seller-customer-returns.vue' /* webpackChunkName: "pages/seller/seller-customer-returns" */))
const _1a2e37eb = () => interopDefault(import('..\\pages\\seller\\seller-inventories.vue' /* webpackChunkName: "pages/seller/seller-inventories" */))
const _a0ac9ae0 = () => interopDefault(import('..\\pages\\seller\\seller-inventory-post.vue' /* webpackChunkName: "pages/seller/seller-inventory-post" */))
const _351b0a10 = () => interopDefault(import('..\\pages\\seller\\seller-message.vue' /* webpackChunkName: "pages/seller/seller-message" */))
const _68b19804 = () => interopDefault(import('..\\pages\\seller\\seller-orders.vue' /* webpackChunkName: "pages/seller/seller-orders" */))
const _2414639a = () => interopDefault(import('..\\pages\\seller\\seller-profile.vue' /* webpackChunkName: "pages/seller/seller-profile" */))
const _64b441d0 = () => interopDefault(import('..\\pages\\seller\\seller-wallet.vue' /* webpackChunkName: "pages/seller/seller-wallet" */))
const _6229bcf6 = () => interopDefault(import('..\\pages\\user\\my-reviews.vue' /* webpackChunkName: "pages/user/my-reviews" */))
const _d1e18ca8 = () => interopDefault(import('..\\pages\\user\\user-orders.vue' /* webpackChunkName: "pages/user/user-orders" */))
const _7d2a121c = () => interopDefault(import('..\\pages\\user\\user-profile.vue' /* webpackChunkName: "pages/user/user-profile" */))
const _b4681f78 = () => interopDefault(import('..\\pages\\user\\user-whichlist.vue' /* webpackChunkName: "pages/user/user-whichlist" */))
const _73e079c2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _431fc134 = () => interopDefault(import('..\\pages\\product-details\\_slug.vue' /* webpackChunkName: "pages/product-details/_slug" */))

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
    component: _896a0940,
    name: "cart"
  }, {
    path: "/changepassword",
    component: _29a01f0b,
    name: "changepassword"
  }, {
    path: "/checkout",
    component: _044192f4,
    name: "checkout"
  }, {
    path: "/customer-review",
    component: _05243c97,
    name: "customer-review"
  }, {
    path: "/flas-sale",
    component: _23904d6c,
    name: "flas-sale"
  }, {
    path: "/forget-password",
    component: _f605862a,
    name: "forget-password"
  }, {
    path: "/login",
    component: _3d881cd9,
    name: "login"
  }, {
    path: "/official-store",
    component: _f1ee5b82,
    name: "official-store"
  }, {
    path: "/official-store-grid",
    component: _266e3ec4,
    name: "official-store-grid"
  }, {
    path: "/OfficialStoreFilter",
    component: _e4461ec4,
    name: "OfficialStoreFilter"
  }, {
    path: "/OfficialStoreFilterGrid",
    component: _88eb4bf8,
    name: "OfficialStoreFilterGrid"
  }, {
    path: "/payment",
    component: _de8d5a14,
    name: "payment"
  }, {
    path: "/product-grid",
    component: _26e833a4,
    name: "product-grid"
  }, {
    path: "/product-list",
    component: _6427ecfc,
    name: "product-list"
  }, {
    path: "/refund",
    component: _7849a9b8,
    name: "refund"
  }, {
    path: "/return-and-replacement",
    component: _69e34b3f,
    name: "return-and-replacement"
  }, {
    path: "/sell-on-ecommerce",
    component: _a5cfa446,
    name: "sell-on-ecommerce"
  }, {
    path: "/sell-on-filter",
    component: _c15279aa,
    name: "sell-on-filter"
  }, {
    path: "/seller-form",
    component: _faf5357c,
    name: "seller-form"
  }, {
    path: "/service",
    component: _7998f825,
    name: "service"
  }, {
    path: "/update-password",
    component: _a89c28e2,
    name: "update-password"
  }, {
    path: "/affiliate/affiliate-dashboard",
    component: _66eacbb2,
    name: "affiliate-affiliate-dashboard"
  }, {
    path: "/affiliate/affiliate-programe",
    component: _11fa9a1e,
    name: "affiliate-affiliate-programe"
  }, {
    path: "/affiliate/affiliate-programe-register",
    component: _082e2ba2,
    name: "affiliate-affiliate-programe-register"
  }, {
    path: "/affiliate/affiliate-transfer",
    component: _460ccaa8,
    name: "affiliate-affiliate-transfer"
  }, {
    path: "/category/all-categorys",
    component: _23b6078a,
    name: "category-all-categorys"
  }, {
    path: "/category/category-grid",
    component: _349ebae7,
    name: "category-category-grid"
  }, {
    path: "/category/category-list",
    component: _71de743f,
    name: "category-category-list"
  }, {
    path: "/seller/seller-account-setting",
    component: _2b7a1421,
    name: "seller-seller-account-setting"
  }, {
    path: "/seller/seller-customer-returns",
    component: _93fad19a,
    name: "seller-seller-customer-returns"
  }, {
    path: "/seller/seller-inventories",
    component: _1a2e37eb,
    name: "seller-seller-inventories"
  }, {
    path: "/seller/seller-inventory-post",
    component: _a0ac9ae0,
    name: "seller-seller-inventory-post"
  }, {
    path: "/seller/seller-message",
    component: _351b0a10,
    name: "seller-seller-message"
  }, {
    path: "/seller/seller-orders",
    component: _68b19804,
    name: "seller-seller-orders"
  }, {
    path: "/seller/seller-profile",
    component: _2414639a,
    name: "seller-seller-profile"
  }, {
    path: "/seller/seller-wallet",
    component: _64b441d0,
    name: "seller-seller-wallet"
  }, {
    path: "/user/my-reviews",
    component: _6229bcf6,
    name: "user-my-reviews"
  }, {
    path: "/user/user-orders",
    component: _d1e18ca8,
    name: "user-user-orders"
  }, {
    path: "/user/user-profile",
    component: _7d2a121c,
    name: "user-user-profile"
  }, {
    path: "/user/user-whichlist",
    component: _b4681f78,
    name: "user-user-whichlist"
  }, {
    path: "/",
    component: _73e079c2,
    name: "index"
  }, {
    path: "/product-details/:slug?",
    component: _431fc134,
    name: "product-details-slug"
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
