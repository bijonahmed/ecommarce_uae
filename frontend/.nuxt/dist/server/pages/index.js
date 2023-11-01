exports.ids = [59,1,2,3,4,6,13,17,18,19,20,21,23,24,25,26,27,29,32,37,38,39,41,42];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=75aa89f1&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<body class=\"bgBackground\">", "</body>", [_c('TopBannarDesktopView'), _vm._ssrNode(" "), _c('LogoAndPayment'), _vm._ssrNode(" "), _c('Navbar'), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main_content mainContent\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('NavSlider'), _vm._ssrNode(" "), _c('CategoryPart'), _vm._ssrNode(" "), _c('TopSellingItem'), _vm._ssrNode(" "), _c('FlashSelling'), _vm._ssrNode(" "), _c('DelasForYour'), _vm._ssrNode(" "), _c('LimitedStock'), _vm._ssrNode(" "), _c('OfficialStoreDeals'), _vm._ssrNode(" "), _c('ShopFromOurCollection'), _vm._ssrNode(" "), _c('LargeAppliance'), _vm._ssrNode(" "), _c('PhoneSuperSales'), _vm._ssrNode(" "), _c('MoreCollection'), _vm._ssrNode(" "), _c('BestPrice'), _vm._ssrNode(" "), _c('Appliances'), _vm._ssrNode(" "), _c('TopAppliancesDeals'), _vm._ssrNode(" "), _c('BrandiOfficialStore'), _vm._ssrNode(" "), _c('TopPower'), _vm._ssrNode(" "), _c('BigSavingGrocery'), _vm._ssrNode(" "), _c('HealthandBeauty')], 2)]), _vm._ssrNode(" <div class=\"back_top\"><a href=\"#top\"><i class=\"fa-solid fa-angle-up\"></i></a></div> "), _c('Footer'), _vm._ssrNode(" "), _c('LoginPopup')], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=75aa89f1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initCarousel();
    });
  },
  methods: {
    initCarousel() {
      $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ['', ''],
        autoplayTimeout: 3000
        // Add more options as needed
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d523657c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TopBannarDesktopView: __webpack_require__(56).default,LogoAndPayment: __webpack_require__(26).default,Navbar: __webpack_require__(46).default,NavSlider: __webpack_require__(47).default,CategoryPart: __webpack_require__(57).default,TopSellingItem: __webpack_require__(48).default,FlashSelling: __webpack_require__(58).default,DelasForYour: __webpack_require__(59).default,LimitedStock: __webpack_require__(60).default,OfficialStoreDeals: __webpack_require__(61).default,ShopFromOurCollection: __webpack_require__(62).default,LargeAppliance: __webpack_require__(63).default,PhoneSuperSales: __webpack_require__(64).default,MoreCollection: __webpack_require__(65).default,BestPrice: __webpack_require__(66).default,Appliances: __webpack_require__(67).default,TopAppliancesDeals: __webpack_require__(68).default,BrandiOfficialStore: __webpack_require__(69).default,TopPower: __webpack_require__(70).default,BigSavingGrocery: __webpack_require__(71).default,HealthandBeauty: __webpack_require__(72).default,Footer: __webpack_require__(25).default,LoginPopup: __webpack_require__(73).default})


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=7d198a50&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<footer>", "</footer>", [_vm._ssrNode("<div class=\"mobile_view\">", "</div>", [_vm._ssrNode("<div class=\"f_posi\">", "</div>", [_vm._ssrNode("<div style=\"height: 20px;\"></div> "), _vm._ssrNode("<div class=\"m_footer\">", "</div>", [_vm._ssrNode("<div class=\"f_option\">", "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-table-cells-large"
  }), _vm._v(" "), _c('p', [_vm._v("Category")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-heart"
  }), _vm._v(" "), _c('p', [_vm._v("Wishlist")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"active\">", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-house"
  }), _vm._v(" "), _c('p', [_vm._v("Home")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/cart"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-cart-shopping"
  }), _vm._v(" "), _c('p', [_vm._v("Cart")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_c('div', {
    staticClass: "circle"
  }), _vm._v(" "), _c('i', {
    staticClass: "fa-solid fa-user"
  }), _vm._v(" "), _c('p', [_vm._v("User")])])], 1)], 2)])])], 2)]), _vm._ssrNode(" <div class=\"footer_top desktop_view\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-4 col-md-4 col-sm-12 m-auto\"><div class=\"logo\"><a href=\"#\" class=\"text-white\">Ecommerce <i class=\"fa-regular fa-star\"></i></a></div></div> <div class=\"ccol-lg-4 col-md-4 col-sm-12 m-auto\"><div class=\"newsletter\"><h3>New to Ecommerce</h3> <p>Subscribe to our newsletter to get updates on our latest offers!</p> <div class=\"d-flex\" style=\"position: relative;\"><i class=\"fas fa-envelope\"></i> <input type=\"text\" placeholder=\"Enter email address\" name id class=\"form-control\"> <button type=\"button\">Send</button></div></div></div> <div class=\"col-lg-4 col-md-12 m-auto\"><div class=\"store_app\"><div class=\"d-flex\"><div><i class=\"fa-regular fa-star\"></i></div> <div><h5>DOWNLOAD ECOMMERCE FREE APP</h5> <p>Get access to exclusive offers!</p></div></div> <div class=\"d-flex align-items-center\"><a href=\"#\" target=\"_blank\" role=\"button\" class=\"market-btn a\"><div class=\"d-flex justify-content-between\"><div><img src=\"/images/apple-logo.svg\" alt></div> <div><span class=\"market-button-subtitle\">Download on the</span> <span class=\"market-button-title\">Google Play</span></div></div></a> <a href=\"#\" target=\"_blank\" role=\"button\" class=\"market-btn\"><div class=\"d-flex justify-content-between\"><div><img src=\"/images/google-play-store.svg\" alt></div> <div><span class=\"market-button-subtitle\">Download on the</span> <span class=\"market-button-title\">Google Play</span></div></div></a></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"footer_links desktop_view\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Pages</h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_vm._v("All Category")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_vm._v("Category List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_vm._v("Product List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/cart"
    }
  }, [_vm._v("Cart")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/checkout"
    }
  }, [_vm._v("CheckOut")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/payment"
    }
  }, [_vm._v("Payment")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Login and service </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Login & Signup ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller_form"
    }
  }, [_vm._v("Seller Register ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/forget-password"
    }
  }, [_vm._v("Forget Password")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/changepassword"
    }
  }, [_vm._v("Change Password")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/update-password"
    }
  }, [_vm._v("Update Password")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/service"
    }
  }, [_vm._v("Service")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/flas-sale"
    }
  }, [_vm._v("Flash Sale")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/official-store"
    }
  }, [_vm._v("Offical Store")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/customer-review"
    }
  }, [_vm._v("Customer Review")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>User Profile </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_vm._v("User Profile")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_vm._v("User Orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_vm._v("User Wishlist")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user-review"
    }
  }, [_vm._v("User Reviews")])], 1)], 2), _vm._ssrNode(" <h6>Policy </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/refund"
    }
  }, [_vm._v("Refund")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/return-and-replacement"
    }
  }, [_vm._v("Return and Replacement")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Seller Dashboard</h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-inventories"
    }
  }, [_vm._v("Seller Inventories")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-inventory-post"
    }
  }, [_vm._v("Add Inventories")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/Seller/seller-orders"
    }
  }, [_vm._v("Seller Orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-customer-returns"
    }
  }, [_vm._v("Customer Returns")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-profile"
    }
  }, [_vm._v("Seller Profile")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-account-setting"
    }
  }, [_vm._v("Account Settings")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-wallet"
    }
  }, [_vm._v("Wallet")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/seller-message"
    }
  }, [_vm._v("Seller Massage")])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3 col-6\">", "</div>", [_vm._ssrNode("<h6>Make Money With Us </h6> "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/sell-on-ecommerce"
    }
  }, [_vm._v("Sell On Ecommerce")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-programe"
    }
  }, [_vm._v("Affiliate Programme")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-programe-register"
    }
  }, [_vm._v("Affiliate Programme Register")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-dashboard"
    }
  }, [_vm._v("Affiliate Dashboard")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/affiliate/affiliate-transfer"
    }
  }, [_vm._v("Transfer Affiliate Money")])], 1)], 2)], 2)], 2), _vm._ssrNode(" <div class=\"row\"><div class=\"col-lg-3 col-md-3 col-sm-3 col-12\"><div class=\"social_links\"><h6>Join us on </h6> <ul><li><a href=\"#\"><i class=\"fa-brands fa-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-youtube\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-instagram\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-twitter\"></i></a></li></ul></div></div> <div class=\"col-lg-3 col-md-3 col-sm-3 col-12\"><div class=\"social_links\"><h6>Payment Method &amp; Delivery partners </h6> <ul><li><a href=\"#\"><i class=\"fa-brands fa-cc-mastercard\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-cc-visa\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-stripe\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-dhl\"></i></a></li> <li><a href=\"#\"><i class=\"fa-brands fa-cc-discover\"></i></a></li></ul></div></div></div>")], 2), _vm._ssrNode(" <div class=\"container\"><div class=\"btm_links bg-transparent\"><div class=\"row\"><div class=\"col-9 m-auto text-center\"><div class=\"payment_part\"><a href=\"#\" class=\"a_link active\">Ecommerce</a> <a href=\"#\" class=\"a_link\">PaymentOption</a> <a href=\"#\" class=\"a_link\">PaymentOption</a> <a href=\"#\" class=\"a_link\">PaymentOption</a></div></div></div></div></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=7d198a50&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2715d76e"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(25).default})


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LogoAndPayment.vue?vue&type=template&id=8d0b7920&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"links desktop_view\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-3\">", "</div>", [_vm._ssrNode("<div class=\"web_part\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/sell-on-ecommerce"
    }
  }, [_c('i', {
    staticClass: "fa-regular fa-star"
  }), _vm._v("Sell On Ecommerce")])], 1)]), _vm._ssrNode(" <div class=\"col-9\"><div class=\"payment_part\"><a href=\"#\" class=\"a_link active\">All Brands</a> <a href=\"#\" class=\"a_link\">All Shops</a> <a href=\"#\" class=\"a_link\">Coupons</a> <a href=\"#\" class=\"a_link\">Flash Sale</a> <a href=\"#\" class=\"a_link\">Todays Deal </a> <a href=\"#\" class=\"a_link\">Charity Products</a></div></div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LogoAndPayment.vue?vue&type=template&id=8d0b7920&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LogoAndPayment.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7901a968"
  
)

