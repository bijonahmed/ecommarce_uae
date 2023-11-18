exports.ids = [26];
exports.modules = {

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavSlider.vue?vue&type=template&id=2387313a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row my-2\" data-v-2387313a>", "</div>", [_vm._ssrNode("<div class=\"col-xl-2 col-lg-3 col-md-12 col-sm-12 mini_tab_hide\" data-v-2387313a>", "</div>", [_vm._ssrNode("<div class=\"nav_menu\" data-v-2387313a>", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" style=\"text-align: center;\" data-v-2387313a>", "</div>", [_vm._ssrNode("<div class=\"loader-container\" data-v-2387313a>", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\" data-v-2387313a>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.categories.length > 0 ? _vm._ssrNode("<nav data-v-2387313a>", "</nav>", [_vm._ssrNode(_vm._ssrList(_vm.categories, function (category, index) {
    return "<ul data-v-2387313a>" + (index < _vm.limit ? "<li data-v-2387313a><a href=\"#\" class=\"d-flex justify-content-between align-items-center\" data-v-2387313a><div class=\"d-flex align-items-center\" data-v-2387313a><img src=\"images/cat_svg/icons8-apple-100.png\" alt data-v-2387313a>" + _vm._ssrEscape(_vm._s(category.name)) + "</div> <i class=\"fa-solid fa-angle-right\" data-v-2387313a></i></a> <div class=\"sub_menu\" data-v-2387313a>" + (category.children && category.children.length > 0 ? "<div class=\"row\" data-v-2387313a>" + _vm._ssrList(category.children, function (childCategory) {
      return "<div class=\"col-4\" data-v-2387313a><h6 data-v-2387313a><a href=\"#\" data-v-2387313a>" + _vm._ssrEscape(" " + _vm._s(childCategory.name)) + "</a></h6> " + (childCategory.children && childCategory.children.length > 0 ? "<ul data-v-2387313a>" + _vm._ssrList(childCategory.children, function (inSubCategory) {
        return "<li data-v-2387313a><a href=\"#\" data-v-2387313a>" + _vm._ssrEscape(_vm._s(inSubCategory.name)) + "</a></li>";
      }) + "</ul>" : "<!---->") + "</div>";
    }) + "</div>" : "<!---->") + "</div></li>" : "<!---->") + "</ul>";
  }) + " "), _vm._ssrNode("<ul data-v-2387313a>", "</ul>", [_vm._ssrNode("<li data-v-2387313a>", "</li>", [_c('Nuxt-link', {
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
  })])])], 1)])], 2) : _vm._e()], 2)]), _vm._ssrNode(" " + (_vm.sliders.length > 0 ? "<div class=\"col-xl-7 col-lg-9 col-md-12 col-sm-12\" data-v-2387313a><div id=\"carouselExample\" data-bs-ride=\"carousel\" data-bs-interval=\"3000\" class=\"carousel w-100\" data-v-2387313a><div class=\"carousel-indicators\" data-v-2387313a>" + _vm._ssrList(_vm.sliders, function (item, index) {
    return "<button type=\"button\" data-bs-target=\"#carouselExample\"" + _vm._ssrAttr("data-bs-slide-to", index) + _vm._ssrClass(null, {
      'active': index === _vm.currentIndex
    }) + " data-v-2387313a></button>";
  }) + "</div> " + (_vm.sliders.length > 0 ? "<div class=\"carousel-inner\" data-v-2387313a>" + _vm._ssrList(_vm.sliders, function (item, index) {
    return "<div" + _vm._ssrClass("carousel-item", {
      active: index === 0
    }) + " data-v-2387313a><img" + _vm._ssrAttr("src", item.images) + _vm._ssrAttr("alt", 'Slide ' + (index + 1)) + " class=\"d-block w-100\" data-v-2387313a></div>";
  }) + "</div>" : "<!---->") + " <button data-bs-target=\"#carouselExample\" type=\"button\" data-bs-slide=\"prev\" class=\"carousel-control-prev\" data-v-2387313a><span aria-hidden=\"true\" class=\"carousel-control-prev-icon\" data-v-2387313a></span> <span class=\"visually-hidden\" data-v-2387313a>Previous</span></button> <button data-bs-target=\"#carouselExample\" type=\"button\" data-bs-slide=\"next\" class=\"carousel-control-next\" data-v-2387313a><span aria-hidden=\"true\" class=\"carousel-control-next-icon\" data-v-2387313a></span> <span class=\"visually-hidden\" data-v-2387313a>Next</span></button></div></div>" : "<!---->") + " " + (_vm.sliders.length > 0 ? "<div class=\"col-xl-3 col-lg-12 col-sm-12 tab_hide\" data-v-2387313a><div class=\"row\" data-v-2387313a><div class=\"col-12\" data-v-2387313a><img src=\"images/ads_mini(1).jpg\" alt data-v-2387313a></div></div> <div class=\"row mt-2\" data-v-2387313a><div class=\"col-12\" data-v-2387313a><img src=\"images/ads_mini(2).png\" alt data-v-2387313a></div></div></div>" : "<!---->"))], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NavSlider.vue?vue&type=template&id=2387313a&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavSlider.vue?vue&type=script&lang=js&

/* harmony default export */ var NavSlidervue_type_script_lang_js_ = ({
  data() {
    return {
      loading: true,
      limit: 12,
      categories: [],
      sliders: [],
      currentIndex: 0
    };
    // Set the initial index
  },

  mounted() {
    this.slidersImg();
    this.fetchData();
  },
  methods: {
    handleCarouselSlide(event) {
      const carousel = event.target;
      if (carousel.classList.contains('carousel')) {
        if (carousel.querySelector('.carousel-inner .carousel-item:last-child').classList.contains('active')) {
          carousel.querySelector('.carousel-control-next').click();
        }
      }
    },
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
      setTimeout(() => {
        this.loading = false;
        this.categories = response.data;
      }, 2000); // Adjust the time as needed
    },

    async slidersImg() {
      console.log("slider images...");
      const response = await this.$axios.get(`/unauthenticate/slidersImages`);
      this.sliders = response.data;
    }
  }
});
// CONCATENATED MODULE: ./components/NavSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavSlidervue_type_script_lang_js_ = (NavSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavSlider.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavSlidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2387313a",
  "47e1b1b4"
  
)

/* harmony default export */ var NavSlider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=nav-slider.js.map