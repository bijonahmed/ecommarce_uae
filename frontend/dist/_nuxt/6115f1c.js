(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{329:function(t,e,r){"use strict";r.r(e);r(42);var o=r(10),n=(r(65),r(66),{data:function(){return{limit:12,categories:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()},methods:{redirectCategory:function(t){this.$router.push({path:"/category/category-list",query:{slug:t}})},fetchData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/unauthenticate/getCategoryList");case 2:r=e.sent,t.categories=r.data;case 4:case"end":return e.stop()}}),e)})))()}}}),c=r(47),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"search_bar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-between align-items-center"},[e("div",{staticClass:"col-lg-3 col-md-4 col-8"},[e("div",{staticClass:"logo nav_tab"},[t._m(0),t._v(" "),e("div",{staticClass:"offcanvas offcanvas-start",attrs:{tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"}},[t._m(1),t._v(" "),e("div",{staticClass:"offcanvas-body"},[e("div",{staticClass:"side_nav"},[t._m(2),t._v(" "),t._l(t.categories,(function(r){return e("div",{key:r.id,staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"sidenav_title"},[e("Nuxt-link",{attrs:{to:"/category/all-categorys"}},[e("h6",[t._v(t._s(r.name))]),t._v(" "),e("p",[t._v("See all")])])],1),t._v(" "),e("ul",t._l(r.children,(function(r){return e("li",{key:r.id},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-solid fa-mobile-screen-button"}),t._v(" "+t._s(r.name))])])})),0)])])})),t._v(" "),t._m(3)],2)])]),t._v(" "),e("div",{staticClass:"nav_bar tab_show",staticStyle:{"@media(max-width":"768px){display: none"}},[t._m(4),t._v(" "),e("div",{staticClass:"nav_menu nav_op"},[e("nav",[t._l(t.categories,(function(r,o){return e("ul",{key:r.id},[o<t.limit?e("li",{key:r.id},[e("a",{staticClass:"d-flex justify-content-between align-items-center",attrs:{href:"#"},on:{click:function(e){return t.redirectCategory(r.slug)}}},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{attrs:{src:"/images/cat_svg/icons8-apple-100.png",alt:""}}),t._v(t._s(r.name))]),t._v(" "),e("i",{staticClass:"fa-solid fa-angle-right"})]),t._v(" "),e("div",{staticClass:"sub_menu"},[r.children&&r.children.length>0?e("div",{staticClass:"row"},t._l(r.children,(function(r){return e("div",{key:r.id,staticClass:"col-4"},[e("h6",[e("a",{attrs:{href:"#"},on:{click:function(e){return t.redirectCategory(r.slug)}}},[t._v(" "+t._s(r.name))])]),t._v(" "),r.children&&r.children.length>0?e("ul",t._l(r.children,(function(r){return e("li",{key:r.id},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.redirectCategory(r.slug)}}},[t._v(t._s(r.name))])])})),0):t._e()])})),0):t._e()])]):t._e()])})),t._v(" "),e("ul",[e("li",[e("Nuxt-link",{staticClass:"d-flex justify-content-between",attrs:{to:"/category/all-categorys"}},[e("div",[e("img",{attrs:{src:"/images/cat_svg/more-100.png",alt:""}}),t._v("Other Categories")]),t._v(" "),e("div",[e("i",{staticClass:"fa-solid fa-angle-right"})])])],1)])],2)])]),t._v(" "),e("Nuxt-link",{attrs:{to:"/"}},[t._v("Ecommerce "),e("i",{staticClass:"fa-regular fa-star"})])],1)]),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"col-lg-3 col-md-2 col-2 desktop_view"},[e("div",{staticClass:"menus"},[e("div",{staticClass:"dropdown"},[t._m(6),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("button",{staticClass:"drop_btn login_popup_show",attrs:{type:"button"}},[t._v("Sign In ")]),t._v(" "),e("li",[e("Nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/user/user-profile"}},[t._v("MY Account")])],1),t._v(" "),e("li",[e("Nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/user/user-orders"}},[t._v("Orders")])],1),t._v(" "),e("li",[e("Nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/user/user-whichlist"}},[t._v("Wishlist")])],1)])]),t._v(" "),t._m(7),t._v(" "),e("Nuxt-link",{staticClass:"cart_count",attrs:{to:"/cart"}},[e("i",{staticClass:"fas fa-cart-shopping"}),e("span",{staticStyle:{top:"-16px"}},[t._v("9")]),t._v("Cart")])],1)]),t._v(" "),t._m(8),t._v(" "),t._m(9)])])])])}),[function(){var t=this._self._c;return t("button",{staticClass:"btn_menu mobile_view",attrs:{type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample"}},[t("i",{staticClass:"fa-solid fa-bars-staggered"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"offcanvas-header"},[e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"}}),t._v(" "),e("h5",{staticClass:"offcanvas-title",attrs:{id:"offcanvasExampleLabel"}},[t._v("Ecommerce")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"sidenav_title"},[e("a",{attrs:{href:"user-profile.html"}},[e("h6",[t._v("My Ecommerce Account")]),t._v(" "),e("i",{staticClass:"fa-solid fa-chevron-right"})])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-solid fa-box"}),t._v("Order")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-regular fa-comment-dots"}),t._v("Pending Reviews")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-solid fa-ticket-simple"}),t._v("Voucher ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa-solid fa-heart"}),t._v("Save items ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("Contact Us")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Terms and condition")])])])])])},function(){var t=this._self._c;return t("button",{staticClass:"btn_menu",attrs:{type:"button"}},[t("i",{staticClass:"fa-solid fa-bars-staggered"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-6 desktop_view mini_tab_hide"},[e("form",{attrs:{action:""}},[e("i",{staticClass:"fa-solid fa-magnifying-glass"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",name:"",id:"",placeholder:"Search product"}}),t._v(" "),e("button",{attrs:{type:"button"}},[t._v("Search")])])])},function(){var t=this._self._c;return t("button",{staticClass:"btn dropdown-toggle btn_account b_link",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t("i",{staticClass:"fas fa-user"}),this._v(" Account\r\n                            ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown"},[e("button",{staticClass:"btn dropdown-toggle",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[e("i",{staticClass:"fas fa-circle-question"}),t._v(" Help\r\n                            ")]),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Help Center ")])]),t._v(" "),e("li",[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Place An Order")])]),t._v(" "),e("li",[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Payment Option ")])]),t._v(" "),e("li",[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Truck an order ")])]),t._v(" "),e("li",[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Cancel an order ")])]),t._v(" "),e("li",[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Return & Refund ")])]),t._v(" "),e("button",{staticClass:"drop_btn",attrs:{type:"button"}},[t._v("live Chart ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"col-4 ms-auto mobile_view"},[t("div",{staticClass:"mobile_nav_option"},[t("a",{staticClass:"search_form"},[t("i",{staticClass:"fa-solid fa-magnifying-glass"})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"search_form_modal"},[e("div",{staticClass:"search_box_main"},[e("div",{staticClass:"bar_search"},[e("div",[e("a",{staticClass:"close_search_modal"},[e("i",{staticClass:"fa-solid fa-arrow-left"})])]),t._v(" "),e("div",[e("input",{attrs:{type:"text",name:"",placeholder:"Search Product, Brands, Categories",id:""}})]),t._v(" "),e("div",[e("button",{attrs:{type:"submit"}},[e("i",{staticClass:"fa-solid fa-magnifying-glass"})])])]),t._v(" "),e("ul",[e("li",[e("img",{attrs:{src:"images/product(1).jpg",alt:""}}),t._v(" "),e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("img",{attrs:{src:"images/product(1).jpg",alt:""}}),t._v(" "),e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("img",{attrs:{src:"images/product(1).jpg",alt:""}}),t._v(" "),e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("img",{attrs:{src:"images/product(1).jpg",alt:""}}),t._v(" "),e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("img",{attrs:{src:"images/product(1).jpg",alt:""}}),t._v(" "),e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("img",{attrs:{src:"images/product(1).jpg",alt:""}}),t._v(" "),e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("img",{attrs:{src:"images/product(1).jpg",alt:""}}),t._v(" "),e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("img",{attrs:{src:"images/product(1).jpg",alt:""}}),t._v(" "),e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])]),t._v(" "),e("li",[e("a",{attrs:{href:"product-details.html"}},[t._v("Cat ,Product or brand name here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis rerum nemo iste hic nobis, porro iusto officiis eum sit eos!")])])])])])}],!1,null,null,null);e.default=component.exports}}]);