/* harmony default export */ var LogoAndPayment = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("73d0ad71", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=7bbf4739&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"search_bar\">", "</section>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row justify-content-between align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 col-md-4 col-8\">", "</div>", [_vm._ssrNode("<div class=\"logo nav_tab\">", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasExample\" aria-controls=\"offcanvasExample\" class=\"btn_menu mobile_view\"><i class=\"fa-solid fa-bars-staggered\"></i></button> "), _vm._ssrNode("<div tabindex=\"-1\" id=\"offcanvasExample\" aria-labelledby=\"offcanvasExampleLabel\" class=\"offcanvas offcanvas-start\">", "</div>", [_vm._ssrNode("<div class=\"offcanvas-header\"><button type=\"button\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\" class=\"btn-close\"></button> <h5 id=\"offcanvasExampleLabel\" class=\"offcanvas-title\">Ecommerce</h5></div> "), _vm._ssrNode("<div class=\"offcanvas-body\">", "</div>", [_vm._ssrNode("<div class=\"side_nav\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"sidenav_title\"><a href=\"user-profile.html\"><h6>My Ecommerce Account</h6> <i class=\"fa-solid fa-chevron-right\"></i></a></div> <ul><li><a href=\"#\"><i class=\"fa-solid fa-box\"></i>Order</a></li> <li><a href=\"#\"><i class=\"fa-regular fa-comment-dots\"></i>Pending Reviews</a></li> <li><a href=\"#\"><i class=\"fa-solid fa-ticket-simple\"></i>Voucher </a></li> <li><a href=\"#\"><i class=\"fa-solid fa-heart\"></i>Save items </a></li></ul></div></div> "), _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"sidenav_title\">", "</div>", [_c('Nuxt-link', {
      attrs: {
        "to": "/category/all-categorys"
      }
    }, [_c('h6', [_vm._v(_vm._s(category.name))]), _vm._v(" "), _c('p', [_vm._v("See all")])])], 1), _vm._ssrNode(" <ul>" + _vm._ssrList(category.children, function (childCategory) {
      return "<li><a href=\"#\"><i class=\"fa-solid fa-mobile-screen-button\"></i>" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></li>";
    }) + "</ul>")], 2)]);
  }), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"><ul><li><a href=\"#\">Contact Us</a></li> <li><a href=\"#\">Terms and condition</a></li></ul></div></div>")], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"nav_bar tab_show\" style=\"@media(max-width: 768px){display: none;}\">", "</div>", [_vm._ssrNode("<button type=\"button\" class=\"btn_menu\"><i class=\"fa-solid fa-bars-staggered\"></i></button> "), _vm._ssrNode("<div class=\"nav_menu nav_op\">", "</div>", [_vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode(_vm._ssrList(_vm.categories, function (category, index) {
    return "<ul>" + (index < _vm.limit ? "<li><a href=\"#\" class=\"d-flex justify-content-between align-items-center\"><div class=\"d-flex align-items-center\"><img src=\"/images/cat_svg/icons8-apple-100.png\" alt>" + _vm._ssrEscape(_vm._s(category.name)) + "</div> <i class=\"fa-solid fa-angle-right\"></i></a> <div class=\"sub_menu\">" + (category.children && category.children.length > 0 ? "<div class=\"row\">" + _vm._ssrList(category.children, function (childCategory) {
      return "<div class=\"col-4\"><h6><a href=\"#\">" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></h6> " + (childCategory.children && childCategory.children.length > 0 ? "<ul>" + _vm._ssrList(childCategory.children, function (inSubCategory) {
        return "<li><a href=\"#\">" + _vm._ssrEscape(_vm._s(inSubCategory.name)) + "</a></li>";
      }) + "</ul>" : "<!---->") + "</div>";
    }) + "</div>" : "<!---->") + "</div></li>" : "<!---->") + "</ul>";
  }) + " "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/images/cat_svg/more-100.png",
      "alt": ""
    }
  }), _vm._v("Other Categories")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "fa-solid fa-angle-right"
  })])])], 1)])], 2)])], 2), _vm._ssrNode(" "), _c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Ecommerce "), _c('i', {
    staticClass: "fa-regular fa-star"
  })])], 2)]), _vm._ssrNode(" <div class=\"col-6 desktop_view mini_tab_hide\"><form action><i class=\"fa-solid fa-magnifying-glass\"></i> <input type=\"text\" name id placeholder=\"Search product\" class=\"form-control\"> <button type=\"button\">Search</button></form></div> "), _vm._ssrNode("<div class=\"col-lg-3 col-md-2 col-2 desktop_view\">", "</div>", [_vm._ssrNode("<div class=\"menus\">", "</div>", [_vm._ssrNode("<div class=\"dropdown\">", "</div>", [_vm._ssrNode("<button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle btn_account b_link\"><i class=\"fas fa-user\"></i> Account\r\n                            </button> "), _vm._ssrNode("<ul class=\"dropdown-menu\">", "</ul>", [_vm._ssrNode("<button type=\"button\" class=\"drop_btn login_popup_show\">Sign In </button> "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-profile"
    }
  }, [_vm._v("MY Account")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-orders"
    }
  }, [_vm._v("Orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/user/user-whichlist"
    }
  }, [_vm._v("Wishlist")])], 1)], 2)], 2), _vm._ssrNode(" <div class=\"dropdown\"><button type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"btn dropdown-toggle\"><i class=\"fas fa-circle-question\"></i> Help\r\n                            </button> <ul class=\"dropdown-menu\"><li><a href=\"#\" class=\"dropdown-item\">Help Center </a></li> <li><a href=\"#\" class=\"dropdown-item\">Place An Order</a></li> <li><a href=\"#\" class=\"dropdown-item\">Payment Option </a></li> <li><a href=\"#\" class=\"dropdown-item\">Truck an order </a></li> <li><a href=\"#\" class=\"dropdown-item\">Cancel an order </a></li> <li><a href=\"#\" class=\"dropdown-item\">Return &amp; Refund </a></li> <button type=\"button\" class=\"drop_btn\">live Chart </button></ul></div> "), _c('Nuxt-link', {
    staticClass: "cart_count",
    attrs: {
      "to": "/cart"
    }
  }, [_c('i', {
    staticClass: "fas fa-cart-shopping"
  }), _c('span', {
    staticStyle: {
      "top": "-16px"
    }
  }, [_vm._v("9")]), _vm._v("Cart")])], 2)]), _vm._ssrNode(" <div class=\"col-4 ms-auto mobile_view\"><div class=\"mobile_nav_option\"><a class=\"search_form\"><i class=\"fa-solid fa-magnifying-glass\"></i></a></div></div> <div class=\"search_form_modal\"><div class=\"search_box_main\"><div class=\"bar_search\"><div><a class=\"close_search_modal\"><i class=\"fa-solid fa-arrow-left\"></i></a></div> <div><input type=\"text\" name placeholder=\"Search Product, Brands, Categories\" id></div> <div><button type=\"submit\"><i class=\"fa-solid fa-magnifying-glass\"></i></button></div></div> <ul><li><img src=\"images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><img src=\"images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><img src=\"images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><img src=\"images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><img src=\"images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><img src=\"images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><img src=\"images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><img src=\"images/product(1).jpg\" alt> <a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li> <li><a href=\"product-details.html\">Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!</a></li></ul></div></div>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=7bbf4739&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  data() {
    return {
      limit: 12,
      categories: []
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      this.categories = response.data;
    }
  }
});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e9b18f84"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavSlider.vue?vue&type=template&id=f9806bd4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row my-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-12 col-sm-12 mini_tab_hide\">", "</div>", [_vm._ssrNode("<div class=\"nav_menu\">", "</div>", [_vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode(_vm._ssrList(_vm.categories, function (category, index) {
    return "<ul>" + (index < _vm.limit ? "<li><a href=\"#\" class=\"d-flex justify-content-between align-items-center\"><div class=\"d-flex align-items-center\"><img src=\"images/cat_svg/icons8-apple-100.png\" alt>" + _vm._ssrEscape(_vm._s(category.name)) + "</div> <i class=\"fa-solid fa-angle-right\"></i></a> <div class=\"sub_menu\">" + (category.children && category.children.length > 0 ? "<div class=\"row\">" + _vm._ssrList(category.children, function (childCategory) {
      return "<div class=\"col-4\"><h6><a href=\"#\">" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></h6> " + (childCategory.children && childCategory.children.length > 0 ? "<ul>" + _vm._ssrList(childCategory.children, function (inSubCategory) {
        return "<li><a href=\"#\">" + _vm._ssrEscape(_vm._s(inSubCategory.name)) + "</a></li>";
      }) + "</ul>" : "<!---->") + "</div>";
    }) + "</div>" : "<!---->") + "</div></li>" : "<!---->") + "</ul>";
  }) + " "), _vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "d-flex justify-content-between",
    attrs: {
      "to": "/category/all-categorys"
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "images/cat_svg/more-100.png",
      "alt": ""
    }
  }), _vm._v("Other Categories")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "fa-solid fa-angle-right"
  })])])], 1)])], 2)])]), _vm._ssrNode(" <div class=\"col-xl-7 col-lg-9 col-md-12 col-sm-12\"><div class=\"owl-carousel slider_part\"><div class=\"slide_img\"><a href=\"#\"><img src=\"images/slider_add(1).jpg\" alt class=\"img-fluid\"></a></div> <div class=\"slide_img\"><a href=\"#\"><img src=\"images/slider_add(2).jpg\" alt class=\"img-fluid\"></a></div> <div class=\"slide_img\"><a href=\"#\"><img src=\"images/slider_add(3).png\" alt class=\"img-fluid\"></a></div> <div class=\"slide_img\"><a href=\"#\"><img src=\"images/ads_size.png\" alt class=\"img-fluid\"></a></div></div></div> <div class=\"col-xl-3 col-lg-12 col-sm-12 tab_hide\"><div class=\"row\"><div class=\"col-12\"><img src=\"images/ads_mini(1).jpg\" alt></div></div> <div class=\"row mt-2\"><div class=\"col-12\"><img src=\"images/ads_mini(2).png\" alt></div></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NavSlider.vue?vue&type=template&id=f9806bd4&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavSlider.vue?vue&type=script&lang=js&

/* harmony default export */ var NavSlidervue_type_script_lang_js_ = ({
  data() {
    return {
      limit: 12,
      categories: []
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    redirectCategory(slug) {
      this.$router.push({
        path: '/category/category-list',
        query: {
          slug: slug
        }
      });
    },
    async fetchData() {
      const response = await this.$axios.get(`/unauthenticate/getCategoryList`);
      this.categories = response.data;
    }
  }
});
// CONCATENATED MODULE: ./components/NavSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavSlidervue_type_script_lang_js_ = (NavSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47e1b1b4"
  
)

/* harmony default export */ var NavSlider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopSellingItem.vue?vue&type=template&id=12f7004e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"top_selling\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\"><div class=\"col-6\"><div class=\"sell_title\"><h5>Top Selling items</h5></div></div></div> "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"owl-carousel owl-carousel_s product_slider\">", "</div>", [_vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<a href=\"product-details.html\">", "</a>", [_vm._ssrNode("<div class=\"sell_itm\">", "</div>", [_vm._ssrNode("<img src=\"/images/product(1).jpg\" alt class=\"img-fluid\"> <span>-10%</span> <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5> <h6> 2,000TK</h6> "), _vm._ssrNode("<h6>", "</h6>", [_c('strike', [_vm._v(" 2,000TK")])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<a href=\"product-details.html\">", "</a>", [_vm._ssrNode("<div class=\"sell_itm\">", "</div>", [_vm._ssrNode("<img src=\"/images/product(2).jpg\" alt class=\"img-fluid\"> <span>-100%</span> <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5> <h6> 2,000TK</h6> "), _vm._ssrNode("<h6>", "</h6>", [_c('strike', [_vm._v(" 2,000TK")])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<a href=\"product-details.html\">", "</a>", [_vm._ssrNode("<div class=\"sell_itm\">", "</div>", [_vm._ssrNode("<img src=\"/images/product(3).jpg\" alt class=\"img-fluid\"> <span>-59%</span> <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5> <h6> 2,000TK</h6> "), _vm._ssrNode("<h6>", "</h6>", [_c('strike', [_vm._v(" 2,000TK")])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<a href=\"product-details.html\">", "</a>", [_vm._ssrNode("<div class=\"sell_itm\">", "</div>", [_vm._ssrNode("<img src=\"/images/product(4).jpg\" alt class=\"img-fluid\"> <span>-55%</span> <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5> <h6> 2,000TK</h6> "), _vm._ssrNode("<h6>", "</h6>", [_c('strike', [_vm._v(" 2,000TK")])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<a href=\"product-details.html\">", "</a>", [_vm._ssrNode("<div class=\"sell_itm\">", "</div>", [_vm._ssrNode("<img src=\"/images/product(5).jpg\" alt class=\"img-fluid\"> <span>-50%</span> <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5> <h6> 2,000TK</h6> "), _vm._ssrNode("<h6>", "</h6>", [_c('strike', [_vm._v(" 2,000TK")])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<a href=\"product-details.html\">", "</a>", [_vm._ssrNode("<div class=\"sell_itm\">", "</div>", [_vm._ssrNode("<img src=\"/images/product(6).jpg\" alt class=\"img-fluid\"> <span>-80%</span> <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5> <h6> 2,000TK</h6> "), _vm._ssrNode("<h6>", "</h6>", [_c('strike', [_vm._v(" 2,000TK")])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<a href=\"product-details.html\">", "</a>", [_vm._ssrNode("<div class=\"sell_itm\">", "</div>", [_vm._ssrNode("<img src=\"/images/product(7).jpg\" alt class=\"img-fluid\"> <span>-90%</span> <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5> <h6> 2,000TK</h6> "), _vm._ssrNode("<h6>", "</h6>", [_c('strike', [_vm._v(" 2,000TK")])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"swiper-slide\">", "</div>", [_vm._ssrNode("<a href=\"product-details.html\">", "</a>", [_vm._ssrNode("<div class=\"sell_itm\">", "</div>", [_vm._ssrNode("<img src=\"/images/product(8).jpg\" alt class=\"img-fluid\"> <span>-10%</span> <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam nostrum! Qui ad quos provident doloremque nostrum maiores a vitae.</h5> <h6> 2,000TK</h6> "), _vm._ssrNode("<h6>", "</h6>", [_c('strike', [_vm._v(" 2,000TK")])], 1)], 2)])])], 2)])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopSellingItem.vue?vue&type=template&id=12f7004e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopSellingItem.vue?vue&type=script&lang=js&
/* harmony default export */ var TopSellingItemvue_type_script_lang_js_ = ({
  mounted() {
    this.$nextTick(function () {
      $('.owl-carousel_s').owlCarousel({
        items: 6,
        // Adjust the number of items to your needs
        nav: true,
        // Enable navigation buttons
        responsive: {
          0: {
            items: 2,
            nav: true
          },
          425: {
            items: 4,
            nav: false
          },
          1000: {
            items: 6,
            nav: true,
            loop: false
          }
        }
      });
    });
  }
});
// CONCATENATED MODULE: ./components/TopSellingItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopSellingItemvue_type_script_lang_js_ = (TopSellingItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopSellingItem.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopSellingItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6282a5c8"
  
)

/* harmony default export */ var TopSellingItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBannarDesktopView.vue?vue&type=template&id=715989c0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"top_bannar desktop_view\"><div class=\"container\"><div class=\"col-12\"><img src=\"/images/jumia_top_ads.gif\" alt class=\"img-fluid\"></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopBannarDesktopView.vue?vue&type=template&id=715989c0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopBannarDesktopView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d680722c"
  
)

/* harmony default export */ var TopBannarDesktopView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryPart.vue?vue&type=template&id=2496de47&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(1).jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(2).png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(1).png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(2).png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(1).jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(1).png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(3).gif",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(2).png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(3).gif",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(1).jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(2).png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(1).png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("Phones")])])])], 1)], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryPart.vue?vue&type=template&id=2496de47&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategoryPart.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "525ddd82"
  
)

/* harmony default export */ var CategoryPart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FlashSelling.vue?vue&type=template&id=318f28e4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"sell_title bg_flashSell\"><div><h5><i class=\"fa-solid fa-tag\"></i>Flash Sell</h5></div> <div><p>Time Left: <span id=\"timer\"></span></p></div> <div><a href=\"flashsell-list.html\">See All <i class=\"fas fa-arrow-right\"></i></a></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FlashSelling.vue?vue&type=template&id=318f28e4&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FlashSelling.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6b6a84ee"
  
)

/* harmony default export */ var FlashSelling = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DelasForYour.vue?vue&type=template&id=1f4b8cf8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"deal_foryou\"><div class=\"row mb-2\"><div class=\"col-12 m-auto\"><div class=\"sell_title justify-content-center\"><h5>Deals For You</h5></div></div></div> <div class=\"row\"><div class=\"col-6\"><a href=\"product-list.html\"><img src=\"images/deal(1).jpg\" alt class=\"img-fluid\"></a></div> <div class=\"col-6\"><a href=\"product-list.html\"><img src=\"images/deal(2).jpg\" alt class=\"img-fluid\"></a></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DelasForYour.vue?vue&type=template&id=1f4b8cf8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DelasForYour.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ff5bbee6"
  
)

/* harmony default export */ var DelasForYour = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LimitedStock.vue?vue&type=template&id=5bf0b5e7&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"top_selling\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\">", "</div>", [_vm._ssrNode("<div class=\"sell_title stock_deals\">", "</div>", [_vm._ssrNode("<div><h5>Limited Stock Deals</h5></div> "), _vm._ssrNode("<div>", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_vm._v("See All "), _c('i', {
    staticClass: "fas fa-arrow-right"
  })])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/best-price_300x300.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("50% of or above")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/best-price_300x300.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("50% of or above")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/best-price_300x300.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("50% of or above")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/best-price_300x300.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("50% of or above")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/best-price_300x300.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("50% of or above")])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/best-price_300x300.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("50% of or above")])])])], 1)], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LimitedStock.vue?vue&type=template&id=5bf0b5e7&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LimitedStock.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8846e16c"
  
)

/* harmony default export */ var LimitedStock = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OfficialStoreDeals.vue?vue&type=template&id=ce8f30de&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_vm._ssrNode("<div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"sell_title stock_deals\"><div><h5>Official Store Deals | Authenticity Guaranteed</h5></div> <div><a href=\"product-grid.html\">See All <i class=\"fas fa-arrow-right\"></i></a></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OfficialStoreDeals.vue?vue&type=template&id=ce8f30de&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OfficialStoreDeals.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "aee725c2"
  
)

/* harmony default export */ var OfficialStoreDeals = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopFromOurCollection.vue?vue&type=template&id=b6f17958&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\"><div class=\"sell_title stock_deals justify-content-center\"><div class=\"text-center\"><h5>Shop from our collection</h5></div></div></div> "), _vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/iphones_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/fashion-deals_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/iphones_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/fashion-deals_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/iphones_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/fashion-deals_300x400.png",
      "alt": ""
    }
  })])])], 1)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ShopFromOurCollection.vue?vue&type=template&id=b6f17958&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShopFromOurCollection.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e21d46c"
  
)

