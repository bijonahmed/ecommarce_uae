(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{318:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("6400c86d",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r(318)},323:function(t,e,r){var n=r(113)((function(i){return i[1]}));n.push([t.i,".slider{grid-gap:.3rem;-ms-overflow-style:none;cursor:grab;display:grid;gap:.3rem;grid-auto-columns:22%;grid-auto-flow:column;margin-top:1rem;overflow-x:auto;padding-left:1rem;padding-right:1rem;scrollbar-width:none}.slider::-webkit-scrollbar{display:none}.slide img{aspect-ratio:4/3;border-radius:.2rem;-o-object-fit:cover;object-fit:cover;width:100%}@media (max-width:440px){h2{font-size:1.5rem}.slider{grid-auto-columns:40%}}.slider{position:relative}.next-slide,.prev-slide{cursor:pointer;font-size:2rem;position:absolute;top:50%;transform:translateY(-50%)}.prev-slide{left:0}.next-slide{right:0}",""]),n.locals={},t.exports=n},332:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(15),r(65),{data:function(){return{loading:!1,toproducts:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initOwlCarousel();case 2:return e.next=4,t.fetchDefaultProduct();case 4:case"end":return e.stop()}}),e)})))()},methods:{scrollLeft:function(){alert("left")},scrollRight:function(){alert("right")},fetchDefaultProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/unauthenticate/topSellingProducts").then((function(e){t.toproducts=e.data})).catch((function(t){})).finally((function(){t.loading=!1}));case 3:case 4:case"end":return e.stop()}}),e)})))()},initOwlCarousel:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.$el.querySelector(".slider"),n=!1,r.addEventListener("mousedown",(function(t){n=!0,o=t.pageX,l=r.scrollLeft})),r.addEventListener("mouseleave",(function(){n=!1})),r.addEventListener("mouseup",(function(){n=!1})),r.addEventListener("mousemove",(function(t){if(n){t.preventDefault();var e=3*(t.pageX-o);r.scrollLeft=l-e}}));case 6:case"end":return e.stop()}}),e)})))()}}}),l=(r(322),r(47)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"top_selling"},[t._m(0),t._v(" "),t.loading?e("div",{staticClass:"loading-indicator",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"loader-container"},[e("center",{staticClass:"loader-text"},[t._v("Loading...")]),t._v(" "),e("img",{attrs:{src:"/loader/loader.gif",alt:"Loader"}})],1)]):t._e(),t._v(" "),e("div",{staticClass:"slider"},[t._l(t.toproducts,(function(t){return e("div",{key:t.id,staticClass:"slide"},[e("img",{staticStyle:{height:"150px",width:"150px"},attrs:{src:t.thumnail,alt:""}})])})),t._v(" "),e("div",{staticClass:"prev-slide",on:{click:t.scrollLeft}},[t._v("❮")]),t._v(" "),e("div",{staticClass:"next-slide",on:{click:t.scrollRight}},[t._v("❯")])],2)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row mb-2"},[t("div",{staticClass:"col-6"},[t("div",{staticClass:"sell_title"},[t("h5",[this._v("Top Selling items")])])])])}],!1,null,null,null);e.default=component.exports}}]);