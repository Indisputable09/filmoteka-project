!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){a[e]=n},n.parcelRequired7c6=r),r("kvC6y");var l=r("4cG42"),o=r("bpxeT"),i=r("2TvXO");r("4cG42");var c=r("7iFtI"),u=r("5pO50"),s=r("3lV3Z");function d(e){document.querySelector(".pagination").innerHTML=function(e,n){if(e<2)return"";var t='<ul class="pagination">',a=n-1,r=n+1;if(n>1&&(t+='<li class="btn prev"><span><<</span></li>'),e<6)for(var l=1;l<=e;l++)t+='<li class="numb '+(n==l?"active":" ")+'"><span>'+l+"</span></li>";else{n>2&&(t+='<li class="first numb"><span>1</span></li>',n>3&&(t+='<li class="dots"><span>...</span></li>')),1===n?r+=2:2===n&&(r+=1),n===e?a-=2:n===e-1&&(a-=1);for(var o=a;o<=r;o++)0===o&&(o+=1),o>e||(t+='<li class="numb '+(n==o?"active":"")+'"><span>'+o+"</span></li>");n<e-1&&(n<e-2&&(t+='<li class="dots"><spank">...</span></li>'),t+='<li class="numb"><span>'+e+"</span></li>")}return n<e&&(t+='<li class="btn next"'+(n+1)+'">>></span></li>'),t+="</ul>",document.querySelector(".pagination").innerHTML=t,t}(e.total_pages,e.page)}function p(e){return g.apply(this,arguments)}function g(){return(g=e(o)(e(i).mark((function n(t){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.genreLoad)(t);case 3:return e.next=5,t.fetchTrend();case 5:a=e.sent,console.log(a),(0,s.setCurrenDataToLS)(a.results),(0,c.makeMarkupCard)(a),d(a),t.lastPage=a.total_pages,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=e(o)(e(i).mark((function n(t){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.genreLoad)(t);case 3:return e.next=5,t.fetchSearch();case 5:a=e.sent,console.log(a),(0,s.setCurrenDataToLS)(a.results),(0,c.makeMarkupCard)(a),t.lastPage=a.total_pages,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var b=r("Jmfug"),m=(o=r("bpxeT"),i=r("2TvXO"),l=r("4cG42"),c=r("7iFtI"),b=r("Jmfug"),l=r("4cG42"),r("6JEwH")),h=new(0,(_=r("kvC6y")).default),L={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function E(e){switch(e){case l.Movie.trendTime.DAY:(0,m.disabledEl)(L.btnSwitchDay),(0,m.unlockEl)(L.btnSwitchWeek);break;case l.Movie.trendTime.WEEK:(0,m.disabledEl)(L.btnSwitchWeek),(0,m.unlockEl)(L.btnSwitchDay)}}function k(){(0,m.unlockEl)(L.btnSwitchDay),(0,m.unlockEl)(L.btnSwitchWeek)}L.btnSwitchDay.addEventListener("click",(function(){h.enable("loader"),y.page=1,y.currentTrendTime=l.Movie.trendTime.DAY,p(y),E(l.Movie.trendTime.DAY),C()})),L.btnSwitchWeek.addEventListener("click",(function(){h.enable("loader"),y.page=1,y.currentTrendTime=l.Movie.trendTime.WEEK,p(y),E(l.Movie.trendTime.WEEK),C()}));s=r("3lV3Z");var S,y,w=new(0,(_=r("kvC6y")).default),T={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")},x=null;function M(){return(M=e(o)(e(i).mark((function n(t){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,w.enable("loader"),t.preventDefault(),""!==(x=t.target.query.value.trim())){e.next=8;break}return T.paragraphEl.innerHTML="Enter the name in the search field",w.disable("loader"),e.abrupt("return");case 8:return(S=new(0,l.Movie)(x)).langCurrent=(0,b.getLanguageFromLS)(),e.next=12,S.fetchSearch();case 12:if(0!==(a=e.sent).total_results){e.next=18;break}return t.target.reset(),T.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.",w.disable("loader"),e.abrupt("return");case 18:(0,c.makeMarkupCard)(a),t.target.reset(),T.paragraphEl.innerHTML="",console.log(a),S.lastPage=a.total_pages,(0,s.setCurrenDataToLS)(a.results),k(),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(0),console.log(e.t0.message);case 30:case"end":return e.stop()}}),n,null,[[0,27]])})))).apply(this,arguments)}function C(){x=null}T.formEl.addEventListener("submit",(function(e){return M.apply(this,arguments)})),(new(0,(_=r("kvC6y")).default)).enable("preloader"),null===x&&function(){y=new(0,l.Movie);var e=(0,b.getLanguageFromLS)();e?(y.langCurrent=e,(0,b.switchBtnLang)(y.langCurrent)):y.langCurrent=(0,b.setLanguageToLS)(l.Movie.language.ENGLISH);p(y),E(l.Movie.trendTime.DAY),(0,b.setCurrentPageToLS)(b.keyLS.VALUE_PAGE_INDEX)}();l=r("4cG42"),b=r("Jmfug");var _=r("kvC6y"),q=r("bEuMR"),D=new(0,_.default);b.refs.btnSwitchEN.addEventListener("click",(function(){D.enable("loader"),null===x?(y.langCurrent=(0,b.setLanguageToLS)(l.Movie.language.ENGLISH),p(y)):(S.langCurrent=(0,b.setLanguageToLS)(l.Movie.language.ENGLISH),f(S));(0,q.renderFooter)()})),b.refs.btnSwitchUA.addEventListener("click",(function(){D.enable("loader"),null===x?(y.langCurrent=(0,b.setLanguageToLS)(l.Movie.language.UKRAINIAN),p(y)):(S.langCurrent=(0,b.setLanguageToLS)(l.Movie.language.UKRAINIAN),f(S));(0,q.renderFooter)()})),r("4cG42");var N=document.querySelector(".scroll-area"),A=document.querySelector(".up-btn"),I=document.querySelector(".icon__button");function G(){N.scrollIntoView({block:"center",behavior:"smooth"})}A.addEventListener("click",G),window.addEventListener("scroll",(function(){scrollY>230&&(I.classList.add("icon__button--opacity"),I.style.position="fixed"),scrollY<230&&(I.classList.remove("icon__button--opacity"),I.style.position="absolute"),scrollY>300?A.classList.remove("is-hidden"):scrollY<300&&A.classList.add("is-hidden")}));var H=new(0,(_=r("kvC6y")).default),P={btnLoadPrevious:document.querySelector(".pagination-page__btn-previous"),btnLoadNext:document.querySelector(".pagination-page__btn-next")};P.btnLoadPrevious.addEventListener("click",(function(){if(H.disable(),null===x?1===y.page:1===S.page)return void H.enable();null===x?y.page-=1:S.page-=1,R(),G()})),P.btnLoadNext.addEventListener("click",(function(){if(null===x?y.page===y.lastPage:S.page===S.lastPage)return;null===x?y.page+=1:S.page+=1,R(),G()}));var W={prev:document.querySelector(".prev"),numb:document.querySelectorAll(".numb"),next:document.querySelector(".next")},Y=W.prev,F=W.numb,O=W.next;function R(){null===x?p(y):f(S)}!function e(n){d(n),F.forEach((function(t){t.addEventListener("click",(function(t){H.enable("loader");var a=t.target.textContent;n.page=a,R(),e(n)}))})),Y&&Y.addEventListener("click",(function(){n.page-=1,R(),e(n)})),O&&O.addEventListener("click",(function(){n.page+=1,R(),e(n)}))}(y),r("3nfD2"),r("5xtVg"),r("bEuMR"),r("aZhHc"),r("sPj1j"),r("bmNaJ")}();
//# sourceMappingURL=index.7c130e57.js.map