/* harmony default export */ var ShopFromOurCollection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LargeAppliance.vue?vue&type=template&id=443f99f6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_vm._ssrNode("<div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"sell_title bg_appliance\"><div><h5>Large Appliances | Pay on delivery</h5></div> <div><a href=\"product-grid.html\">See All <i class=\"fas fa-arrow-right\"></i></a></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LargeAppliance.vue?vue&type=template&id=443f99f6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LargeAppliance.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "33f57c40"
  
)

/* harmony default export */ var LargeAppliance = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PhoneSuperSales.vue?vue&type=template&id=edb4e064&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\"><div class=\"sell_title bg_appliance justify-content-center\"><div class=\"text-center\"><h5>Phones Super Sale</h5></div></div></div> "), _vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/iphones_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/iphones_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/iphones_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/iphones_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/iphones_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/iphones_300x400.png",
      "alt": ""
    }
  })])])], 1)], 2)], 2)])]), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"sell_title bg_appliance\"><div><h5>Phone super sale deals</h5></div> <div><a href=\"product-grid.html\">See All <i class=\"fas fa-arrow-right\"></i></a></div></div></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PhoneSuperSales.vue?vue&type=template&id=edb4e064&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PhoneSuperSales.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "365ae8a1"
  
)

/* harmony default export */ var PhoneSuperSales = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MoreCollection.vue?vue&type=template&id=df227cc0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\"><div class=\"sell_title bg_appliance justify-content-center\"><div class=\"text-center\"><h5>More Collection</h5></div></div></div> "), _vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/more_collection.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/more_collection.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/more_collection.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/more_collection.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/more_collection.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/more_collection.png",
      "alt": ""
    }
  })])])], 1)], 2)], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MoreCollection.vue?vue&type=template&id=df227cc0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MoreCollection.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "647aec81"
  
)

