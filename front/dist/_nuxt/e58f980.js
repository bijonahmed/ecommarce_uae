(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{308:function(t,e,n){"use strict";var r=n(2),l=n(78).find,o=n(132),c="find",v=!0;c in[]&&Array(1)[c]((function(){v=!1})),r({target:"Array",proto:!0,forced:v},{find:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},316:function(t,e,n){"use strict";n.r(e);n(308),n(20);var r=n(276),l=n.n(r),o={head:{title:"Login"},mounted:function(){l()(".toggle-password").click((function(){l()(this).toggleClass("fa-eye-slash fa-eye"),input=l()(this).parent().find("input"),"password"==input.attr("type")?input.attr("type","text"):input.attr("type","password")})),l()(".sign_up").on("click",(function(){l()(".log_sec").css({transform:"translateX(-100%)","transition-duration":"1s",opacity:"0"}),l()(".log_sec").addClass("inactive"),l()(".sign_sec").css({transform:"translateX(-100%)","transition-duration":"1s",opacity:"1",filter:"none"}),l()(".sign_sec").removeClass("inactive"),l()(".sign_sec").addClass("active")})),l()(".signIn").on("click",(function(){l()(".log_sec").css({transform:"translateX(0%)","transition-duration":"1s",opacity:"1"}),l()(".log_sec").removeClass("inactive"),l()(".log_sec").addClass("active"),l()(".sign_sec").css({transform:"translateX(100%)","transition-duration":"1s",opacity:"0",filter:"blur(3px)"}),l()(".sign_sec").addClass("inactive")}))}},c=n(42),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("span",{staticStyle:{"background-image":"url('/images/login_bg.jpg')","background-position":"center","background-repeat":"no-repeat","background-size":"cover","min-height":"100vh",overflow:"hidden"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-item-center",staticStyle:{height:"100vh"}},[e("div",{staticClass:"col-lg-4 col-md-6 m-auto in_row"},[e("div",{staticClass:"login_section"},[e("div",{staticClass:"log_sec"},[e("h2",[e("Nuxt-link",{attrs:{to:"/"}},[t._v("Welcome back")])],1),t._v(" "),e("p",[t._v(" Sign in to continue your Account")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])])])])])])}),[function(){var t=this,e=t._self._c;return e("form",{attrs:{action:"",method:"post",enctype:"multipart/form-data"}},[e("div",{staticClass:"group"},[e("input",{staticClass:"input",staticStyle:{"--i":"0"},attrs:{required:"",type:"text"}}),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("User Name")]),t._v(" "),e("i",{staticClass:"fa-solid fa-user"})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{staticClass:"input",attrs:{required:"",type:"password"}}),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Password")]),t._v(" "),e("i",{staticClass:"fa-regular fa-eye-slash toggle-password"})]),t._v(" "),e("button",{staticClass:"btn_login",attrs:{type:"submit"}},[t._v("Login")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-end"},[t("a",{attrs:{href:"forget-password.html"}},[this._v("Forget Password?")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"social_login"},[e("span",{staticClass:"signup_link"},[t._v("Don't Have Account?"),e("button",{staticClass:"sign_up"},[t._v("SignUp")])]),t._v(" "),e("div",{},[e("h5",[t._v("Or SignIn with:")])]),t._v(" "),e("div",[e("a",{attrs:{href:"#facebook"}},[e("img",{attrs:{src:"images/social/icons8-facebook.svg",alt:""}})]),t._v(" "),e("a",{attrs:{href:"#google"}},[e("img",{attrs:{src:"images/social/icons8-google.svg",alt:""}})]),t._v(" "),e("a",{attrs:{href:"#twitter"}},[e("img",{attrs:{src:"images/social/icons8-twitter.svg",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign_sec"},[e("div",[e("h1",[t._v("Sign Up")]),t._v(" "),e("p",[t._v("SignUp to register a new Account.")])]),t._v(" "),e("form",{attrs:{action:"",method:"post",enctype:"multipart/form-data"}},[e("div",{staticClass:"group"},[e("input",{staticClass:"input",staticStyle:{"--i":"0"},attrs:{required:"",type:"text"}}),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("User Name")]),t._v(" "),e("i",{staticClass:"fa-solid fa-user"})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{staticClass:"input",staticStyle:{"--i":"0"},attrs:{required:"",type:"email"}}),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Email Address")]),t._v(" "),e("i",{staticClass:"fa-solid fa-envelope"})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{staticClass:"input",staticStyle:{"--i":"1"},attrs:{required:"",type:"password"}}),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Password")]),t._v(" "),e("i",{staticClass:"fa-regular fa-eye-slash toggle-password"})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{staticClass:"input",staticStyle:{"--i":"1"},attrs:{required:"",type:"password"}}),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Retype Password")]),t._v(" "),e("i",{staticClass:"fa-regular fa-eye-slash toggle-password"})]),t._v(" "),e("div",{staticClass:"mt-2"},[e("div",{staticClass:"submit__control"},[e("h3",[t._v("Are you human?")]),t._v(" "),e("div",{staticClass:"submit__generated"}),t._v(" "),e("span",{staticClass:"fa-solid fa-refresh"}),t._v(" "),e("div")])]),t._v(" "),e("button",{staticClass:"btn_login submit mt-2",staticStyle:{opacity:".8"},attrs:{type:"submit",disabled:""}},[t._v("Sign Up ")])]),t._v(" "),e("div",{staticClass:"social_login"},[e("div",[e("h6",[t._v("Allready have Account?"),e("button",{staticClass:"signIn",attrs:{type:"button"}},[t._v("LogIn")])])]),t._v(" "),e("div",{},[e("h5",[t._v("Or SignUp with:")])]),t._v(" "),e("div",[e("a",{attrs:{href:"#facebook"}},[e("img",{attrs:{src:"images/social/icons8-facebook.svg",alt:""}})]),t._v(" "),e("a",{attrs:{href:"#google"}},[e("img",{attrs:{src:"images/social/icons8-google.svg",alt:""}})]),t._v(" "),e("a",{attrs:{href:"#twitter"}},[e("img",{attrs:{src:"images/social/icons8-twitter.svg",alt:""}})])])])])}],!1,null,null,null);e.default=component.exports}}]);