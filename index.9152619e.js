var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("gjiCh");var o=a("dNTj1");a("dNTj1");var r=a("eVqJU"),i=a("k48Mq"),l=a("bAs1G");const c="active",s="btn",u="numb",d="prev-page",g="next-page",p="first-page",f="last-page",h="dots";function S(e){const t=e.page,n=e.total_pages;document.querySelector(".pagination-container").innerHTML=function(e,t){if(e<2)return"";let n,a=`<ul class="pagination-list" data-last="${e}" data-current="${t}">`,o=t-1,r=t+1;if(t>1&&(a+=`<li class="${s} ${d}" data-page="${t-1}"><span><<</span></li>`),e<6)for(let o=1;o<=e;o++)n=t===o?c:"",a+=`<li class="${u} ${n}" data-page="${o}"><span>${o}</span></li>`;else{t>2&&(a+=`<li class="${u} ${p}" data-page="1"><span>1</span></li>`,t>3&&(a+=`<li class="${h}"><span>...</span></li>`)),1===t?r+=2:2===t&&(r+=1),t===e?o-=2:t===e-1&&(o-=1);for(let i=o;i<=r;i++)0===i&&(i+=1),i>e||(n=t===i?c:"",a+=`<li class="${u} ${n}" data-page="${i}"><span>${i}</span></li>`);t<e-1&&(t<e-2&&(a+=`<li class="${h}"><spank">...</span></li>`),a+=`<li class="${u} ${f}" data-page="${e}"><span>${e}</span></li>`)}return t<e&&(a+=`<li class="${s} ${g}" data-page="${t+1}">>></span></li>`),a+="</ul>",a}(n,t)}async function L(e){try{await(0,i.genreLoad)(e);const t=await e.fetchTrend();console.log(t),(0,l.setCurrenDataToLS)(t.results),(0,r.makeMarkupCard)(t),S(t),e.lastPage=t.total_pages}catch(e){console.log(e)}}async function b(e){try{await(0,i.genreLoad)(e);const t=await e.fetchSearch();console.log(t),(0,l.setCurrenDataToLS)(t.results),(0,r.makeMarkupCard)(t),S(t),e.lastPage=t.total_pages}catch(e){console.log(e)}}var m=a("dvsic"),y=(o=a("dNTj1"),r=a("eVqJU"),m=a("dvsic"),o=a("dNTj1"),a("dzEJp"));const x=new(0,(_=a("gjiCh")).default),C={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function w(e){switch(e){case o.Movie.trendTime.DAY:(0,y.disabledEl)(C.btnSwitchDay),(0,y.unlockEl)(C.btnSwitchWeek);break;case o.Movie.trendTime.WEEK:(0,y.disabledEl)(C.btnSwitchWeek),(0,y.unlockEl)(C.btnSwitchDay)}}C.btnSwitchDay.addEventListener("click",(function(){x.enable("loader"),q.page=1,q.currentTrendTime=o.Movie.trendTime.DAY,L(q),w(o.Movie.trendTime.DAY),M()})),C.btnSwitchWeek.addEventListener("click",(function(){x.enable("loader"),q.page=1,q.currentTrendTime=o.Movie.trendTime.WEEK,L(q),w(o.Movie.trendTime.WEEK),M()}));l=a("bAs1G");const v=new(0,(_=a("gjiCh")).default),E={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")};let k,T=null;function M(){T=null}E.formEl.addEventListener("submit",(async function(e){try{if(v.enable("loader"),e.preventDefault(),T=e.target.query.value.trim(),""===T)return E.paragraphEl.innerHTML="Enter the name in the search field",void v.disable("loader");k=new(0,o.Movie)(T),k.langCurrent=(0,m.getLanguageFromLS)();const t=await k.fetchSearch();if(0===t.total_results)return e.target.reset(),E.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.",void v.disable("loader");(0,r.makeMarkupCard)(t),S(t),e.target.reset(),E.paragraphEl.innerHTML="",console.log(t),k.lastPage=t.total_pages,(0,l.setCurrenDataToLS)(t.results),(0,y.unlockEl)(C.btnSwitchDay),(0,y.unlockEl)(C.btnSwitchWeek)}catch(e){console.log(e.message)}}));let q;(new(0,(_=a("gjiCh")).default)).enable("preloader"),null===T&&function(){q=new(0,o.Movie);const e=(0,m.getLanguageFromLS)();e?(q.langCurrent=e,(0,m.switchBtnLang)(q.langCurrent)):q.langCurrent=(0,m.setLanguageToLS)(o.Movie.language.ENGLISH);L(q),w(o.Movie.trendTime.DAY),(0,m.setCurrentPageToLS)(m.keyLS.VALUE_PAGE_INDEX)}();o=a("dNTj1"),m=a("dvsic");var _=a("gjiCh"),$=a("fPbO4");m=a("dvsic"),m=a("dvsic");const U={linkHome:document.querySelector(".js-homeLink-text"),linkMyLibrary:document.querySelector(".js-myLibrary-text"),btnSignUp:document.querySelector(".js-signUp-text"),btnLogIn:document.querySelector(".js-logIn-text"),searchPlaceholder:document.querySelector(".search-form__input"),textUpFirst:document.querySelector(".js-footer-text__up--first"),textUpSecond:document.querySelector(".js-footer-text__up--second"),textUpThird:document.querySelector(".js-footer-text__up--third"),textLink:document.querySelector(".js-footer-text__link")},{linkHome:j,linkMyLibrary:D,btnSignUp:N,btnLogIn:I,searchPlaceholder:A,textUpFirst:P,textUpSecond:W,textUpThird:H,textLink:Y}=U;async function F(){const e=await(0,m.getLanguageFromLS)();"en-US"===e&&(j.textContent="Home",D.textContent="My library",N.textContent="Sign Up","Вхід"===I.textContent?I.textContent="Log In":"Вихід"===I.textContent&&(I.textContent="Log Out"),A.placeholder="Movie search",m.refs.btnSwitchEN.textContent="en",m.refs.btnSwitchUA.textContent="ua",C.btnSwitchDay.textContent="day",C.btnSwitchWeek.textContent="week",P.textContent="All Rights Reserved",W.textContent="Developed with",H.textContent="by",Y.textContent="GoIT Students"),"uk-UA"===e&&(j.textContent="Головна",D.textContent="Моя бібліотека",N.textContent="Реєстрація","Log In"===I.textContent?I.textContent="Вхід":"Log Out"===I.textContent&&(I.textContent="Вихід"),A.placeholder="Пошук фільму",m.refs.btnSwitchEN.textContent="англ",m.refs.btnSwitchUA.textContent="укр",C.btnSwitchDay.textContent="день",C.btnSwitchWeek.textContent="тиждень",P.textContent="Всі права захищені",W.textContent="Зроблено з",H.textContent="",Y.textContent="Студентами GoIT")}F();const G=new(0,_.default);m.refs.btnSwitchEN.addEventListener("click",(function(){G.enable("loader"),null===T?(q.langCurrent=(0,m.setLanguageToLS)(o.Movie.language.ENGLISH),L(q)):(k.langCurrent=(0,m.setLanguageToLS)(o.Movie.language.ENGLISH),b(k));F(),(0,$.renderFooter)()})),m.refs.btnSwitchUA.addEventListener("click",(function(){G.enable("loader"),null===T?(q.langCurrent=(0,m.setLanguageToLS)(o.Movie.language.UKRAINIAN),L(q)):(k.langCurrent=(0,m.setLanguageToLS)(o.Movie.language.UKRAINIAN),b(k));F(),(0,$.renderFooter)()})),a("dNTj1");const O=document.querySelector(".scroll-area"),R=document.querySelector(".up-btn"),K=document.querySelector(".icon__button");function V(){O.scrollIntoView({block:"center",behavior:"smooth"})}R.addEventListener("click",V),window.addEventListener("scroll",(()=>{scrollY>230&&(K.classList.add("icon__button--opacity"),K.style.position="fixed"),scrollY<230&&(K.classList.remove("icon__button--opacity"),K.style.position="absolute"),scrollY>300?R.classList.remove("is-hidden"):scrollY<300&&R.classList.add("is-hidden")}));new(0,(_=a("gjiCh")).default);const J=document.querySelector(".pagination-container");J.addEventListener("click",(function(e){const t={elPaginationList:document.querySelector(".pagination-list")},n=t.elPaginationList.dataset.current;t.elPaginationList.dataset.last;if("LI"!==e.target.nodeName)return;const a=e.target.dataset.page;if(a===n)return;o=a,null===T?q.page=o:k.page=o,null===T?L(q):b(k),V();var o})),console.log(J),a("lMgIy"),a("bTcpz"),a("fPbO4"),a("7bYU0"),a("8cBDi"),a("f0W3V");
//# sourceMappingURL=index.9152619e.js.map