exports.ids = [60];
exports.modules = {

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=250e4f28&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<span style=\"background-image: url('/images/login_bg.jpg');\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  min-height: 100vh;\\r\\n  overflow: hidden;\"><div class=\"container\"><div class=\"row d-flex align-item-center\" style=\"height: 100vh;\"><div class=\"col-lg-4 col-md-6 m-auto in_row\"><div class=\"login_section\"><div class=\"sign_sec\"><div><h1>Sign Up</h1> <p>SignUp to register a new Account.</p></div> <form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"group\"><input type=\"text\"" + _vm._ssrAttr("value", _vm.insertdata.name) + " class=\"input\" style=\"--i:0;\"> " + (_vm.errors.name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.name[0])) + "</span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Name</label> <i class=\"fa-solid fa-user\"></i></div> <div class=\"group\"><input type=\"email\"" + _vm._ssrAttr("value", _vm.insertdata.email) + " class=\"input\" style=\"--i:0;\"> " + (_vm.errors.name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Email Address</label> <i class=\"fa-solid fa-envelope\"></i></div> <div class=\"group\"><input type=\"password\"" + _vm._ssrAttr("value", _vm.insertdata.password) + " class=\"input\" style=\"--i:1;\"> " + (_vm.errors.name ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Password</label> <i class=\"fa-regular fa-eye-slash toggle-password\"></i></div> <div class=\"group\"><input type=\"password\"" + _vm._ssrAttr("value", _vm.insertdata.password_confirmation) + " class=\"input\" style=\"--i:1;\"> <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Retype Password</label> <i class=\"fa-regular fa-eye-slash toggle-password\"></i></div> <br> <button type=\"submit\" class=\"btn_login submit mt-2\" style=\"opacity: .8;\">Sign Up </button></form> <div class=\"social_login\"><div><h6>Allready have Account?<button type=\"button\" class=\"signIn\">LogIn</button></h6></div></div></div> <div class=\"log_sec\"><h2>Welcome back</h2> <p> Sign in to continue your Account</p> <form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\"><div class=\"group\"><input type=\"email\"" + _vm._ssrAttr("value", _vm.login.email) + " class=\"input\" style=\"--i:0;\"> " + (_vm.errors.email ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.email[0])) + "</span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Email</label> <i class=\"fa-solid fa-user\"></i></div> <div class=\"group\"><input type=\"password\"" + _vm._ssrAttr("value", _vm.login.password) + " class=\"input\" style=\"--i:1;\"> " + (_vm.errors.password ? "<span class=\"text-danger\">" + _vm._ssrEscape(_vm._s(_vm.errors.password[0])) + "</span>" : "<!---->") + " <span class=\"highlight\"></span> <span class=\"bar\"></span> <label>Password</label> <i class=\"fa-regular fa-eye-slash toggle-password\"></i></div> <button type=\"submit\" class=\"btn_login\">Login</button></form> <div class=\"text-end\"><a href=\"#\">Forget Password?</a></div> <div class=\"social_login\"><span class=\"signup_link\">Don't Have Account?<button class=\"sign_up\">SignUp</button></span></div></div></div></div></div></div></span>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=250e4f28&

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(32);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  head: {
    title: 'Login'
  },
  data() {
    return {
      insertdata: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      login: {
        email: '',
        password: ''
      },
      notifmsg: '',
      errors: {}
    };
  },
  mounted() {
    this.defaultLoading();
  },
  methods: {
    defaultLoading() {
      this.$nextTick(() => {
        external_jquery_default()(".toggle-password").click(function () {
          external_jquery_default()(this).toggleClass("fa-eye-slash fa-eye");
          let input = external_jquery_default()(this).parent().find("input"); // Declare the 'input' variable with 'let'
          if (input.attr("type") == "password") {
            input.attr("type", "text");
          } else {
            input.attr("type", "password");
          }
        });
        external_jquery_default()(".signIn").on("click", function () {
          external_jquery_default()(".log_sec").css({
            transform: "translateX(-100%)",
            "transition-duration": "1s",
            opacity: "1",
            filter: "blur(0px)"
          });
          external_jquery_default()(".log_sec").addClass("inactive");
          external_jquery_default()(".sign_sec").css({
            transform: "translateX(-100%)",
            "transition-duration": "1s",
            opacity: "0",
            filter: "none"
          });
          external_jquery_default()(".sign_sec").removeClass("inactive");
          external_jquery_default()(".sign_sec").addClass("active");
        });
        external_jquery_default()(".sign_up").on("click", function () {
          external_jquery_default()(".log_sec").css({
            transform: "translateX(0%)",
            "transition-duration": "1s",
            opacity: "0",
            filter: "blur(3px)"
          });
          external_jquery_default()(".log_sec").removeClass("inactive");
          external_jquery_default()(".log_sec").addClass("active");
          external_jquery_default()(".sign_sec").css({
            transform: "translateX(0%)",
            "transition-duration": "1s",
            opacity: "1"
          });
          external_jquery_default()(".sign_sec").addClass("inactive");
        });
      });
    },
    saveData() {
      const formData = new FormData();
      formData.append('name', this.insertdata.name);
      formData.append('email', this.insertdata.email);
      formData.append('password', this.insertdata.password);
      formData.append('password_confirmation', this.insertdata.password_confirmation);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post('/auth/register', formData, {
        headers
      }).then(response => {
        // Assuming your API returns a JWT token in the response
        const token = response.data.access_token;
        console.log("get token: " + token);
        // Save the token to local storage
        localStorage.setItem('jwtToken', token);
        // this.$router.push('/checkout');
        if (false) {}
      }).catch(error => {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      });
    },
    //customerLogin
    async customerLogin() {
      try {
        const postData = {
          email: this.login.email,
          password: this.login.password
          // Add other parameters as needed
        };
        //console.log("==========login email:" +  this.login.email);
        //console.log("==========login password:" +  this.login.password);
        //return false; 
        let {
          data
        } = await this.$axios.post('/auth/login', postData); //await this.login.post('/auth/login');
        await this.$auth.setUserToken(data.access_token);
        this.$router.push('/checkout');
        //this.loginForm.reset();
      } catch (err) {
        console.log(err);
      }
    }
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