/* harmony default export */ var MoreCollection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BestPrice.vue?vue&type=template&id=0d4f9888&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"sell_title bg_appliance\"><div><h5>Best Price</h5></div> <div><a href=\"product-grid.html\">See All <i class=\"fas fa-arrow-right\"></i></a></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BestPrice.vue?vue&type=template&id=0d4f9888&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BestPrice.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0170bef2"
  
)

/* harmony default export */ var BestPrice = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Appliances.vue?vue&type=template&id=0670df41&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\"><div class=\"sell_title bg_appliance justify-content-center\"><div class=\"text-center\"><h5>Appliances</h5></div></div></div> "), _vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/air-conditioners_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/air-conditioners_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/air-conditioners_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ccol-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/air-conditioners_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/air-conditioners_300x400.png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/air-conditioners_300x400.png",
      "alt": ""
    }
  })])])], 1)], 2)], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Appliances.vue?vue&type=template&id=0670df41&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Appliances.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d230d2d8"
  
)

/* harmony default export */ var Appliances = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopAppliancesDeals.vue?vue&type=template&id=192daad4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"sell_title bg_appliance\"><div><h5>Top Appliances Deals</h5></div> <div><a href=\"product-grid.html\">See All <i class=\"fas fa-arrow-right\"></i></a></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopAppliancesDeals.vue?vue&type=template&id=192daad4&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopAppliancesDeals.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a9c2404c"
  
)

