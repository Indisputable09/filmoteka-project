var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequired7c6=a),a("gjiCh");var o=a("dNTj1"),r=a("eVqJU"),i=a("k48Mq"),l=a("bAs1G");const s="active",c="btn-pagination",u="numb",g="prev-page",d="next-page",h="first-page",b="last-page",p="dots",f="disabled";function w(t){const e=t.page,n=t.total_pages;document.querySelector(".pagination-container").innerHTML=function(t,e){if(t<2)return"";let n,a,o=`<ul class="pagination-list" data-last="${t}" data-current="${e}">`,r=e-1,i=e+1;if(e>1&&(o+=`<li class="${c} ${g}"><button data-page="${e-1}"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 8H3.333M8 12.667 3.333 8 8 3.333" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg></button></li>`),t<6)for(let r=1;r<=t;r++)n=e===r?s:"",a=e===r?f:"",o+=`<li class="${u} ${n}" ><button ${a} data-page="${r}">${r}</button></li>`;else if(window.innerWidth>=768){e>3&&(o+=`<li class="${u} ${h}" ><button data-page="1">1</button></li>`,5===e&&(o+=`<li class="${u}" ><button data-page="2">2</button></li>`),e>5&&(o+=`<li class="${p}"><button data-page="${e-5}">...</button></li>`)),1===e?i+=2:e>=2&&(i+=1),e===t?r-=2:e<=t-1&&(r-=1);for(let l=r;l<=i;l++)l<=0||l>t||(n=e===l?s:"",a=e===l?f:"",o+=`<li class="${u} ${n}" ><button ${a} data-page="${l}">${l}</button></li>`);e<t-2&&(e<t-4&&(o+=`<li class="${p}"><button data-page="${e+5}">...</button></li>`),e===t-4&&(o+=`<li class="${u}" ><button data-page="${t-1}">${t-1}</button></li>`),o+=`<li class="${u} ${b}" ><button data-page="${t}">${t}</button></li>`)}else if(window.innerWidth<768){e>2&&(o+=`<li class="${u} ${h}" ><button data-page="1">1</button></li>`),1===e?i+=2:2===e&&(i+=1),e===t?r-=2:e===t-1&&(r-=1);for(let l=r;l<=i;l++)0===l&&(l+=1),l>t||(n=e===l?s:"",a=e===l?f:"",o+=`<li class="${u} ${n}" ><button ${a} data-page="${l}">${l}</button></li>`);e<t-1&&(o+=`<li class="${u} ${b}" ><button data-page="${t}">${t}</button></li>`)}return e<t&&(o+=`<li class="${c} ${d}" ><button data-page="${e+1}"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.333 8h9.334M8 12.667 12.667 8 8 3.333" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg></button></li>`),o+="</ul>",o}(n,e)}o=a("dNTj1"),r=a("eVqJU");var L=a("dvsic"),S=(o=a("dNTj1"),a("dzEJp"));const v=new(0,(q=a("gjiCh")).default),m={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function C(t){switch(t){case o.Movie.trendTime.DAY:(0,S.disabledEl)(m.btnSwitchDay),(0,S.unlockEl)(m.btnSwitchWeek);break;case o.Movie.trendTime.WEEK:(0,S.disabledEl)(m.btnSwitchWeek),(0,S.unlockEl)(m.btnSwitchDay)}}m.btnSwitchDay.addEventListener("click",(function(){v.enable("loader"),I.page=1,I.currentTrendTime=o.Movie.trendTime.DAY,A(I),C(o.Movie.trendTime.DAY),x()})),m.btnSwitchWeek.addEventListener("click",(function(){v.enable("loader"),I.page=1,I.currentTrendTime=o.Movie.trendTime.WEEK,A(I),C(o.Movie.trendTime.WEEK),x()}));l=a("bAs1G");const E=new(0,(q=a("gjiCh")).default),y={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")};let $,T,k,M=null;function x(){M=null,T=void 0}function N(){y.paragraphEl.innerHTML=""}async function A(t){try{await(0,i.genreLoad)(t);const e=await t.fetchTrend();(0,l.setCurrenDataToLS)(e.results),(0,r.makeMarkupCard)(e),w(e),t.lastPage=e.total_pages,k=t,N()}catch(t){console.log(t)}}async function D(t){try{await(0,i.genreLoad)(t);const e=await t.fetchSearch();(0,l.setCurrenDataToLS)(e.results),(0,r.makeMarkupCard)(e),w(e),t.lastPage=e.total_pages,N()}catch(t){console.log(t)}}y.formEl.addEventListener("submit",(async function(t){try{E.enable("loader"),t.preventDefault(),M=t.target.query.value.trim();const e=await(0,L.getLanguageFromLS)();if(""===M)return e===o.Movie.language.ENGLISH?y.paragraphEl.innerHTML="Enter the name in the search field.":y.paragraphEl.innerHTML="Введіть назву в поле пошуку.",void E.disable("loader");$=new(0,o.Movie)(M),$.langCurrent=(0,L.getLanguageFromLS)();const n=await $.fetchSearch();if(0===n.total_results)return t.target.reset(),e===o.Movie.language.ENGLISH?y.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.":y.paragraphEl.innerHTML="Результат пошуку невдалий. Введіть правильну назву фільму та повторіть спробу.",E.disable("loader"),k&&(x(),I=k),void(T&&($=T));(0,r.makeMarkupCard)(n),w(n),t.target.reset(),N(),$.lastPage=n.total_pages,(0,l.setCurrenDataToLS)(n.results),(0,S.unlockEl)(m.btnSwitchDay),(0,S.unlockEl)(m.btnSwitchWeek),T=$,k=void 0}catch(t){console.log(t.message)}}));L=a("dvsic");let I;(new(0,(q=a("gjiCh")).default)).enable("preloader"),null===M&&function(){I=new(0,o.Movie);const t=(0,L.getLanguageFromLS)();t?(I.langCurrent=t,(0,L.switchBtnLang)(I.langCurrent)):I.langCurrent=(0,L.setLanguageToLS)(o.Movie.language.ENGLISH);A(I),C(o.Movie.trendTime.DAY),(0,L.setCurrentPageToLS)(L.keyLS.VALUE_PAGE_INDEX)}();o=a("dNTj1"),L=a("dvsic");var q=a("gjiCh"),j=a("fPbO4");L=a("dvsic"),L=a("dvsic"),o=a("dNTj1");const U={linkHome:document.querySelector(".js-homeLink-text"),linkMyLibrary:document.querySelector(".js-myLibrary-text"),btnSignUp:document.querySelector(".js-signUp-text"),btnLogIn:document.querySelector(".js-logIn-text"),searchPlaceholder:document.querySelector(".search-form__input")},{linkHome:H,linkMyLibrary:W,btnSignUp:P,btnLogIn:G,searchPlaceholder:_}=U;async function F(){const t=await(0,L.getLanguageFromLS)();t===o.Movie.language.ENGLISH&&(H.textContent="Home",W.textContent="My library",P.textContent="Sign Up","Вхід"===G.textContent?G.textContent="Log In":"Вихід"===G.textContent&&(G.textContent="Log Out"),_.placeholder="Movie search",L.refs.btnSwitchEN.textContent="en",L.refs.btnSwitchUA.textContent="ua",m.btnSwitchDay.textContent="day",m.btnSwitchWeek.textContent="week"),t===o.Movie.language.UKRAINIAN&&(H.textContent="Головна",W.textContent="Бібліотека",P.textContent="Реєстрація","Log In"===G.textContent?G.textContent="Вхід":"Log Out"===G.textContent&&(G.textContent="Вихід"),_.placeholder="Пошук фільму",L.refs.btnSwitchEN.textContent="англ",L.refs.btnSwitchUA.textContent="укр",m.btnSwitchDay.textContent="день",m.btnSwitchWeek.textContent="тиждень")}F();var O=a("5GzhR");const R=new(0,q.default);L.refs.btnSwitchEN.addEventListener("click",(function(){R.enable("loader"),null===M?(I.langCurrent=(0,L.setLanguageToLS)(o.Movie.language.ENGLISH),A(I)):($.langCurrent=(0,L.setLanguageToLS)(o.Movie.language.ENGLISH),D($));F(),(0,j.renderFooter)(),(0,O.translateAuthForms)()})),L.refs.btnSwitchUA.addEventListener("click",(function(){R.enable("loader"),null===M?(I.langCurrent=(0,L.setLanguageToLS)(o.Movie.language.UKRAINIAN),A(I)):($.langCurrent=(0,L.setLanguageToLS)(o.Movie.language.UKRAINIAN),D($));F(),(0,j.renderFooter)(),(0,O.translateAuthForms)()}));var K=a("Tc9hE");const Y=new(0,(q=a("gjiCh")).default);document.querySelector(".pagination-container").addEventListener("click",(function(t){Y.enable("loader");const e={elPaginationList:document.querySelector(".pagination-list")},n=e.elPaginationList.dataset.current;e.elPaginationList.dataset.last;let a=1;if("BUTTON"===t.target.nodeName)a=t.target.dataset.page;else{const e=t.target.closest("[data-page]");if(!e)return;a=e.dataset.page}if(a===n)return;o=a,null===M?I.page=o:$.page=o,null===M?A(I):D($),(0,K.handleButtonClick)();var o})),a("lMgIy"),a("bTcpz"),a("Tc9hE"),a("fPbO4"),a("7bYU0"),a("8cBDi"),a("f0W3V"),a("5GzhR");
//# sourceMappingURL=index.cccbe1b3.js.map