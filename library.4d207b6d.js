!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},e.parcelRequired7c6=t),t("kvC6y");var i=t("4cG42"),r=t("Jmfug"),o=t("7iFtI"),L=(t("5xtVg"),new(0,t("kvC6y").default));L.enable("preloader");var l=window.matchMedia("(max-width: 767px)"),_=window.matchMedia("(min-width: 768px) and (max-width: 1279px)"),c=window.matchMedia("(min-width: 1280px)"),s=9,A=(0,r.getLanguageFromLS)(),d=r.keyLS.LS_WATHED_EN_DATA_KEY,u=document.querySelector(".watched"),E=document.querySelector(".queue"),S=document.querySelector(".gallery"),g=null;function f(){L.enable("loader"),A=(0,r.getLanguageFromLS)(),v(),m(),y(d),(0,r.setCurrentPageToLS)(r.keyLS.VALUE_PAGE_LIBRARY_W),u.classList.add("is-active"),E.classList.remove("is-active")}function T(){L.enable("loader"),(A=(0,r.getLanguageFromLS)())===i.Movie.language.ENGLISH?d=r.keyLS.LS_QUEUE_EN_DATA_KEY:A===i.Movie.language.UKRAINIAN&&(d=r.keyLS.LS_QUEUE_UA_DATA_KEY),m(),y(d),(0,r.setCurrentPageToLS)(r.keyLS.VALUE_PAGE_LIBRARY_Q),E.classList.add("is-active"),u.classList.remove("is-active")}function v(){A===i.Movie.language.ENGLISH?d=r.keyLS.LS_WATHED_EN_DATA_KEY:A===i.Movie.language.UKRAINIAN&&(d=r.keyLS.LS_WATHED_UA_DATA_KEY)}function y(e){if(null!==(g=function(e){try{var n=localStorage.getItem(e);return null===n?null:JSON.parse(n)}catch(e){S.innerHTML='<p class="error">Unknown error. Watched movies cannot be displayed.</p>',console.error("Get state error: ",e.message)}}(e))){if(void 0!==g&&g){g.length;var n=g.slice(0*s,1*s);(0,o.makeMarkupCard)({results:n})}}else S.innerHTML='<p class="message">Your watch films list is empty.</p>'}function m(){S.innerHTML=""}function D(e){e.matches&&(s=4,m(),y(d))}function k(e){e.matches&&(s=8,m(),y(d))}function U(e){e.matches&&(s=9,m(),y(d))}l.addListener(D),_.addListener(k),c.addListener(U),u.addEventListener("click",f),E.addEventListener("click",T),function(){A||(A=(0,r.setLanguageToLS)(i.Movie.language.ENGLISH));A===i.Movie.language.UKRAINIAN&&(d=r.keyLS.LS_WATHED_UA_DATA_KEY);(0,r.switchBtnLang)(A),(0,r.setCurrentPageToLS)(r.keyLS.VALUE_PAGE_LIBRARY_W)}(),v(),D(l),k(_),U(c),t("3nfD2");i=t("4cG42");(r=t("Jmfug")).refs.btnSwitchEN.addEventListener("click",(function(){(0,r.setLanguageToLS)(i.Movie.language.ENGLISH),L.enable("loader"),y(d=d===r.keyLS.LS_WATHED_EN_DATA_KEY||d===r.keyLS.LS_WATHED_UA_DATA_KEY?r.keyLS.LS_WATHED_EN_DATA_KEY:r.keyLS.LS_QUEUE_EN_DATA_KEY)})),r.refs.btnSwitchUA.addEventListener("click",(function(){(0,r.setLanguageToLS)(i.Movie.language.UKRAINIAN),L.enable("loader"),y(d=d===r.keyLS.LS_WATHED_EN_DATA_KEY||d===r.keyLS.LS_WATHED_UA_DATA_KEY?r.keyLS.LS_WATHED_UA_DATA_KEY:r.keyLS.LS_QUEUE_UA_DATA_KEY)})),t("5xtVg"),t("aZhHc"),t("sPj1j"),t("bmNaJ")}();
//# sourceMappingURL=library.4d207b6d.js.map