/* harmony default export */ var TopAppliancesDeals = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandiOfficialStore.vue?vue&type=template&id=184484ed&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"sell_title bg_appliance\"><div><h5>Brandi Offical store</h5></div> <div><a href=\"product-list.html\">See All <i class=\"fas fa-arrow-right\"></i></a></div></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BrandiOfficialStore.vue?vue&type=template&id=184484ed&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BrandiOfficialStore.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "564ad8d6"
  
)

/* harmony default export */ var BrandiOfficialStore = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopPower.vue?vue&type=template&id=70f0c61c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\"><div class=\"sell_title bg_appliance justify-content-center\"><div class=\"text-center\"><h5>Top Power</h5></div></div></div> "), _vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/powerUp.jpg",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/powerUp1.jpg",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ccol-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/powerUp.jpg",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ccol-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/powerUp1.jpg",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"ccol-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/powerUp.jpg",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/powerUp1.jpg",
      "alt": ""
    }
  })])])], 1)], 2)], 2)])]), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"sell_title bg_appliance\"><div><h5>Top Power Deals</h5></div> <div><a href=\"product-grid.html\">See All <i class=\"fas fa-arrow-right\"></i></a></div></div></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopPower.vue?vue&type=template&id=70f0c61c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TopPower.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c2a1b944"
  
)

