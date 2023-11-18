exports.ids = [3];
exports.modules = {

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryFive.vue?vue&type=template&id=4d44771a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"top_selling\">", "</div>", [_vm._ssrNode("<div class=\"row mb-2\">", "</div>", [_vm._ssrNode("<div class=\"sell_title stock_deals\">", "</div>", [_vm._ssrNode("<div><h5>" + _vm._ssrEscape(_vm._s(_vm.categoryname)) + "</h5></div> "), _vm._ssrNode("<div>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": 'category/category-list?slug=' + _vm.category_slug
    }
  }, [_vm._v("See All "), _c('i', {
    staticClass: "fas fa-arrow-right"
  })])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container text-center my-3\">", "</div>", [_vm.loading ? _vm._ssrNode("<div class=\"loading-indicator\" style=\"text-align: center;\">", "</div>", [_vm._ssrNode("<div class=\"loader-container\">", "</div>", [_c('center', {
    staticClass: "loader-text"
  }, [_vm._v("Loading...")]), _vm._ssrNode(" <img src=\"/loader/loader.gif\" alt=\"Loader\">")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"slider-container\">", "</div>", [_vm._ssrNode("<div class=\"slider\">", "</div>", [_vm._l(_vm.products, function (item) {
    return _vm._ssrNode("<div class=\"slide\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": `/product-details/${item.slug}`
      }
    }, [_c('img', {
      staticStyle: {
        "height": "150px",
        "width": "150px"
      },
      attrs: {
        "src": item.thumnail,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "text-center"
    }, [_vm._v("\n                                    " + _vm._s(item.name) + "\n                                ")])])], 1);
  }), _vm._ssrNode(" <div class=\"prev-slide\">‹</div> <div class=\"next-slide\">›</div>")], 2)])], 2)], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CategoryFive.vue?vue&type=template&id=4d44771a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CategoryFive.vue?vue&type=script&lang=js&
/* harmony default export */ var CategoryFivevue_type_script_lang_js_ = ({
  data() {
    return {
      categoryname: '',
      currentSlide: 0,
      category_slug: '',
      loading: false,
      products: []
    };
  },
  async mounted() {
    await this.initOwlCarousel();
    await this.fetchDefaultProduct();
  },
  methods: {
    scrollLeft() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.scrollToCurrentSlide();
      }
    },
    scrollRight() {
      if (this.currentSlide < this.products.length - 1) {
        this.currentSlide++;
        this.scrollToCurrentSlide();
      }
    },
    scrollToCurrentSlide() {
      const slidesContainer = this.$refs.slider;
      slidesContainer.scrollLeft = this.currentSlide * (150 + 10); // Adjust for slide width and margin
    },

    async fetchDefaultProduct() {
      this.loading = true;
      const category_id = 26;
      await this.$axios.get('/unauthenticate/searchProductCategory', {
        params: {
          category_id: category_id
          // Add more parameters as needed
        }
      }).then(response => {
        //console.log(response.data.result);
        this.products = response.data.result;
        this.categoryname = response.data.name;
        this.category_slug = response.data.catslug;
      }).catch(error => {
        // Handle error
      }).finally(() => {
        this.loading = false; // Hide loader after response
      });
      ;
    },
    async initOwlCarousel() {
      const slider = this.$el.querySelector('.slider');
      let isDown = false;
      let startX;
      let scrollLeft;
      slider.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
      });
      slider.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * 3; // Adjust this value for smoother scrolling
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }
});
// CONCATENATED MODULE: ./components/CategoryFive.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CategoryFivevue_type_script_lang_js_ = (CategoryFivevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CategoryFive.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CategoryFivevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "75372c7e"
  
)

/* harmony default export */ var CategoryFive = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=category-five.js.map