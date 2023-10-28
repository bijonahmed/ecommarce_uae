exports.ids = [26];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=nav-slider.js.map