/* harmony default export */ var TopPower = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BigSavingGrocery.vue?vue&type=template&id=e197417a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\"><div class=\"sell_title bg_appliance justify-content-center\"><div class=\"text-center\"><h5>Big saving grocery </h5></div></div></div> "), _vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(10).png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(11).jpg",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(12).png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(13).jpg",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(14).png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/cat(15).png",
      "alt": ""
    }
  })])])], 1)], 2)], 2)])]), _vm._ssrNode(" <div class=\"row\"><div class=\"col-12\"><div class=\"top_selling\"><div class=\"row mb-2\"><div class=\"sell_title bg_appliance\"><div><h5>Big Savings Grocery Deals</h5></div> <div><a href=\"product-list.html\">See All <i class=\"fas fa-arrow-right\"></i></a></div></div></div></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BigSavingGrocery.vue?vue&type=template&id=e197417a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BigSavingGrocery.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79a2b2c1"
  
)

/* harmony default export */ var BigSavingGrocery = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HealthandBeauty.vue?vue&type=template&id=1119a1dc&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\"><div class=\"sell_title bg_hb justify-content-center\"><div class=\"text-center\"><h5>Health and beauty </h5></div></div></div> "), _vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/beauty(1).png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/beauty(2).png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/beauty(3).png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/beauty(4).png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/beauty(5).png",
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4\">", "</div>", [_c('Nuxt-Link', {
    attrs: {
      "to": "/product-list"
    }
  }, [_c('div', {
    staticClass: "cat_div"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "images/beauty(6).png",
      "alt": ""
    }
  })])])], 1)], 2)], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HealthandBeauty.vue?vue&type=template&id=1119a1dc&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HealthandBeauty.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "687c8499"
  
)

