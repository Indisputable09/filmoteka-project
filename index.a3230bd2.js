!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("kvC6y");var o=r("4cG42"),c=r("bpxeT"),i=r("2TvXO");r("4cG42");var l=r("7iFtI"),s=r("5pO50"),u=r("3lV3Z"),d="active",p="btn",g="numb",f="prev-page",h="next-page",v="first-page",x="last-page",b="dots";function m(e){var t=e.page,n=e.total_pages;document.querySelector(".pagination-container").innerHTML=function(e,t){if(e<2)return"";var n,a='<ul class="pagination-list" data-last="'.concat(e,'" data-current="').concat(t,'">'),r=t-1,o=t+1;if(t>1&&(a+='<li class="'.concat(p," ").concat(f,'" data-page="').concat(t-1,'"><span><<</span></li>')),e<6)for(var c=1;c<=e;c++)n=t===c?d:"",a+='<li class="'.concat(g," ").concat(n,'" data-page="').concat(c,'"><span>').concat(c,"</span></li>");else{t>2&&(a+='<li class="'.concat(g," ").concat(v,'" data-page="1"><span>1</span></li>'),t>3&&(a+='<li class="'.concat(b,'"><span>...</span></li>'))),1===t?o+=2:2===t&&(o+=1),t===e?r-=2:t===e-1&&(r-=1);for(var i=r;i<=o;i++)0===i&&(i+=1),i>e||(n=t===i?d:"",a+='<li class="'.concat(g," ").concat(n,'" data-page="').concat(i,'"><span>').concat(i,"</span></li>"));t<e-1&&(t<e-2&&(a+='<li class="'.concat(b,'"><spank">...</span></li>')),a+='<li class="'.concat(g," ").concat(x,'" data-page="').concat(e,'"><span>').concat(e,"</span></li>"))}return t<e&&(a+='<li class="'.concat(p," ").concat(h,'" data-page="').concat(t+1,'">>></span></li>')),a+"</ul>"}(n,t)}function S(e){return y.apply(this,arguments)}function y(){return(y=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.genreLoad)(n);case 3:return e.next=5,n.fetchTrend();case 5:a=e.sent,console.log(a),(0,u.setCurrenDataToLS)(a.results),(0,l.makeMarkupCard)(a),m(a),n.lastPage=a.total_pages,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function L(e){return k.apply(this,arguments)}function k(){return(k=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.genreLoad)(n);case 3:return e.next=5,n.fetchSearch();case 5:a=e.sent,console.log(a),(0,u.setCurrenDataToLS)(a.results),(0,l.makeMarkupCard)(a),m(a),n.lastPage=a.total_pages,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}var w=r("Jmfug"),C=(c=r("bpxeT"),i=r("2TvXO"),o=r("4cG42"),l=r("7iFtI"),w=r("Jmfug"),o=r("4cG42"),r("6JEwH")),E=new(0,(H=r("kvC6y")).default),T={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function M(e){switch(e){case o.Movie.trendTime.DAY:(0,C.disabledEl)(T.btnSwitchDay),(0,C.unlockEl)(T.btnSwitchWeek);break;case o.Movie.trendTime.WEEK:(0,C.disabledEl)(T.btnSwitchWeek),(0,C.unlockEl)(T.btnSwitchDay)}}function _(){(0,C.unlockEl)(T.btnSwitchDay),(0,C.unlockEl)(T.btnSwitchWeek)}T.btnSwitchDay.addEventListener("click",(function(){E.enable("loader"),D.page=1,D.currentTrendTime=o.Movie.trendTime.DAY,S(D),M(o.Movie.trendTime.DAY),G()})),T.btnSwitchWeek.addEventListener("click",(function(){E.enable("loader"),D.page=1,D.currentTrendTime=o.Movie.trendTime.WEEK,S(D),M(o.Movie.trendTime.WEEK),G()}));u=r("3lV3Z");var q,D,U=new(0,(H=r("kvC6y")).default),I={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")},A=null;function N(){return(N=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,U.enable("loader"),n.preventDefault(),""!==(A=n.target.query.value.trim())){e.next=8;break}return I.paragraphEl.innerHTML="Enter the name in the search field",U.disable("loader"),e.abrupt("return");case 8:return(q=new(0,o.Movie)(A)).langCurrent=(0,w.getLanguageFromLS)(),e.next=12,q.fetchSearch();case 12:if(0!==(a=e.sent).total_results){e.next=18;break}return n.target.reset(),I.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.",U.disable("loader"),e.abrupt("return");case 18:(0,l.makeMarkupCard)(a),m(a),n.target.reset(),I.paragraphEl.innerHTML="",console.log(a),q.lastPage=a.total_pages,(0,u.setCurrenDataToLS)(a.results),_(),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),console.log(e.t0.message);case 31:case"end":return e.stop()}}),t,null,[[0,28]])})))).apply(this,arguments)}function G(){A=null}I.formEl.addEventListener("submit",(function(e){return N.apply(this,arguments)})),(new(0,(H=r("kvC6y")).default)).enable("preloader"),null===A&&function(){D=new(0,o.Movie);var e=(0,w.getLanguageFromLS)();e?(D.langCurrent=e,(0,w.switchBtnLang)(D.langCurrent)):D.langCurrent=(0,w.setLanguageToLS)(o.Movie.language.ENGLISH);S(D),M(o.Movie.trendTime.DAY),(0,w.setCurrentPageToLS)(w.keyLS.VALUE_PAGE_INDEX)}();o=r("4cG42"),w=r("Jmfug");var H=r("kvC6y"),P=r("bEuMR"),j=(c=r("bpxeT"),i=r("2TvXO"),w=r("Jmfug"),w=r("Jmfug"),{linkHome:document.querySelector(".js-homeLink-text"),linkMyLibrary:document.querySelector(".js-myLibrary-text"),btnSignUp:document.querySelector(".js-signUp-text"),btnLogIn:document.querySelector(".js-logIn-text"),searchPlaceholder:document.querySelector(".search-form__input"),textUpFirst:document.querySelector(".js-footer-text__up--first"),textUpSecond:document.querySelector(".js-footer-text__up--second"),textUpThird:document.querySelector(".js-footer-text__up--third"),textLink:document.querySelector(".js-footer-text__link")}),F=j.linkHome,W=j.linkMyLibrary,O=j.btnSignUp,R=j.btnLogIn,Y=j.searchPlaceholder,J=j.textUpFirst,K=j.textUpSecond,V=j.textUpThird,X=j.textLink;function Z(){return B.apply(this,arguments)}function B(){return(B=e(c)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.getLanguageFromLS)();case 2:"en-US"===(n=e.sent)&&(F.textContent="Home",W.textContent="My library",O.textContent="Sign Up","Вхід"===R.textContent?R.textContent="Log In":"Вихід"===R.textContent&&(R.textContent="Log Out"),Y.placeholder="Movie search",w.refs.btnSwitchEN.textContent="en",w.refs.btnSwitchUA.textContent="ua",T.btnSwitchDay.textContent="day",T.btnSwitchWeek.textContent="week",J.textContent="All Rights Reserved",K.textContent="Developed with",V.textContent="by",X.textContent="GoIT Students"),"uk-UA"===n&&(F.textContent="Головна",W.textContent="Моя бібліотека",O.textContent="Реєстрація","Log In"===R.textContent?R.textContent="Вхід":"Log Out"===R.textContent&&(R.textContent="Вихід"),Y.placeholder="Пошук фільму",w.refs.btnSwitchEN.textContent="англ",w.refs.btnSwitchUA.textContent="укр",T.btnSwitchDay.textContent="день",T.btnSwitchWeek.textContent="тиждень",J.textContent="Всі права захищені",K.textContent="Зроблено з",V.textContent="",X.textContent="Студентами GoIT");case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}Z();var z=new(0,H.default);w.refs.btnSwitchEN.addEventListener("click",(function(){z.enable("loader"),null===A?(D.langCurrent=(0,w.setLanguageToLS)(o.Movie.language.ENGLISH),S(D)):(q.langCurrent=(0,w.setLanguageToLS)(o.Movie.language.ENGLISH),L(q));Z(),(0,P.renderFooter)()})),w.refs.btnSwitchUA.addEventListener("click",(function(){z.enable("loader"),null===A?(D.langCurrent=(0,w.setLanguageToLS)(o.Movie.language.UKRAINIAN),S(D)):(q.langCurrent=(0,w.setLanguageToLS)(o.Movie.language.UKRAINIAN),L(q));Z(),(0,P.renderFooter)()})),r("4cG42");var Q=document.querySelector(".scroll-area"),$=document.querySelector(".up-btn"),ee=document.querySelector(".icon__button");function te(){Q.scrollIntoView({block:"center",behavior:"smooth"})}$.addEventListener("click",te),window.addEventListener("scroll",(function(){scrollY>230&&(ee.classList.add("icon__button--opacity"),ee.style.position="fixed"),scrollY<230&&(ee.classList.remove("icon__button--opacity"),ee.style.position="absolute"),scrollY>300?$.classList.remove("is-hidden"):scrollY<300&&$.classList.add("is-hidden")}));new(0,(H=r("kvC6y")).default);var ne=document.querySelector(".pagination-container");ne.addEventListener("click",(function(e){var t={elPaginationList:document.querySelector(".pagination-list")},n=t.elPaginationList.dataset.current;t.elPaginationList.dataset.last;if("LI"!==e.target.nodeName)return;var a=e.target.dataset.page;if(a===n)return;r=a,null===A?D.page=r:q.page=r,null===A?S(D):L(q),te();var r})),console.log(ne),r("3nfD2"),r("5xtVg"),r("bEuMR"),r("aZhHc"),r("sPj1j"),r("bmNaJ")}();
//# sourceMappingURL=index.a3230bd2.js.map