!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("kvC6y");var o=r("4cG42"),c=r("bpxeT"),i=r("2TvXO");r("4cG42");var l=r("7iFtI"),u=r("5pO50"),s=r("3lV3Z");r("3nfD2");var d=themeMode||"light",g="active",p="btn-pagination",f="numb",h="prev-page",v="next-page",b="first-page",w="last-page",k="dots",m="disabled";function L(e){var t=e.page,n=e.total_pages;document.querySelector(".pagination-container").innerHTML=function(e,t){if(e<2)return"";var n,a,r,o='<ul class="pagination-list" data-last="'.concat(e,'" data-current="').concat(t,'">'),c=t-1,i=t+1;if(r="light"==d?"arrow-light-theme":"arrow-dark-theme",t>1&&(o+='<li class="'.concat(p," ").concat(h,'"><button data-page="').concat(t-1,'"><svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path class="').concat(r,'" d="M12.6667 8H3.33337" stroke="none" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path class="').concat(r,'" d="M8.00004 12.6667L3.33337 8.00004L8.00004 3.33337" stroke="none" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n</svg></button></li>')),e<6)for(var l=1;l<=e;l++)n=t===l?g:"",a=t===l?m:"",o+='<li class="'.concat(f," ").concat(n,'" ><button ').concat(a,' data-page="').concat(l,'">').concat(l,"</button></li>");else{t>2&&(o+='<li class="'.concat(f," ").concat(b,'" ><button data-page="1">1</button></li>'),t>3&&window.innerWidth>768&&(o+='<li class="'.concat(k,'"><button ').concat(m,">...</button></li>"))),1===t?i+=2:2===t&&(i+=1),t===e?c-=2:t===e-1&&(c-=1);for(var u=c;u<=i;u++)0===u&&(u+=1),u>e||(n=t===u?g:"",a=t===u?m:"",o+='<li class="'.concat(f," ").concat(n,'" ><button ').concat(a,' data-page="').concat(u,'">').concat(u,"</button></li>"));t<e-1&&window.innerWidth>768&&(t<e-2&&(o+='<li class="'.concat(k,'"><button ').concat(m,">...</button></li>")),o+='<li class="'.concat(f," ").concat(w,'" ><button data-page="').concat(e,'">').concat(e,"</button></li>"))}return t<e&&(o+='<li class="'.concat(p," ").concat(v,'" ><button data-page="').concat(t+1,'"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path class="').concat(r,'" d="M3.33329 8H12.6666" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path class="').concat(r,'" d="M7.99996 12.6667L12.6666 8.00004L7.99996 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n</svg></button></li>')),o+"</ul>"}(n,t)}function x(e){return S.apply(this,arguments)}function S(){return(S=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.genreLoad)(n);case 3:return e.next=5,n.fetchTrend();case 5:a=e.sent,console.log(a),(0,s.setCurrenDataToLS)(a.results),(0,l.makeMarkupCard)(a),L(a),n.lastPage=a.total_pages,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function y(e){return C.apply(this,arguments)}function C(){return(C=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.genreLoad)(n);case 3:return e.next=5,n.fetchSearch();case 5:a=e.sent,console.log(a),(0,s.setCurrenDataToLS)(a.results),(0,l.makeMarkupCard)(a),L(a),n.lastPage=a.total_pages,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}var E=r("Jmfug"),M=(c=r("bpxeT"),i=r("2TvXO"),o=r("4cG42"),l=r("7iFtI"),E=r("Jmfug"),o=r("4cG42"),r("6JEwH")),T=new(0,(P=r("kvC6y")).default),D={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function N(e){switch(e){case o.Movie.trendTime.DAY:(0,M.disabledEl)(D.btnSwitchDay),(0,M.unlockEl)(D.btnSwitchWeek);break;case o.Movie.trendTime.WEEK:(0,M.disabledEl)(D.btnSwitchWeek),(0,M.unlockEl)(D.btnSwitchDay)}}function I(){(0,M.unlockEl)(D.btnSwitchDay),(0,M.unlockEl)(D.btnSwitchWeek)}D.btnSwitchDay.addEventListener("click",(function(){T.enable("loader"),A.page=1,A.currentTrendTime=o.Movie.trendTime.DAY,x(A),N(o.Movie.trendTime.DAY),W()})),D.btnSwitchWeek.addEventListener("click",(function(){T.enable("loader"),A.page=1,A.currentTrendTime=o.Movie.trendTime.WEEK,x(A),N(o.Movie.trendTime.WEEK),W()}));s=r("3lV3Z");var q,A,H=new(0,(P=r("kvC6y")).default),U={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")},_=null;function G(){return(G=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,H.enable("loader"),n.preventDefault(),""!==(_=n.target.query.value.trim())){e.next=8;break}return U.paragraphEl.innerHTML="Enter the name in the search field",H.disable("loader"),e.abrupt("return");case 8:return(q=new(0,o.Movie)(_)).langCurrent=(0,E.getLanguageFromLS)(),e.next=12,q.fetchSearch();case 12:if(0!==(a=e.sent).total_results){e.next=18;break}return n.target.reset(),U.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.",H.disable("loader"),e.abrupt("return");case 18:(0,l.makeMarkupCard)(a),L(a),n.target.reset(),U.paragraphEl.innerHTML="",console.log(a),q.lastPage=a.total_pages,(0,s.setCurrenDataToLS)(a.results),I(),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),console.log(e.t0.message);case 31:case"end":return e.stop()}}),t,null,[[0,28]])})))).apply(this,arguments)}function W(){_=null}U.formEl.addEventListener("submit",(function(e){return G.apply(this,arguments)})),(new(0,(P=r("kvC6y")).default)).enable("preloader"),null===_&&function(){A=new(0,o.Movie);var e=(0,E.getLanguageFromLS)();e?(A.langCurrent=e,(0,E.switchBtnLang)(A.langCurrent)):A.langCurrent=(0,E.setLanguageToLS)(o.Movie.language.ENGLISH);x(A),N(o.Movie.trendTime.DAY),(0,E.setCurrentPageToLS)(E.keyLS.VALUE_PAGE_INDEX)}();o=r("4cG42"),E=r("Jmfug");var P=r("kvC6y"),j=r("bEuMR"),F=(c=r("bpxeT"),i=r("2TvXO"),E=r("Jmfug"),E=r("Jmfug"),o=r("4cG42"),{linkHome:document.querySelector(".js-homeLink-text"),linkMyLibrary:document.querySelector(".js-myLibrary-text"),btnSignUp:document.querySelector(".js-signUp-text"),btnLogIn:document.querySelector(".js-logIn-text"),searchPlaceholder:document.querySelector(".search-form__input")}),O=F.linkHome,J=F.linkMyLibrary,R=F.btnSignUp,K=F.btnLogIn,B=F.searchPlaceholder;function V(){return X.apply(this,arguments)}function X(){return(X=e(c)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.getLanguageFromLS)();case 2:(n=e.sent)===o.Movie.language.ENGLISH&&(O.textContent="Home",J.textContent="My library",R.textContent="Sign Up","Вхід"===K.textContent?K.textContent="Log In":"Вихід"===K.textContent&&(K.textContent="Log Out"),B.placeholder="Movie search",E.refs.btnSwitchEN.textContent="en",E.refs.btnSwitchUA.textContent="ua",D.btnSwitchDay.textContent="day",D.btnSwitchWeek.textContent="week"),n===o.Movie.language.UKRAINIAN&&(O.textContent="Головна",J.textContent="Бібліотека",R.textContent="Реєстрація","Log In"===K.textContent?K.textContent="Вхід":"Log Out"===K.textContent&&(K.textContent="Вихід"),B.placeholder="Пошук фільму",E.refs.btnSwitchEN.textContent="англ",E.refs.btnSwitchUA.textContent="укр",D.btnSwitchDay.textContent="день",D.btnSwitchWeek.textContent="тиждень");case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}console.log(B),V();var Y=new(0,P.default);E.refs.btnSwitchEN.addEventListener("click",(function(){Y.enable("loader"),null===_?(A.langCurrent=(0,E.setLanguageToLS)(o.Movie.language.ENGLISH),x(A)):(q.langCurrent=(0,E.setLanguageToLS)(o.Movie.language.ENGLISH),y(q));V(),(0,j.renderFooter)()})),E.refs.btnSwitchUA.addEventListener("click",(function(){Y.enable("loader"),null===_?(A.langCurrent=(0,E.setLanguageToLS)(o.Movie.language.UKRAINIAN),x(A)):(q.langCurrent=(0,E.setLanguageToLS)(o.Movie.language.UKRAINIAN),y(q));V(),(0,j.renderFooter)()})),r("4cG42");var Z=r("fkFrJ");r("3nfD2");new(0,(P=r("kvC6y")).default);document.querySelector(".pagination-container").addEventListener("click",(function(e){var t={elPaginationList:document.querySelector(".pagination-list")},n=t.elPaginationList.dataset.current;t.elPaginationList.dataset.last;if("BUTTON"!==e.target.nodeName)return;var a=e.target.dataset.page;if(a===n)return;r=a,null===_?A.page=r:q.page=r,null===_?x(A):y(q),(0,Z.handleButtonClick)();var r})),r("3nfD2"),r("5xtVg"),r("fkFrJ"),r("bEuMR"),r("aZhHc"),r("sPj1j"),r("bmNaJ")}();
//# sourceMappingURL=index.ddff2142.js.map
