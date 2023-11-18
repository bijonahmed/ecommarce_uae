exports.ids = [7];
exports.modules = {

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryPart.vue?vue&type=template&id=4add9f57&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"category\">", "</div>", [_vm._ssrNode("<div class=\"row px-2\">", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" style=\"text-align: center;\">", "</div>", [_vm._ssrNode("<div class=\"loader-container\">", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\">")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.prouducts, function (item) {
    return _vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-3 col-3\">", "</div>", [_c('Nuxt-link', {
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_c('div', {
      staticClass: "cat_div"
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": item.thumnail,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))])])])], 1);
  })], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryPart.vue?vue&type=template&id=4add9f57&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryPart.vue?vue&type=script&lang=js&
/* harmony default export */ var CategoryPartvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      prouducts: []
    };
  },
  async mounted() {
    await this.fetchDefaultProduct();
  },
  methods: {
    async fetchDefaultProduct() {
      this.loading = true;
      await this.$axios.get(`/unauthenticate/limitedProducts`).then(response => {
        this.prouducts = response.data;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    }
  }
});
// CONCATENATED MODULE: ./components/CategoryPart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategoryPartvue_type_script_lang_js_ = (CategoryPartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategoryPart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryPartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "525ddd82"
  
)

/* harmony default export */ var CategoryPart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=category-part.js.map