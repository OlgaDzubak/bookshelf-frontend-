!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire3984;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire3984=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o("ILISp"),o("aEag2");var a=o("bpxeT"),s=o("2TvXO"),c=o("8MBJY"),i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var r=l.default(e,t,"get");return u.default(e,r)};var l=d(o("1UHsN")),u=d(o("ffZzF"));function d(e){return e&&e.__esModule?e:{default:e}}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){h.default(e,t),t.set(e,r)};var f,h=(f=o("5k7tO"))&&f.__esModule?f:{default:f};var v=o("a2hTj"),m=o("dIxxU"),g=new WeakMap,y=function(){"use strict";function t(){e(c)(this,t),e(p)(this,g,{writable:!0,value:"https://books-backend.p.goit.global/books/"})}return e(v)(t,[{key:"getBookById",value:function(t){return m.default.get("".concat(e(i)(this,g)).concat(t))}},{key:"getTopBooks",value:function(){return m.default.get("".concat(e(i)(this,g),"top-books"))}},{key:"getCategoryList",value:function(){return m.default.get("".concat(e(i)(this,g),"category-list"))}},{key:"getBooksByCategory",value:function(t){return m.default.get("".concat(e(i)(this,g),"category?category=").concat(t))}}]),t}();function b(e,t){if(!(e.length>Number(t)))return e;switch(function(e,t){var r=t.length,n=0,o=e,a=e.indexOf(t);for(;a>=0;)n+=1,a=(o=o.slice(a+r)).indexOf(t);return n}(e," ")){case 0:default:return e.slice(0,Number(t-2))+"...";case 1:return e.slice(0,Number(t-1))+"..."}}var k=o("6JpON"),w=new y,x=document.querySelector(".category-list-box"),L=document.querySelector(".books-box"),S=x.querySelector(".loader"),_=L.querySelector(".loader"),E=document.querySelector(".btn-up-scroll");function q(){return N.apply(this,arguments)}function N(){return(N=e(a)(e(s).mark((function t(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.getCategoryList();case 3:if((r=e.sent.data).length){e.next=6;break}return e.abrupt("return",k.Notify.failure("Can't find list of categories on the server. Please reload the page!"));case 6:return e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),k.Notify.failure("Sorry, there was a server error, please reload the page",{timeout:3e3}),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function O(){return T.apply(this,arguments)}function T(){return(T=e(a)(e(s).mark((function t(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.getTopBooks();case 3:if((r=e.sent.data).length){e.next=6;break}return e.abrupt("return",k.Notify.failure("Can't find best sellers books on the server. Please reload the page!"));case 6:return e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),k.Notify.failure("Sorry, there was a server error, please reload the page",{timeout:3e3}),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function B(e){return j.apply(this,arguments)}function j(){return(j=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.getBooksByCategory(r);case 3:if((n=e.sent.data).length){e.next=6;break}return e.abrupt("return",k.Notify.failure("Can't find books of category <"+r+"> on the server. Please reload the page!"));case 6:return e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),k.Notify.failure("Sorry, there was a server error, please reload the page"),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function I(e){var t='<include src="partials/loader.html "></include>\n                                <h3 id="category-list-title" class="category-list-item">All categories</h3>';return e.forEach((function(e){var r='<p id="'.concat(e.list_name,'" class="category-list-item">').concat(e.list_name,"</p>");t+=r})),t}function M(e,t){var r=e.map((function(e){var r=e.list_name,n=e.books,o='<p class="theme-book">'.concat(r,"</p>");if(n.length){var a=n.splice(0,t).map((function(e){var t=e._id,r=e.book_image,n=e.title,o=e.author;return'<li class="item-book" data-id="'.concat(t,'">\n                    <div class="img-owerlay">\n                        <img src="').concat(r,'" alt="').concat(n,'" class="img-book">\n                        <div class="owerlay">\n                            <p class="owerlay-content">quick view</p>\n                        </div>\n                    </div>\n                    <p class="title-book">').concat(b(n,17),'</p>\n                    <p class="author">').concat(b(o,34),"</p>\n                </li>")})).join("");return'<div class="best-book-container">'.concat(o,'\n                            <ul class="list-books">').concat(a,'</ul>\n                            <button type="button" class="button-more js-btn-more" id="').concat(r,'">See more</button>\n                        </div>')}return'<div class="off-books">\n                            <p class="off-books-text">Sorry, there are no books in this category, please choose another category</p>\n                        </div>'})).join("");return'<include src="partials/loader.html "></include>\n                    <h2 class="title-theme-book">Best Sellers <span class="last-word-color">Books</span></h2>\n                    '.concat(r)}function C(e,t){if(e.length){var r=e.map((function(e){var t=e._id,r=e.book_image,n=e.author,o=e.title;return'<li class="item-book" data-id="'.concat(t,'">\n                <div class="img-owerlay">\n                    <img src="').concat(r,'" alt="').concat(o,'" class="img-book">\n                    <div class="owerlay">\n                        <p class="owerlay-content">quick view</p>\n                    </div>\n                </div>\n                <p class="title-book">').concat(b(o,17),'</p>\n                <p class="author">').concat(b(n,34),"</p>\n            </li>")})).join("");return'<h2 class="title-theme-book">'.concat((n=e[0].list_name,o=n.split(" "),a=o.splice(0,o.length-1),"".concat(a.join(" "),' <span class="last-word-color">').concat(o.join(""),"</span>")),'</h2>\n                    <ul class="list-books category">').concat(r,"</ul>")}return'<div class="off-books">\n                            <p class="off-books-text">Sorry, there are no books in this category, please choose another category</p>\n                        </div>';var n,o,a}function P(){return(P=e(a)(e(s).mark((function t(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.classList.remove("loader-non-active"),e.next=3,q();case 3:(r=e.sent).length?(x.innerHTML=I(r),x.classList.add("category-list-box-not-empty")):S.classList.add("loader-non-active");case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function H(){return D.apply(this,arguments)}function D(){return(D=e(a)(e(s).mark((function t(){var r,n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _.classList.remove("loader-non-active"),e.next=3,O();case 3:(r=e.sent).length?(n=document.documentElement.scrollWidth,L.innerHTML=M(r,n<768?1:n<1440&&n>=768?3:5)):_.classList.add("loader-non-active");case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function J(e){return z.apply(this,arguments)}function z(){return(z=e(a)(e(s).mark((function t(r){var n,o,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=r.target).classList.contains("category-list-item")||n.classList.contains("js-btn-more")){e.next=5;break}return e.abrupt("return");case 5:if("category-list-title"!==(o=n.id.split(" ").join("%20"))){e.next=10;break}L.innerHTML="",H(),e.next=22;break;case 10:return L.innerHTML="",document.documentElement.scrollWidth,e.next=14,B(o);case 14:if(!(a=e.sent).length){e.next=19;break}L.innerHTML=C(a),e.next=21;break;case 19:return k.Notify.failure("Sorry, there was a server error, please reload the page"),e.abrupt("return");case 21:Y();case 22:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=r.target,e.prev=2,n.classList.contains("js-btn-more")){e.next=7;break}return e.abrupt("return");case 7:J(r),Y();case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0),k.Notify.failure("Sorry, there was a server error, please reload the page");case 14:case"end":return e.stop()}}),t,null,[[2,10]])})))).apply(this,arguments)}function Y(){window.scrollTo({top:0,behavior:"smooth"}),E.classList.add("is-hidden-btn")}H(),function(){P.apply(this,arguments)}(),x.addEventListener("click",J),L.addEventListener("click",(function(e){return U.apply(this,arguments)})),E.addEventListener("click",Y),window.addEventListener("scroll",(function(){var e=window.scrollY||window.pageYOffSet,t=document.documentElement.clientHeight;e>t?E.classList.remove("is-hidden-btn"):E.classList.add("is-hidden-btn")})),o("cIzEt");a=o("bpxeT"),s=o("2TvXO");var F,W=o("i8Q71"),R=new y,X=document.querySelector(".books-box"),Z=document.querySelector(".back"),A=document.querySelector(".btn-modal-close"),Q=document.querySelector(".add"),G=document.querySelector(".remove"),K=document.querySelector(".modal-message"),V={scrollPosition:0,disabledScroll:function(){V.scrollPosition=window.scrollY,document.body.classList.add("block-scroll"),document.body.style.cssText="top: -".concat(V.scrollPosition,"px;")},enabledScroll:function(){document.body.classList.remove("block-scroll"),document.body.style.cssText="top: 0",window.scroll({top:V.scrollPosition})}};function $(e){return ee.apply(this,arguments)}function ee(){return(ee=e(a)(e(s).mark((function t(r){var n,o,a,c,i,l,u,d,p,f,h,v,m,g,y,b,k;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V.disabledScroll(),document.addEventListener("keydown",(function(e){"Escape"===e.key&&te()}),{once:!0}),e.prev=2,e.next=5,R.getBookById(r);case 5:n=e.sent,o=n.data,a=o.author,c=o.book_image,i=o.description,l=o.title,u=o.buy_links,d=document.querySelector(".book-img"),p=document.querySelector("#name-book"),f=document.querySelector("#author"),h=document.querySelector("#description"),v=document.querySelector("#amazon"),m=document.querySelector("#apple"),g=document.querySelector("#barnes"),d.innerHTML="",y='<img src="'.concat(c,'" alt="').concat(c,'" class="img-modal">'),p.textContent=l,f.textContent=a,h.textContent=""===i?"No description":i,v.attributes[0].value=u[0].url,m.attributes[0].value=u[1].url,g.attributes[0].value=u[2].url,d.innerHTML=y,Z.classList.toggle("is-hidden"),b=localStorage.getItem("orderedBookID"),null!==(k=JSON.parse(b))&&k.includes(r)?(G.classList.remove("is-hidden"),K.classList.remove("is-hidden")):Q.classList.remove("is-hidden"),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(2),console.error(e.t0),Notify.failure("Sorry, there was a server error, please reload the page");case 33:case"end":return e.stop()}}),t,null,[[2,29]])})))).apply(this,arguments)}function te(){V.enabledScroll(),Z.classList.toggle("is-hidden"),G.classList.add("is-hidden"),Q.classList.add("is-hidden"),K.classList.add("is-hidden")}X.addEventListener("click",(function(e){"img-book"===e.target.classList[0]||"owerlay"===e.target.classList[0]?$(F=e.target.parentElement.parentElement.dataset.id):"owerlay-content"===e.target.classList[0]?$(F=e.target.parentElement.parentElement.parentElement.dataset.id):"title-book"!==e.target.classList[0]&&"author"!==e.target.classList[0]||$(F=e.target.parentElement.dataset.id)})),A.addEventListener("click",te),Q.addEventListener("click",(function(){Q.classList.add("is-hidden"),G.classList.remove("is-hidden"),K.classList.remove("is-hidden");var e=localStorage.getItem("orderedBookID"),t=JSON.parse(e);null===t&&(t=[]);t.push(F),localStorage.setItem("orderedBookID",JSON.stringify(t)),(0,W.countShoppingBook)(t)})),G.addEventListener("click",(function(){Q.classList.remove("is-hidden"),G.classList.add("is-hidden"),K.classList.add("is-hidden");var e=localStorage.getItem("orderedBookID"),t=JSON.parse(e),r=t.indexOf(F);t.splice(r,1),localStorage.removeItem("orderedBookID"),localStorage.setItem("orderedBookID",JSON.stringify(t)),(0,W.countShoppingBook)(t)})),o("9haEe"),o("d474f");var re=document.querySelector(".js-nav-homelink"),ne=document.querySelector(".js-mobile-nav-homelink");re.classList.toggle("selected"),ne.classList.toggle("mobile-selected")}();
//# sourceMappingURL=index.e4c862d8.js.map
