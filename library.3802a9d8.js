var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=a),a("gjiCh");var i=a("dNTj1"),o=a("dvsic"),r=a("eVqJU");a("bTcpz");const l=new(0,a("gjiCh").default);l.enable("preloader");const s=window.matchMedia("(max-width: 767px)"),c=window.matchMedia("(min-width: 768px) and (max-width: 1279px)"),L=window.matchMedia("(min-width: 1280px)");let d=9,_=(0,o.getLanguageFromLS)(),A=o.keyLS.LS_WATHED_EN_DATA_KEY;const u=document.querySelector(".watched"),E=document.querySelector(".queue"),S=document.querySelector(".gallery");let g=null,T=0;function f(){l.enable("loader"),_=(0,o.getLanguageFromLS)(),v(),D(),U(A),(0,o.setCurrentPageToLS)(o.keyLS.VALUE_PAGE_LIBRARY_W),u.classList.add("is-active"),E.classList.remove("is-active")}function y(){l.enable("loader"),_=(0,o.getLanguageFromLS)(),_===i.Movie.language.ENGLISH?A=o.keyLS.LS_QUEUE_EN_DATA_KEY:_===i.Movie.language.UKRAINIAN&&(A=o.keyLS.LS_QUEUE_UA_DATA_KEY),D(),U(A),(0,o.setCurrentPageToLS)(o.keyLS.VALUE_PAGE_LIBRARY_Q),E.classList.add("is-active"),u.classList.remove("is-active")}function v(){_===i.Movie.language.ENGLISH?A=o.keyLS.LS_WATHED_EN_DATA_KEY:_===i.Movie.language.UKRAINIAN&&(A=o.keyLS.LS_WATHED_UA_DATA_KEY)}function U(e){if(g=function(e){try{const n=localStorage.getItem(e);return null===n?null:JSON.parse(n)}catch(e){S.innerHTML='<p class="error">Unknown error. Watched movies cannot be displayed.</p>',console.error("Get state error: ",e.message)}}(e),null===g)return S.innerHTML='<p class="message">Your watch films list is empty.</p>',void l.disable("loader");if(void 0!==g){if(g){T=g.length;const e=g.slice(0*d,1*d);(0,r.makeMarkupCard)({results:e})}}else l.disable("loader")}function D(){S.innerHTML=""}function m(e){e.matches&&(d=4,D(),U(A))}function p(e){e.matches&&(d=8,D(),U(A))}function N(e){e.matches&&(d=9,D(),U(A))}s.addListener(m),c.addListener(p),L.addListener(N),u.addEventListener("click",f),E.addEventListener("click",y),function(){_||(_=(0,o.setLanguageToLS)(i.Movie.language.ENGLISH));_===i.Movie.language.UKRAINIAN&&(A=o.keyLS.LS_WATHED_UA_DATA_KEY);(0,o.switchBtnLang)(_),(0,o.setCurrentPageToLS)(o.keyLS.VALUE_PAGE_LIBRARY_W)}(),v(),m(s),p(c),N(L),a("lMgIy");i=a("dNTj1");(o=a("dvsic")).refs.btnSwitchEN.addEventListener("click",(function(){(0,o.setLanguageToLS)(i.Movie.language.ENGLISH),l.enable("loader"),A=A===o.keyLS.LS_WATHED_EN_DATA_KEY||A===o.keyLS.LS_WATHED_UA_DATA_KEY?o.keyLS.LS_WATHED_EN_DATA_KEY:o.keyLS.LS_QUEUE_EN_DATA_KEY,U(A)})),o.refs.btnSwitchUA.addEventListener("click",(function(){(0,o.setLanguageToLS)(i.Movie.language.UKRAINIAN),l.enable("loader"),A=A===o.keyLS.LS_WATHED_EN_DATA_KEY||A===o.keyLS.LS_WATHED_UA_DATA_KEY?o.keyLS.LS_WATHED_UA_DATA_KEY:o.keyLS.LS_QUEUE_UA_DATA_KEY,U(A)})),a("bTcpz"),a("7bYU0"),a("8cBDi"),a("f0W3V");
//# sourceMappingURL=library.3802a9d8.js.map
