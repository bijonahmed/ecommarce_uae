(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{316:function(t,e,n){"use strict";var r=n(2),o=n(85).find,l=n(137),c="find",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},370:function(t,e,n){"use strict";n.r(e);n(316),n(15);var r=n(207),o=n.n(r),l={head:{title:"Update Password"},mounted:function(){o()(".toggle-password").click((function(){o()(this).toggleClass("fa-eye-slash fa-eye"),input=o()(this).parent().find("input"),"password"==input.attr("type")?input.attr("type","text"):input.attr("type","password")}))}},c=n(47),component=Object(c.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("span",{staticStyle:{"background-image":"url('/images/login_bg.jpg')","background-position":"center","background-repeat":"no-repeat","background-size":"cover","min-height":"100vh",overflow:"hidden"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-flex align-item-center",staticStyle:{height:"100vh"}},[e("div",{staticClass:"col-lg-4 col-md-6 m-auto in_row"},[e("div",{staticClass:"login_section"},[e("div",{staticClass:"log_sec"},[e("h2",[t._v("Update Password")]),t._v(" "),e("form",{attrs:{action:"",method:"post",enctype:"multipart/form-data"}},[e("div",{staticClass:"group"},[e("input",{staticClass:"input",attrs:{id:"pass",required:"",type:"password"}}),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("New Password")]),t._v(" "),e("i",{staticClass:"fa-regular fa-eye-slash show_pass",attrs:{toggle:"#pass"}})]),t._v(" "),e("div",{staticClass:"group"},[e("input",{staticClass:"input",attrs:{id:"repass",required:"",type:"password"}}),t._v(" "),e("span",{staticClass:"highlight"}),t._v(" "),e("span",{staticClass:"bar"}),t._v(" "),e("label",[t._v("Retype Password")]),t._v(" "),e("i",{staticClass:"fa-regular fa-eye-slash show_pass",attrs:{toggle:"#repass"}})]),t._v(" "),e("button",{staticClass:"btn_login",attrs:{type:"submit"}},[t._v("Update Password")])])])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);