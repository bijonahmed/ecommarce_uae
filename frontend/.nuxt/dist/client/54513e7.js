(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{307:function(t,e,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("9bdad34e",content,!0,{sourceMap:!1})},308:function(t,e,r){"use strict";r(307)},309:function(t,e,r){var l=r(113)((function(i){return i[1]}));l.push([t.i,".loading-indicator[data-v-94204f3a]{background-color:hsla(0,0%,100%,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:9999}.loader-container[data-v-94204f3a],.loading-indicator[data-v-94204f3a]{align-items:center;display:flex;justify-content:center}.loader-container[data-v-94204f3a]{flex-direction:column;height:100vh;position:relative}.loader-text[data-v-94204f3a]{margin:0}.loader-top[data-v-94204f3a]{top:0}.loader-bottom[data-v-94204f3a]{bottom:0}",""]),l.locals={},t.exports=l},310:function(t,e,r){"use strict";r.r(e);r(42);var l=r(10),c=(r(15),r(65),{data:function(){return{loading:!1,prouducts:[],categories:[],pro_count:0,categoryname:""}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.query.slug,t.fetchData(r),e.next=4,t.fetchDataCategory();case 4:case"end":return e.stop()}}),e)})))()},methods:{redirectCategory:function(t){this.$router.push({path:"/category/category-list",query:{slug:t}})},fetchData:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,e.$axios.get("/unauthenticate/findCategorys/".concat(t)).then((function(t){e.prouducts=t.data.result,e.pro_count=t.data.pro_count,e.categoryname=t.data.categoryname})).catch((function(t){})).finally((function(){e.loading=!1}));case 3:r.sent;case 6:case"end":return r.stop()}}),r)})))()},fetchDataCategory:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/unauthenticate/getCategoryList").then((function(e){t.categories=e.data})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return e.stop()}}),e)})))()}}}),n=(r(308),r(47)),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t.loading?e("div",{staticClass:"loading-indicator"},[e("div",{staticClass:"loader-container"},[e("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),e("img",{attrs:{src:"/loader/loader.gif",alt:"Loader"}})],1)]):t._e(),t._v(" "),e("div",{staticClass:"product_section"},[e("div",{staticClass:"row px-2"},[e("div",{staticClass:"col-md-4 desktop_view"},[e("div",{staticClass:"left_side_product"},[e("div",{staticClass:"category_list"},[e("h6",[t._v("Category")]),t._v(" "),e("ul",t._l(t.categories,(function(r){return e("li",{key:r.id},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.fetchData(r.slug)}}},[t._v(t._s(r.name))])])})),0)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"product_list"},[e("div",{staticClass:"title_product"},[e("div",[e("h6",[t._v(t._s(t.categoryname))])]),t._v(" "),t._m(6)]),t._v(" "),e("div",{staticClass:"grid_list"},[e("div",[e("p",[t._v(t._s(t.pro_count)+" product found")])]),t._v(" "),e("div",{staticClass:"d-flex"},[t._m(7),t._v(" "),e("Nuxt-Link",{staticClass:"active",attrs:{to:"/category/category-list"}},[e("i",{staticClass:"fa-solid fa-list"})]),t._v(" "),e("Nuxt-Link",{attrs:{to:"/category/category-grid"}},[e("i",{staticClass:"fa-solid fa-grip"})])],1),t._v(" "),t._m(8)]),t._v(" "),t._l(t.prouducts,(function(r){return e("div",{key:r.id,staticClass:"row"},[t.prouducts.length>0?e("div",{staticClass:"col-12"},[e("nuxt-link",{attrs:{to:"/product-details/".concat(r.pro_slug)}},[e("div",{staticClass:"products_list"},[e("div",{staticClass:"col"},[e("img",{staticClass:"img-fluid",attrs:{src:r.thumnail_img}}),t._v(" "),e("span",[t._v("Free Delivery ")])]),t._v(" "),e("div",{staticClass:"col pad_ding"},[e("strong",[t._v("Official store ")]),t._v(" "),e("h5",[t._v(t._s(r.product_name))]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"ratings m-0"},[e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star checked"}),t._v(" "),e("i",{staticClass:"fa fa-star"})]),t._v(" "),e("h6",{staticClass:"m-0"},[t._v("(200)")])]),t._v(" "),e("p",[e("i",{staticClass:"fa-brands fa-dhl"})])]),t._v(" "),e("div",{staticClass:"col pad_ding"},[e("h4",[t._v("$"+t._s(r.price))]),t._v(" "),0!==r.discount?e("h4",{staticClass:"disabled"},[e("strike",[t._v("$"+t._s(r.discount))]),e("span",[t._v("-45%")])],1):t._e(),t._v(" "),e("button",{staticClass:"btn_sold",staticStyle:{display:"block",visibility:"unset"},attrs:{type:"button",disabled:""}},[t._v("Sold Out")])])])])],1):t._e()])}))],2)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"delivery_list"},[e("h6",[t._v("Express delivery")]),t._v(" "),e("ul",[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("DHL ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"delivery_list"},[e("h6",[t._v("Shipped from ")]),t._v(" "),e("ul",[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("From Bangladesh ")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("From Bangladesh ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands_list"},[e("h6",[t._v("Brand")]),t._v(" "),e("div",{staticClass:"search_side"},[e("i",{staticClass:"fa-solid fa-magnifying-glass"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Addidas ")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("AGM ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"price_range"},[e("div",{staticClass:"sidebr_title"},[e("h6",[t._v("Price Range ")]),t._v(" "),e("button",{staticClass:"btn_apply",attrs:{type:"button"}},[t._v("Apply")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"price-filter-range",attrs:{id:"slider-range",name:"rangeInput"}}),t._v(" "),e("div",{staticClass:"d-flex",staticStyle:{margin:"10px auto"}},[e("input",{staticClass:"price-range-field form-control",staticStyle:{width:"45%",margin:"0px 3px"},attrs:{type:"number",min:"0",max:"9900",oninput:"validity.valid||(value='0');",id:"min_price"}}),t._v(" "),e("input",{staticClass:"price-range-field form-control",staticStyle:{width:"45%",margin:"0px 3px"},attrs:{type:"number",min:"0",max:"10000",oninput:"validity.valid||(value='10000');",id:"max_price"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands_list"},[e("h6",[t._v("size")]),t._v(" "),e("div",{staticClass:"search_side"},[e("i",{staticClass:"fa-solid fa-magnifying-glass"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("XS")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("S")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands_list"},[e("h6",[t._v("Gender")]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Boys")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Girls")])])])])},function(){var t=this,e=t._self._c;return e("div",[e("label",{attrs:{for:""}},[t._v("Short By:")]),t._v(" "),e("select",{attrs:{name:"",id:""}},[e("option",{attrs:{value:""}},[t._v("Popularity")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("New arrival")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("Low to High")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("high to low")])])])},function(){var t=this._self._c;return t("a",{staticClass:"filter_btn mobile_view",attrs:{type:"button"}},[t("i",{staticClass:"fa-solid fa-sliders"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter_modal"},[e("div",{staticClass:"row px-4"},[e("div",{staticClass:"col-6"}),t._v(" "),e("div",{staticClass:"col-6 text-end"},[e("i",{staticClass:"fa-solid fa-x filter_close",staticStyle:{cursor:"pointer"}})])]),t._v(" "),e("div",{staticClass:"modal_fdiv"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"left_side_product"},[e("div",{staticClass:"category_list"},[e("h6",[t._v("Category")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("Computing")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Electronics")])])])]),t._v(" "),e("div",{staticClass:"delivery_list"},[e("h6",[t._v("Express delivery")]),t._v(" "),e("ul",[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("DHL ")])])])]),t._v(" "),e("div",{staticClass:"delivery_list"},[e("h6",[t._v("Shipped from ")]),t._v(" "),e("ul",[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("From Bangladesh ")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("From Bangladesh ")])])])]),t._v(" "),e("div",{staticClass:"brands_list"},[e("h6",[t._v("Brand")]),t._v(" "),e("div",{staticClass:"search_side"},[e("i",{staticClass:"fa-solid fa-magnifying-glass"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Addidas ")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("AGM ")])])])]),t._v(" "),e("div",{staticClass:"price_range"},[e("div",{staticClass:"sidebr_title"},[e("h6",[t._v("Price Range ")]),t._v(" "),e("button",{staticClass:"btn_apply",attrs:{type:"button"}},[t._v("Apply")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"price-filter-range",attrs:{id:"slider-range",name:"rangeInput"}}),t._v(" "),e("div",{staticClass:"d-flex",staticStyle:{margin:"10px auto"}},[e("input",{staticClass:"price-range-field",staticStyle:{width:"45%",margin:"0px 3px"},attrs:{type:"number",min:"0",max:"9900",oninput:"validity.valid||(value='0');",id:"min_price"}}),t._v(" "),e("input",{staticClass:"price-range-field",staticStyle:{width:"45%",margin:"0px 3px"},attrs:{type:"number",min:"0",max:"10000",oninput:"validity.valid||(value='10000');",id:"max_price"}})])])])]),t._v(" "),e("div",{staticClass:"brands_list"},[e("h6",[t._v("size")]),t._v(" "),e("div",{staticClass:"search_side"},[e("i",{staticClass:"fa-solid fa-magnifying-glass"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("XS")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("S")])])])]),t._v(" "),e("div",{staticClass:"brands_list"},[e("h6",[t._v("Gender")]),t._v(" "),e("ul",{staticClass:"brand_scroll"},[e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Boys")])]),t._v(" "),e("li",[e("input",{attrs:{type:"checkbox"}}),e("label",{attrs:{for:""}},[t._v("Girls")])])])])])])])])])}],!1,null,"94204f3a",null);e.default=component.exports}}]);