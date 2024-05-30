!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire3984;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequire3984=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"7HtH9":"shopping_list_page.c4c8d571.js","aBrDb":"amazon_icon.7230a0f0.svg","k2tFV":"ibooks_icon.1e1d3fd6.svg","4HGdI":"trash-03.deb29b96.png","d1EaE":"stack_of_books_mobile@1x.76e2e048.png","536hg":"stack_of_books_mobile@2x.64a22462.png","12bmG":"stack_of_books_tablet@1x.76e2e048.png","93kMU":"stack_of_books_tablet@2x.64a22462.png","a5zSz":"stack_of_books_desktop@1x.76e2e048.png","fuZb4":"stack_of_books_desktop@2x.64a22462.png","hE6Rv":"index.a41741a7.js"}')),a("ILISp"),a("i8Q71");var i,c=a("bpxeT"),s=a("8nrFW"),l=a("2TvXO"),u=a("3w7gl"),d=a("fPiI6");i=a("aNJCr").getBundleURL("7HtH9")+a("iE7OH").resolve("aBrDb");var p;p=a("aNJCr").getBundleURL("7HtH9")+a("iE7OH").resolve("k2tFV");var f;f=a("aNJCr").getBundleURL("7HtH9")+a("iE7OH").resolve("4HGdI");var b;b=a("aNJCr").getBundleURL("7HtH9")+a("iE7OH").resolve("d1EaE");var g;g=a("aNJCr").getBundleURL("7HtH9")+a("iE7OH").resolve("536hg");var v;v=a("aNJCr").getBundleURL("7HtH9")+a("iE7OH").resolve("12bmG");var m;m=a("aNJCr").getBundleURL("7HtH9")+a("iE7OH").resolve("93kMU");var h;h=a("aNJCr").getBundleURL("7HtH9")+a("iE7OH").resolve("a5zSz");var _;_=a("aNJCr").getBundleURL("7HtH9")+a("iE7OH").resolve("fuZb4");d=a("fPiI6");var k,H,x,E=new(0,u.booksAPI),L=[{img:t(i)}],y=[{img:t(p)}],w=[{img:t(f)}],S=document.querySelector(".shopping-wrapper"),R=(0,d.createBooksBoxTitle)(S,"Shopping List"),O="orderedBookID",B=JSON.parse(localStorage.getItem(O))||[],N=[],T=1;function A(){return(A=t(c)(t(l).mark((function e(n){var r,o,a;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x&&(x.abort(),console.log("abort previous ordered books fetch")),r=(0,d.createLoader)(R),x=new AbortController,e.next=5,C(B,x);case 5:o=e.sent,r.remove(),o.length&&((k=document.createElement("ul")).classList.add("list","shopping_booklist"),R.after(k),k.addEventListener("click",M),N=[],o.forEach((function(e){return N.push(e.data)})),N.length>=3?(k.innerHTML=I(N,0,2),(a=Math.ceil(N.length/3))>1&&((H=document.createElement("div")).classList.add("shopping_booklist_pagination"),H.innerHTML=U(a,T),S.append(H),H.addEventListener("click",(function(e){var t=e.target;if(!t.classList.contains("active")){var n=Number(t.textContent);J(H,n),k.innerHTML=I(N,3*(n-1),3*n-1),(0,d.scrollToBoxTop)(S)}})))):k.innerHTML=I(N,0,2));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return F.apply(this,arguments)}function F(){return F=t(c)(t(l).mark((function e(n,r){var o,a;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=n.map(function(){var e=t(c)(t(l).mark((function e(n){var o;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getBookById(n,r);case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(o);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(0),a=document.createElement("div"),S.append(a),a.classList.add("error-box"),a.innerHTML='<p class="error-box-text">Sorry, there was a server error, please reload the page!!!</p>';case 13:case"end":return e.stop()}}),e,null,[[0,7]])}))),F.apply(this,arguments)}function I(e,t,n){return e.map((function(e,r){var o=e._id,a=e.book_image,i=e.list_name,c=e.author,s=e.title,l=e.description,u=e.buy_links;return' <li data-id="'.concat(o,'" class="book-card ').concat(r>=t&&r<=n?"":"non-active",'">\n\n                                        <div class="book-image-div">\n                                          <img class="book-image" src=\'').concat(a,"' alt='").concat(s,'\'>\n                                        </div>\n\n                                        <div class="book_information">\n                                          <p class="book-title">').concat(s,'</p>\n                                          <p class="book-category">').concat(i,'</p>\n                                          <p class="book-description">').concat(l||"No description",'</p>\n                                          <p class="book-author">').concat(c,'</p>\n                                        </div>\n\n                                        <div class="closer">\n                                          <button data-id="').concat(o,'" class="bucket-btn">\n                                            <img class="image-bucket" src="').concat(w[0].img,'" alt="amazon">\n                                          </button>\n                                        </div>\n                                      \n                                        <div class="market_places_div">\n                                          <ul class="market_placers_list list">\n                                      \n                                            <li class="marketplacer_li_one">\n                                              <a href="').concat(u[0].url,'" class="marketplacer_li_link link">\n                                                <img class="image-market" src="').concat(L[0].img,'" alt="amazon">  \n                                              </a>\n                                            </li>\n                                      \n                                            <li class="marketplacer_li_two">\n                                              <a href="').concat(u[1].url,'" class="marketplacer_li_link link">\n                                                <img src="').concat(y[0].img,'" alt="apple-books">      \n                                              </a>\n                                            </li>\n                                      \n                                          </ul>\n                                        </div>\n\n                                      </li>')})).join("\n")}function M(e){var n=e.target;if(n.classList.contains("bucket-btn")){var r=document.querySelectorAll(".bucket-btn");r.forEach((function(e){return e.setAttribute("disabled","")}));var o=B.indexOf(n.dataset.id);B.splice(o,1),N=N.filter((function(e){return e._id!=n.dataset.id})),localStorage.removeItem(O),localStorage.setItem(O,JSON.stringify(B)),k.children[o].classList.add("shift-right");var a=o-3*Math.trunc(o/3);setTimeout((function(){if(o+1<k.children.length)for(var e=o+1,t=o+(2-a)>=k.children.length-1?k.children.length-1:o+(2-a),n=e;n<=t;n++){k.children[n].classList.add("shift-up")}}),600),setTimeout((function(){k.children[o].remove(),(0,d.displayOrdredAmountInShoppingBag)(B),r.forEach((function(e){return e.removeAttribute("disabled")})),0===k.children.length&&z(),t(s)(k.children).forEach((function(e){e.classList.remove("shift-right"),e.classList.remove("shift-up")}));var e=t(s)(k.children).findIndex((function(e,t){return t>o-1&&e.classList.contains("non-active")})),n=Math.ceil(N.length/3);-1!=e?k.children[e].classList.remove("non-active"):o===B.length&&N.length%3==0&&(T-=1,k.innerHTML=I(N,3*(T-1),3*T-1));var a=document.querySelector(".shopping_booklist_pagination");a&&(n>1?a.innerHTML=U(n,T):a.remove())}),1200)}}function U(e,t){for(var n="",r=1;r<=e;r++)n+=r===t?'<button type="button" class="btn-two active">'.concat(r,"</button>"):'<button type="button" class="btn-two">'.concat(r,"</button>");return n}function J(e,t){var n=!0,r=!1,o=void 0;if(e)try{for(var a,i=e.children[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;Number(c.textContent)===t&&(c.classList.add("active"),T=t),Number(c.textContent)!==t&&c.classList.remove("active")}}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}}function z(){var e=document.createElement("div");e.classList.add("empty-shopping_booklist"),e.innerHTML='<p class="empty-shopping-box-text">This page is empty, add some books and proceed to order.</p>\n                                        <div class="empty-shopping-box-picturebox">\n                                          <picture>\n                                            <source\n                                              srcset="'.concat(t(b)," 1x, ").concat(t(g),' 2x"\n                                              media="(max-width: 767.9px)"\n                                            >\n                                            <source\n                                            srcset="').concat(t(v)," 1x, ").concat(t(m),' 2x"\n                                              media="(min-width: 768px) and (max-width: 1439.8px)"\n                                            >\n                                            <source\n                                            srcset="').concat(t(h)," 1x, ").concat(t(_),' 2x"\n                                              media="(min-width: 1440px)"\n                                            >\n                                            <img \n                                              src=').concat(t(h),'\n                                              alt="stack of books" \n                                            >\n                                          </picture>\n                                        </div>'),S.append(e)}B.length?function(e){A.apply(this,arguments)}(T):z(),a("aEag2"),a("9haEe"),a("d474f"),a("cIzEt");var j=document.querySelector(".js-nav-shoppinglistlink"),q=document.querySelector(".js-mobile-nav-shoppinglistlink"),D=document.querySelector(".js-mobile-shopping-bag-icon");j.classList.toggle("selected"),q.classList.toggle("mobile-selected"),D.classList.toggle("mobile-selected")}();
//# sourceMappingURL=shopping_list_page.c4c8d571.js.map
