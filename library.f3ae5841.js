var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o),o("gjiCh"),o("gYMAk"),o("lMgIy");var i=o("dNTj1"),r=o("dvsic"),l=o("gYMAk"),a=o("fPbO4"),g=o("gjiCh");o("dvsic"),i=o("dNTj1"),r=o("dvsic"),l=o("gYMAk");const c={linkHome:document.querySelector(".js-homeLink-text"),linkMyLibrary:document.querySelector(".js-myLibrary-text"),btnSignUp:document.querySelector(".js-signUp-text"),btnLogIn:document.querySelector(".js-logIn-text"),notLoggedMessage:document.querySelector(".js-notLoggedMessage")},{linkHome:u,linkMyLibrary:d,btnSignUp:s,btnLogIn:x,notLoggedMessage:f}=c;async function C(){const t=await(0,r.getLanguageFromLS)();t===i.Movie.language.ENGLISH&&(u.textContent="Home",d.textContent="My library",s.textContent="Sign Up","Вхід"===x.textContent?x.textContent="Log In":"Вихід"===x.textContent&&(x.textContent="Log Out"),l.watchedMovieBtnEl.textContent="watched",l.queueMovieBtnEl.textContent="queue",r.refs.btnSwitchEN.textContent="en",r.refs.btnSwitchUA.textContent="ua",f.textContent="Here will be your films, after you log in :)"),t===i.Movie.language.UKRAINIAN&&(u.textContent="Головна",d.textContent="Бібліотека",s.textContent="Реєстрація","Log In"===x.textContent?x.textContent="Вхід":"Log Out"===x.textContent&&(x.textContent="Вихід"),l.watchedMovieBtnEl.textContent="Переглянуті",l.queueMovieBtnEl.textContent="До перегляду",r.refs.btnSwitchEN.textContent="англ",r.refs.btnSwitchUA.textContent="укр",f.textContent="Тут будуть Ваші фільми після реєстрації :)")}C();const b=new(0,g.default);r.refs.btnSwitchEN.addEventListener("click",(function(){(0,r.setLanguageToLS)(i.Movie.language.ENGLISH),(0,l.onClickENBtnMarkupFilms)(),C(),(0,a.renderFooter)(),b.disable("loader")})),r.refs.btnSwitchUA.addEventListener("click",(function(){(0,r.setLanguageToLS)(i.Movie.language.UKRAINIAN),(0,l.onClickUABtnMarkupFilms)(),C(),(0,a.renderFooter)(),b.disable("loader")})),o("bTcpz"),o("Tc9hE"),o("fPbO4"),o("7bYU0"),o("8cBDi"),o("f0W3V");
//# sourceMappingURL=library.f3ae5841.js.map
