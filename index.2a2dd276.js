!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("kvC6y");var o=r("4cG42"),c=r("bpxeT"),i=r("2TvXO");r("4cG42");var l=r("7iFtI"),u=r("5pO50"),s=r("3lV3Z"),d="active",g="btn-pagination",p="numb",f="prev-page",b="next-page",v="first-page",h="last-page",m="dots",L="disabled";function S(e){var t=e.page,n=e.total_pages;document.querySelector(".pagination-container").innerHTML=function(e,t){if(e<2)return"";var n,a,r='<ul class="pagination-list" data-last="'.concat(e,'" data-current="').concat(t,'">'),o=t-1,c=t+1;if(t>1&&(r+='<li class="'.concat(g," ").concat(f,'" ><button data-page="').concat(t-1,'">&#129144;</button></li>')),e<6)for(var i=1;i<=e;i++)n=t===i?d:"",a=t===i?L:"",r+='<li class="'.concat(p," ").concat(n,'" ><button ').concat(a,' data-page="').concat(i,'">').concat(i,"</button></li>");else{t>2&&(r+='<li class="'.concat(p," ").concat(v,'" ><button data-page="1">1</button></li>'),t>3&&window.innerWidth>768&&(r+='<li class="'.concat(m,'"><button ').concat(L,">...</button></li>"))),1===t?c+=2:2===t&&(c+=1),t===e?o-=2:t===e-1&&(o-=1);for(var l=o;l<=c;l++)0===l&&(l+=1),l>e||(n=t===l?d:"",a=t===l?L:"",r+='<li class="'.concat(p," ").concat(n,'" ><button ').concat(a,' data-page="').concat(l,'">').concat(l,"</button></li>"));t<e-1&&window.innerWidth>768&&(t<e-2&&(r+='<li class="'.concat(m,'"><button ').concat(L,">...</button></li>")),r+='<li class="'.concat(p," ").concat(h,'" ><button data-page="').concat(e,'">').concat(e,"</button></li>"))}return t<e&&(r+='<li class="'.concat(g," ").concat(b,'" ><button data-page="').concat(t+1,'">&#129146;</button></li>')),r+"</ul>"}(n,t)}function y(e){return w.apply(this,arguments)}function w(){return(w=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.genreLoad)(n);case 3:return e.next=5,n.fetchTrend();case 5:a=e.sent,console.log(a),(0,s.setCurrenDataToLS)(a.results),(0,l.makeMarkupCard)(a),S(a),n.lastPage=a.total_pages,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function x(e){return k.apply(this,arguments)}function k(){return(k=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.genreLoad)(n);case 3:return e.next=5,n.fetchSearch();case 5:a=e.sent,console.log(a),(0,s.setCurrenDataToLS)(a.results),(0,l.makeMarkupCard)(a),S(a),n.lastPage=a.total_pages,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}var C=r("Jmfug"),E=(c=r("bpxeT"),i=r("2TvXO"),o=r("4cG42"),l=r("7iFtI"),C=r("Jmfug"),o=r("4cG42"),r("6JEwH")),T=new(0,(W=r("kvC6y")).default),M={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function D(e){switch(e){case o.Movie.trendTime.DAY:(0,E.disabledEl)(M.btnSwitchDay),(0,E.unlockEl)(M.btnSwitchWeek);break;case o.Movie.trendTime.WEEK:(0,E.disabledEl)(M.btnSwitchWeek),(0,E.unlockEl)(M.btnSwitchDay)}}function I(){(0,E.unlockEl)(M.btnSwitchDay),(0,E.unlockEl)(M.btnSwitchWeek)}M.btnSwitchDay.addEventListener("click",(function(){T.enable("loader"),_.page=1,_.currentTrendTime=o.Movie.trendTime.DAY,y(_),D(o.Movie.trendTime.DAY),G()})),M.btnSwitchWeek.addEventListener("click",(function(){T.enable("loader"),_.page=1,_.currentTrendTime=o.Movie.trendTime.WEEK,y(_),D(o.Movie.trendTime.WEEK),G()}));s=r("3lV3Z");var N,_,q=new(0,(W=r("kvC6y")).default),A={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")},U=null;function H(){return(H=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,q.enable("loader"),n.preventDefault(),""!==(U=n.target.query.value.trim())){e.next=8;break}return A.paragraphEl.innerHTML="Enter the name in the search field",q.disable("loader"),e.abrupt("return");case 8:return(N=new(0,o.Movie)(U)).langCurrent=(0,C.getLanguageFromLS)(),e.next=12,N.fetchSearch();case 12:if(0!==(a=e.sent).total_results){e.next=18;break}return n.target.reset(),A.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.",q.disable("loader"),e.abrupt("return");case 18:(0,l.makeMarkupCard)(a),S(a),n.target.reset(),A.paragraphEl.innerHTML="",console.log(a),N.lastPage=a.total_pages,(0,s.setCurrenDataToLS)(a.results),I(),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),console.log(e.t0.message);case 31:case"end":return e.stop()}}),t,null,[[0,28]])})))).apply(this,arguments)}function G(){U=null}A.formEl.addEventListener("submit",(function(e){return H.apply(this,arguments)})),(new(0,(W=r("kvC6y")).default)).enable("preloader"),null===U&&function(){_=new(0,o.Movie);var e=(0,C.getLanguageFromLS)();e?(_.langCurrent=e,(0,C.switchBtnLang)(_.langCurrent)):_.langCurrent=(0,C.setLanguageToLS)(o.Movie.language.ENGLISH);y(_),D(o.Movie.trendTime.DAY),(0,C.setCurrentPageToLS)(C.keyLS.VALUE_PAGE_INDEX)}();o=r("4cG42"),C=r("Jmfug");var W=r("kvC6y"),P=r("bEuMR"),O=(c=r("bpxeT"),i=r("2TvXO"),C=r("Jmfug"),C=r("Jmfug"),o=r("4cG42"),{linkHome:document.querySelector(".js-homeLink-text"),linkMyLibrary:document.querySelector(".js-myLibrary-text"),btnSignUp:document.querySelector(".js-signUp-text"),btnLogIn:document.querySelector(".js-logIn-text"),searchPlaceholder:document.querySelector(".search-form__input")}),F=O.linkHome,Y=O.linkMyLibrary,J=O.btnSignUp,R=O.btnLogIn,j=O.searchPlaceholder;function K(){return V.apply(this,arguments)}function V(){return(V=e(c)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.getLanguageFromLS)();case 2:(n=e.sent)===o.Movie.language.ENGLISH&&(F.textContent="Home",Y.textContent="My library",J.textContent="Sign Up","Вхід"===R.textContent?R.textContent="Log In":"Вихід"===R.textContent&&(R.textContent="Log Out"),j.placeholder="Movie search",C.refs.btnSwitchEN.textContent="en",C.refs.btnSwitchUA.textContent="ua",M.btnSwitchDay.textContent="day",M.btnSwitchWeek.textContent="week"),n===o.Movie.language.UKRAINIAN&&(F.textContent="Головна",Y.textContent="Бібліотека",J.textContent="Реєстрація","Log In"===R.textContent?R.textContent="Вхід":"Log Out"===R.textContent&&(R.textContent="Вихід"),j.placeholder="Пошук фільму",C.refs.btnSwitchEN.textContent="англ",C.refs.btnSwitchUA.textContent="укр",M.btnSwitchDay.textContent="день",M.btnSwitchWeek.textContent="тиждень");case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}console.log(j),K();var X=new(0,W.default);C.refs.btnSwitchEN.addEventListener("click",(function(){X.enable("loader"),null===U?(_.langCurrent=(0,C.setLanguageToLS)(o.Movie.language.ENGLISH),y(_)):(N.langCurrent=(0,C.setLanguageToLS)(o.Movie.language.ENGLISH),x(N));K(),(0,P.renderFooter)()})),C.refs.btnSwitchUA.addEventListener("click",(function(){X.enable("loader"),null===U?(_.langCurrent=(0,C.setLanguageToLS)(o.Movie.language.UKRAINIAN),y(_)):(N.langCurrent=(0,C.setLanguageToLS)(o.Movie.language.UKRAINIAN),x(N));K(),(0,P.renderFooter)()})),r("4cG42");var Z=document.querySelector(".scroll-area"),B=document.querySelector(".up-btn"),z=document.querySelector(".icon__button");function Q(){Z.scrollIntoView({block:"center",behavior:"smooth"})}B.addEventListener("click",Q),window.addEventListener("scroll",(function(){scrollY>230&&(z.classList.add("icon__button--opacity"),z.style.position="fixed"),scrollY<230&&(z.classList.remove("icon__button--opacity"),z.style.position="absolute"),scrollY>300?B.classList.remove("is-hidden"):scrollY<300&&B.classList.add("is-hidden")}));new(0,(W=r("kvC6y")).default);var $=document.querySelector(".pagination-container");$.addEventListener("click",(function(e){var t={elPaginationList:document.querySelector(".pagination-list")},n=t.elPaginationList.dataset.current;t.elPaginationList.dataset.last;if("BUTTON"!==e.target.nodeName)return;var a=e.target.dataset.page;if(a===n)return;r=a,null===U?_.page=r:N.page=r,null===U?y(_):x(N),Q();var r})),console.log($),r("3nfD2"),r("5xtVg"),r("bEuMR"),r("aZhHc"),r("sPj1j"),r("bmNaJ")}();
//# sourceMappingURL=index.2a2dd276.js.map
