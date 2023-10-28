exports.ids = [7];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("9bdad34e", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_94204f3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_94204f3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_94204f3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_94204f3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryProductFilter_vue_vue_type_style_index_0_id_94204f3a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading-indicator[data-v-94204f3a]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-94204f3a],.loading-indicator[data-v-94204f3a]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-94204f3a]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-94204f3a]{margin:0}.loader-top[data-v-94204f3a]{top:0}.loader-bottom[data-v-94204f3a]{bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryProductFilter.vue?vue&type=template&id=94204f3a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\" data-v-94204f3a>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-94204f3a>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" data-v-94204f3a>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-94204f3a>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-94204f3a>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"product_section\" data-v-94204f3a>", "</div>", [_vm._ssrNode("<div class=\"row px-2\" data-v-94204f3a>", "</div>", [_vm._ssrNode("<div class=\"col-md-4 desktop_view\" data-v-94204f3a><div class=\"left_side_product\" data-v-94204f3a><div class=\"category_list\" data-v-94204f3a><h6 data-v-94204f3a>Category</h6> <ul data-v-94204f3a>" + _vm._ssrList(_vm.categories, function (category) {
    return "<li data-v-94204f3a><a href=\"#\" data-v-94204f3a>" + _vm._ssrEscape(_vm._s(category.name)) + "</a></li>";
  }) + "</ul></div> <div class=\"delivery_list\" data-v-94204f3a><h6 data-v-94204f3a>Express delivery</h6> <ul data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>DHL </label></li></ul></div> <div class=\"delivery_list\" data-v-94204f3a><h6 data-v-94204f3a>Shipped from </h6> <ul data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>From Bangladesh </label></li> <li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>From Bangladesh </label></li></ul></div> <div class=\"brands_list\" data-v-94204f3a><h6 data-v-94204f3a>Brand</h6> <div class=\"search_side\" data-v-94204f3a><i class=\"fa-solid fa-magnifying-glass\" data-v-94204f3a></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-94204f3a></div> <ul class=\"brand_scroll\" data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>Addidas </label></li> <li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>AGM </label></li></ul></div> <div class=\"price_range\" data-v-94204f3a><div class=\"sidebr_title\" data-v-94204f3a><h6 data-v-94204f3a>Price Range </h6> <button type=\"button\" class=\"btn_apply\" data-v-94204f3a>Apply</button></div> <div class=\"row\" data-v-94204f3a><div class=\"col-md-12\" data-v-94204f3a><div id=\"slider-range\" name=\"rangeInput\" class=\"price-filter-range\" data-v-94204f3a></div> <div class=\"d-flex\" style=\"margin:10px auto\" data-v-94204f3a><input type=\"number\" min=\"0\" max=\"9900\" oninput=\"validity.valid||(value='0');\" id=\"min_price\" class=\"price-range-field form-control\" style=\"width: 45%;margin: 0px 3px;\" data-v-94204f3a> <input type=\"number\" min=\"0\" max=\"10000\" oninput=\"validity.valid||(value='10000');\" id=\"max_price\" class=\"price-range-field form-control\" style=\"width: 45%;margin: 0px 3px\" data-v-94204f3a></div></div></div></div> <div class=\"brands_list\" data-v-94204f3a><h6 data-v-94204f3a>size</h6> <div class=\"search_side\" data-v-94204f3a><i class=\"fa-solid fa-magnifying-glass\" data-v-94204f3a></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-94204f3a></div> <ul class=\"brand_scroll\" data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>XS</label></li> <li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>S</label></li></ul></div> <div class=\"brands_list\" data-v-94204f3a><h6 data-v-94204f3a>Gender</h6> <ul class=\"brand_scroll\" data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>Boys</label></li> <li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>Girls</label></li></ul></div></div></div> "), _vm._ssrNode("<div class=\"col-md-8\" data-v-94204f3a>", "</div>", [_vm._ssrNode("<div class=\"product_list\" data-v-94204f3a>", "</div>", [_vm._ssrNode("<div class=\"title_product\" data-v-94204f3a><div data-v-94204f3a><h6 data-v-94204f3a>" + _vm._ssrEscape(_vm._s(_vm.categoryname)) + "</h6></div> <div data-v-94204f3a><label for data-v-94204f3a>Short By:</label> <select name id data-v-94204f3a><option value data-v-94204f3a>Popularity</option> <option value data-v-94204f3a>New arrival</option> <option value data-v-94204f3a>Low to High</option> <option value data-v-94204f3a>high to low</option></select></div></div> "), _vm._ssrNode("<div class=\"grid_list\" data-v-94204f3a>", "</div>", [_vm._ssrNode("<div data-v-94204f3a><p data-v-94204f3a>" + _vm._ssrEscape(_vm._s(_vm.pro_count) + " product found") + "</p></div> "), _vm._ssrNode("<div class=\"d-flex\" data-v-94204f3a>", "</div>", [_vm._ssrNode("<a type=\"button\" class=\"filter_btn mobile_view\" data-v-94204f3a><i class=\"fa-solid fa-sliders\" data-v-94204f3a></i></a> "), _c('Nuxt-Link', {
    staticClass: "active",
    attrs: {
      "to": "/category/category-list"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-list"
  })]), _vm._ssrNode(" "), _c('Nuxt-Link', {
    attrs: {
      "to": "/category/category-grid"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-grip"
  })])], 2), _vm._ssrNode(" <div class=\"filter_modal\" data-v-94204f3a><div class=\"row px-4\" data-v-94204f3a><div class=\"col-6\" data-v-94204f3a></div> <div class=\"col-6 text-end\" data-v-94204f3a><i class=\"fa-solid fa-x filter_close\" style=\"cursor: pointer;\" data-v-94204f3a></i></div></div> <div class=\"modal_fdiv\" data-v-94204f3a><div class=\"row\" data-v-94204f3a><div class=\"col-md-12\" data-v-94204f3a><div class=\"left_side_product\" data-v-94204f3a><div class=\"category_list\" data-v-94204f3a><h6 data-v-94204f3a>Category</h6> <ul data-v-94204f3a><li data-v-94204f3a><a href=\"#\" data-v-94204f3a>Computing</a></li> <li data-v-94204f3a><a href=\"#\" data-v-94204f3a>Electronics</a></li></ul></div> <div class=\"delivery_list\" data-v-94204f3a><h6 data-v-94204f3a>Express delivery</h6> <ul data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>DHL </label></li></ul></div> <div class=\"delivery_list\" data-v-94204f3a><h6 data-v-94204f3a>Shipped from </h6> <ul data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>From Bangladesh </label></li> <li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>From Bangladesh </label></li></ul></div> <div class=\"brands_list\" data-v-94204f3a><h6 data-v-94204f3a>Brand</h6> <div class=\"search_side\" data-v-94204f3a><i class=\"fa-solid fa-magnifying-glass\" data-v-94204f3a></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-94204f3a></div> <ul class=\"brand_scroll\" data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>Addidas </label></li> <li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>AGM </label></li></ul></div> <div class=\"price_range\" data-v-94204f3a><div class=\"sidebr_title\" data-v-94204f3a><h6 data-v-94204f3a>Price Range </h6> <button type=\"button\" class=\"btn_apply\" data-v-94204f3a>Apply</button></div> <div class=\"row\" data-v-94204f3a><div class=\"col-md-12\" data-v-94204f3a><div id=\"slider-range\" name=\"rangeInput\" class=\"price-filter-range\" data-v-94204f3a></div> <div class=\"d-flex\" style=\"margin:10px auto\" data-v-94204f3a><input type=\"number\" min=\"0\" max=\"9900\" oninput=\"validity.valid||(value='0');\" id=\"min_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px;\" data-v-94204f3a> <input type=\"number\" min=\"0\" max=\"10000\" oninput=\"validity.valid||(value='10000');\" id=\"max_price\" class=\"price-range-field\" style=\"width: 45%;margin: 0px 3px\" data-v-94204f3a></div></div></div></div> <div class=\"brands_list\" data-v-94204f3a><h6 data-v-94204f3a>size</h6> <div class=\"search_side\" data-v-94204f3a><i class=\"fa-solid fa-magnifying-glass\" data-v-94204f3a></i> <input type=\"text\" placeholder=\"Search\" class=\"form-control\" data-v-94204f3a></div> <ul class=\"brand_scroll\" data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>XS</label></li> <li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>S</label></li></ul></div> <div class=\"brands_list\" data-v-94204f3a><h6 data-v-94204f3a>Gender</h6> <ul class=\"brand_scroll\" data-v-94204f3a><li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>Boys</label></li> <li data-v-94204f3a><input type=\"checkbox\" data-v-94204f3a><label for data-v-94204f3a>Girls</label></li></ul></div></div></div></div></div></div>")], 2), _vm._ssrNode(" "), _vm._l(_vm.prouducts, function (item) {
    return _vm._ssrNode("<div class=\"row\" data-v-94204f3a>", "</div>", [_vm.prouducts.length > 0 ? _vm._ssrNode("<div class=\"col-12\" data-v-94204f3a>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.pro_slug}`
      }
    }, [_c('div', {
      staticClass: "products_list"
    }, [_c('div', {
      staticClass: "col"
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail_img
      }
    }), _vm._v(" "), _c('span', [_vm._v("Free Delivery ")])]), _vm._v(" "), _c('div', {
      staticClass: "col pad_ding"
    }, [_c('strong', [_vm._v("Official store ")]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(item.product_name))]), _vm._v(" "), _c('div', {
      staticClass: "d-flex align-items-center"
    }, [_c('div', {
      staticClass: "ratings m-0"
    }, [_c('i', {
      staticClass: "fa fa-star checked"
    }), _vm._v(" "), _c('i', {
      staticClass: "fa fa-star checked"
    }), _vm._v(" "), _c('i', {
      staticClass: "fa fa-star checked"
    }), _vm._v(" "), _c('i', {
      staticClass: "fa fa-star checked"
    }), _vm._v(" "), _c('i', {
      staticClass: "fa fa-star"
    })]), _vm._v(" "), _c('h6', {
      staticClass: "m-0"
    }, [_vm._v("(200)")])]), _vm._v(" "), _c('p', [_c('i', {
      staticClass: "fa-brands fa-dhl"
    })])]), _vm._v(" "), _c('div', {
      staticClass: "col pad_ding"
    }, [_c('h4', [_vm._v("$" + _vm._s(item.price))]), _vm._v(" "), item.discount !== 0 ? _c('h4', {
      staticClass: "disabled"
    }, [_c('strike', [_vm._v("$" + _vm._s(item.discount))]), _c('span', [_vm._v("-45%")])], 1) : _vm._e(), _vm._v(" "), _c('button', {
      staticClass: "btn_sold",
      staticStyle: {
        "display": "block",
        "visibility": "unset"
      },
      attrs: {
        "type": "button",
        "disabled": ""
      }
    }, [_vm._v("Sold Out")])])])])], 1) : _vm._e()]);
  })], 2)])], 2)])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryProductFilter.vue?vue&type=template&id=94204f3a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryProductFilter.vue?vue&type=script&lang=js&
/* harmony default export */ var CategoryProductFiltervue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      prouducts: [],
      categories: [],
      pro_count: 0,
      categoryname: ''
    };
  },
  async mounted() {
    const paramSlug = this.$route.query.slug;
    this.fetchData(paramSlug);
    await this.fetchDataCategory();
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
    async fetchData(slug) {
      this.loading = true;
      const response = await this.$axios.get(`/unauthenticate/findCategorys/${slug}`).then(response => {
        this.prouducts = response.data.result;
        this.pro_count = response.data.pro_count;
        this.categoryname = response.data.categoryname;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
      ;
    },
    async fetchDataCategory() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/getCategoryList`).then(response => {
        this.categories = response.data;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    }
  }
});
// CONCATENATED MODULE: ./components/CategoryProductFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategoryProductFiltervue_type_script_lang_js_ = (CategoryProductFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategoryProductFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryProductFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "94204f3a",
  "6ac44aaa"
  
)

/* harmony default export */ var CategoryProductFilter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=category-product-filter.js.map