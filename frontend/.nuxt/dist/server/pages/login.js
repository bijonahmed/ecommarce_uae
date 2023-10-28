exports.ids = [60];
exports.modules = {

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=4ff9db72&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<span style=\"background-image: url('/images/login_bg.jpg');\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  min-height: 100vh;\\r\\n  overflow: hidden;\">", "</span>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row d-flex align-item-center\" style=\"height: 100vh;\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-4 col-md-6 m-auto in_row\">", "</div>", [_vm._ssrNode("<div class=\"login_section\">", "</div>", [_vm._ssrNode("<div class=\"log_sec\">", "</div>", [_vm._ssrNode("<h2>", "</h2>", [_c('Nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Welcome back")])], 1), _vm._ssrNode(" <p> Sign in to continue your Account</p> <form action method=\"post\" enctype=\"multipart/form-data\"><div class=\"group\"><input required=\"required\" type=\"text\" class=\"input\" style=\"--i:0;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>User Name</label> <i class=\"fa-solid fa-user\"></i></div> <div class=\"group\"><input required=\"required\" type=\"password\" class=\"input\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Password</label> <i class=\"fa-regular fa-eye-slash toggle-password\"></i></div> <button type=\"submit\" class=\"btn_login\">Login</button></form> <div class=\"text-end\"><a href=\"forget-password.html\">Forget Password?</a></div> <div class=\"social_login\"><span class=\"signup_link\">Don't Have Account?<button class=\"sign_up\">SignUp</button></span> <div><h5>Or SignIn with:</h5></div> <div><a href=\"#facebook\"><img src=\"images/social/icons8-facebook.svg\" alt></a> <a href=\"#google\"><img src=\"images/social/icons8-google.svg\" alt></a> <a href=\"#twitter\"><img src=\"images/social/icons8-twitter.svg\" alt></a></div></div>")], 2), _vm._ssrNode(" <div class=\"sign_sec\"><div><h1>Sign Up</h1> <p>SignUp to register a new Account.</p></div> <form action method=\"post\" enctype=\"multipart/form-data\"><div class=\"group\"><input required=\"required\" type=\"text\" class=\"input\" style=\"--i:0;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>User Name</label> <i class=\"fa-solid fa-user\"></i></div> <div class=\"group\"><input required=\"required\" type=\"email\" class=\"input\" style=\"--i:0;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Email Address</label> <i class=\"fa-solid fa-envelope\"></i></div> <div class=\"group\"><input required=\"required\" type=\"password\" class=\"input\" style=\"--i:1;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Password</label> <i class=\"fa-regular fa-eye-slash toggle-password\"></i></div> <div class=\"group\"><input required=\"required\" type=\"password\" class=\"input\" style=\"--i:1;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Retype Password</label> <i class=\"fa-regular fa-eye-slash toggle-password\"></i></div> <div class=\"mt-2\"><div class=\"submit__control\"><h3>Are you human?</h3> <div class=\"submit__generated\"></div> <span class=\"fa-solid fa-refresh\"></span> <div></div></div></div> <button type=\"submit\" disabled=\"disabled\" class=\"btn_login submit mt-2\" style=\"opacity: .8;\">Sign Up </button></form> <div class=\"social_login\"><div><h6>Allready have Account?<button type=\"button\" class=\"signIn\">LogIn</button></h6></div> <div><h5>Or SignUp with:</h5></div> <div><a href=\"#facebook\"><img src=\"images/social/icons8-facebook.svg\" alt></a> <a href=\"#google\"><img src=\"images/social/icons8-google.svg\" alt></a> <a href=\"#twitter\"><img src=\"images/social/icons8-twitter.svg\" alt></a></div></div></div>")], 2)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=4ff9db72&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(24);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  head: {
    title: 'Login'
  },
  mounted() {
    external_jquery_default()(".toggle-password").click(function () {
      external_jquery_default()(this).toggleClass("fa-eye-slash fa-eye");
      input = external_jquery_default()(this).parent().find("input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
    external_jquery_default()(".sign_up").on("click", function () {
      external_jquery_default()(".log_sec").css({
        "transform": "translateX(-100%)",
        "transition-duration": "1s",
        "opacity": "0"
      });
      external_jquery_default()(".log_sec").addClass("inactive");
      external_jquery_default()(".sign_sec").css({
        "transform": "translateX(-100%)",
        "transition-duration": "1s",
        "opacity": "1",
        "filter": "none"
      });
      external_jquery_default()(".sign_sec").removeClass("inactive");
      external_jquery_default()(".sign_sec").addClass("active");
    });
    external_jquery_default()(".signIn").on("click", function () {
      external_jquery_default()(".log_sec").css({
        "transform": "translateX(0%)",
        "transition-duration": "1s",
        "opacity": "1"
      });
      external_jquery_default()(".log_sec").removeClass("inactive");
      external_jquery_default()(".log_sec").addClass("active");
      external_jquery_default()(".sign_sec").css({
        "transform": "translateX(100%)",
        "transition-duration": "1s",
        "opacity": "0",
        "filter": "blur(3px)"
      });
      external_jquery_default()(".sign_sec").addClass("inactive");
    });
  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f15f059"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map