/* harmony default export */ var HealthandBeauty = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginPopup.vue?vue&type=template&id=6b13861f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"login_popup\"><div class=\"popup_box_modal\"><div><div class=\"row\"><div class=\"col-6 ms-auto text-end\"><button class=\"btn_edit close_login\"><i class=\"fa-solid fa-x\"></i></button></div></div></div> <div class=\"popup_title\"><h1>Login</h1> <p>Login and get access to all the features</p></div> <div><form action=\"user/user-profile.html\"><div class=\"input_group\"><input type=\"text\" placeholder=\"User Name \"> <i class=\"fa-solid fa-user\"></i></div> <div class=\"input_group\"><input type=\"password\" placeholder=\"Password\"> <i class=\"toggle-password fa-solid fa-eye\"></i></div> <div class=\"d-flex justify-content-between align-items-center\"><div class=\"d-flex align-items-center\"><input type=\"checkbox\" id=\"remeber\"><label for=\"remeber\">Remember me</label></div> <a href=\"forget-password.html\">Forget Password</a></div> <div><button type=\"submit\" class=\"btn_logins\">Login</button></div> <div class=\"d-flex\"><p style=\"font-size: 12px !important;\">Don't have Account? <a href=\"login.html\" type=\"button\" class=\"btn_signup\">SignUp</a></p></div></form></div> <div class=\"social_login\"><h4>Login With</h4> <ul><li><a href=\"#\" class=\"btn_social\"><i class=\"fa-brands fa-facebook-f\"></i></a></li> <li><a href=\"#\" class=\"btn_social\"><i class=\"fa-brands fa-google\"></i></a></li> <li><a href=\"#\" class=\"btn_social\"><i class=\"fa-brands fa-twitter\"></i></a></li></ul></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LoginPopup.vue?vue&type=template&id=6b13861f&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LoginPopup.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "78989a71"
  
)

/* harmony default export */ var LoginPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75aa89f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75aa89f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75aa89f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75aa89f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_75aa89f1_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bgBackground{background-color:#b077d8}.mainContent{background-image:url(/images/ECOMMERCE-cover-you-bg.jpeg);background-position:top;background-repeat:no-repeat;background-size:inherit}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map