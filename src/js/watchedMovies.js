import { Movie } from './fetchMovie';
import { handleButtonClick as scrollToStart } from './up-btnAndSwitcher';
import {
  keyLS,
  setLanguageToLS,
  getLanguageFromLS,
  switchBtnLang,
  setCurrentPageToLS,
  getCurrentPageFromLS,
} from './languageSwitch';
import { makeMarkupCard } from './cardMarkup';
import { modal, btnNameKey } from './modal';

import Loader from './loader';

const loader = new Loader();

loader.enable('preloader');

modal.addEventListener('click', refreshLibraryOnClickBtnModal);

const mediaQueryMob = window.matchMedia('(max-width: 767px)');
const mediaQueryTab = window.matchMedia(
  '(min-width: 768px) and (max-width: 1279px)'
);
const mediaQueryDesk = window.matchMedia('(min-width: 1280px)');

const DESKTOP_FILMS = 9;
const TABLET_FILMS = 8;
const MOBILE_FILMS = 4;
export let currentTotalFilmsInPage = 9;

let currentLangLibrary = getLanguageFromLS();
export let currentLSWatchedFilms = keyLS.LS_WATHED_EN_DATA_KEY;

const boxMainBbtnsEl = document.querySelector('.box-main-btnss');
const boxFirstBtnEl = document.querySelector('.first-box-btn');
const boxLastBtnEl = document.querySelector('.last-box-btn');
const btnArrowLeftEl = document.querySelector('.btn-arrow.left');
const btnArrowRightEl = document.querySelector('.btn-arrow.right');

export const watchedMovieBtnEl = document.querySelector('.watched');
export const queueMovieBtnEl = document.querySelector('.queue');

const galleryEl = document.querySelector('.gallery');
let watchedFilms = null;
export let watchedFilmsLength = 0;
export let currentPage = 1;
export let totalPages = 0;

mediaQueryMob.addListener(mobilePagination);
mediaQueryMob.addListener(handledChangeMobile);
mediaQueryTab.addListener(handledChangeTablet);
mediaQueryDesk.addListener(handledChangeDeskTop);
watchedMovieBtnEl.addEventListener('click', onClickWatchedBtnMarkupFilms);
queueMovieBtnEl.addEventListener('click', onClickQueueBtnMarkupFilms);

boxMainBbtnsEl.addEventListener('click', onClickBtnInMainBoxChangePage);
boxFirstBtnEl.addEventListener('click', onClickBtnInFirstBoxChangePage);
boxLastBtnEl.addEventListener('click', onClickBtnInLastBoxChangePage);

btnArrowLeftEl.addEventListener('click', onClickBtnArrowLeftChangePage);
btnArrowRightEl.addEventListener('click', onClickBtnArrowRightChangePage);

libraryStart();
getCurrentLSWatchedFilms();

handledChangeMobile(mediaQueryMob);
handledChangeTablet(mediaQueryTab);
handledChangeDeskTop(mediaQueryDesk);

function mobilePagination(e) {
  if (e.matches) {
    makeMarkupBtnsMobile(totalPages);
  } else if (!e.matches) {
    makeMarkupBtns(totalPages);
  }
}

export function libraryStart() {
  if (!currentLangLibrary) {
    currentLangLibrary = setLanguageToLS(Movie.language.ENGLISH);
  }
  if (currentLangLibrary === Movie.language.UKRAINIAN) {
    currentLSWatchedFilms = keyLS.LS_WATHED_UA_DATA_KEY;
  }
  switchBtnLang(currentLangLibrary);
  setCurrentPageToLS(keyLS.VALUE_PAGE_LIBRARY_W);
  setTimeout(() => {
    loader.disable('preloader');
  }, 1000);
}

export function onClickENBtnMarkupFilms() {
  loader.enable('loader');
  currentLSWatchedFilms =
    currentLSWatchedFilms === keyLS.LS_WATHED_EN_DATA_KEY ||
    currentLSWatchedFilms === keyLS.LS_WATHED_UA_DATA_KEY
      ? keyLS.LS_WATHED_EN_DATA_KEY
      : keyLS.LS_QUEUE_EN_DATA_KEY;
  createMarkupFilms(currentLSWatchedFilms);
}

export function onClickUABtnMarkupFilms() {
  loader.enable('loader');
  currentLSWatchedFilms =
    currentLSWatchedFilms === keyLS.LS_WATHED_EN_DATA_KEY ||
    currentLSWatchedFilms === keyLS.LS_WATHED_UA_DATA_KEY
      ? keyLS.LS_WATHED_UA_DATA_KEY
      : keyLS.LS_QUEUE_UA_DATA_KEY;
  createMarkupFilms(currentLSWatchedFilms);
}

function onClickWatchedBtnMarkupFilms() {
  loader.enable('loader');
  currentLangLibrary = getLanguageFromLS();
  getCurrentLSWatchedFilms();
   currentPage = 1;
  createMarkupFilms(currentLSWatchedFilms);
  setCurrentPageToLS(keyLS.VALUE_PAGE_LIBRARY_W);
  watchedMovieBtnEl.classList.add('is-active');
  queueMovieBtnEl.classList.remove('is-active');
  loader.disable('loader');
}

function onClickQueueBtnMarkupFilms() {
  loader.enable('loader');
  currentLangLibrary = getLanguageFromLS();
  getCurrentLSQueueFilms();
   currentPage = 1;
  createMarkupFilms(currentLSWatchedFilms);
  setCurrentPageToLS(keyLS.VALUE_PAGE_LIBRARY_Q);
  queueMovieBtnEl.classList.add('is-active');
  watchedMovieBtnEl.classList.remove('is-active');
  loader.disable('loader');
}

function getCurrentLSWatchedFilms() {
  if (currentLangLibrary === Movie.language.ENGLISH) {
    currentLSWatchedFilms = keyLS.LS_WATHED_EN_DATA_KEY;
  } else if (currentLangLibrary === Movie.language.UKRAINIAN) {
    currentLSWatchedFilms = keyLS.LS_WATHED_UA_DATA_KEY;
  }
}

function getCurrentLSQueueFilms() {
  if (currentLangLibrary === Movie.language.ENGLISH) {
    currentLSWatchedFilms = keyLS.LS_QUEUE_EN_DATA_KEY;
  } else if (currentLangLibrary === Movie.language.UKRAINIAN) {
    currentLSWatchedFilms = keyLS.LS_QUEUE_UA_DATA_KEY;
  }
}

export function createMarkupFilms(currentLSWatchedFilms) {
  watchedFilms = getWatchedFilmsLocalStorage(currentLSWatchedFilms);

  if (watchedFilms === null || watchedFilms.length === 0) {
      clearPagination();
    hiddenBtnArrow();
    boxFirstBtnEl.classList.add('btn-hidden');
    boxLastBtnEl.classList.add('btn-hidden');
    noFilmsMessage();
    loader.disable('loader');
    return;
  } else if (watchedFilms === undefined) {
      clearPagination();
    hiddenBtnArrow();
    boxFirstBtnEl.classList.add('btn-hidden');
    boxLastBtnEl.classList.add('btn-hidden');
    loader.disable('loader');
    return;
  } else if (watchedFilms) {
    watchedFilmsLength = watchedFilms.length;
    totalPages = getTotalPages(watchedFilmsLength, currentTotalFilmsInPage);
    hiddenBtnArrow();
    mobilePagination(mediaQueryMob);
    pickOutCurrentPage(currentPage);
    const filmsFormCurrentPage = watchedFilms.slice(
      (currentPage - 1) * currentTotalFilmsInPage,
      currentPage * currentTotalFilmsInPage
    );
    makeMarkupCard({ results: filmsFormCurrentPage });
  }
}

function getWatchedFilmsLocalStorage(currentLSWatchedFilms) {
  try {
    const getWatchedFilms = localStorage.getItem(currentLSWatchedFilms);
    return getWatchedFilms === null ? null : JSON.parse(getWatchedFilms);
  } catch (error) {
    errorMessage();
    console.error('Get state error: ', error.message);
  }
}

async function noFilmsMessage() {
  currentLangLibrary = getLanguageFromLS();
  if (currentLangLibrary === Movie.language.ENGLISH) {
    galleryEl.innerHTML =
      '<p class="message info animate__bounceInDown">Your watch list is empty.</p>';
  } else if (currentLangLibrary === Movie.language.UKRAINIAN) {
    galleryEl.innerHTML =
      '<p class="message info animate__bounceInDown">Ваш список доданих фільмів порожній.</p>';
  }
}

async function errorMessage() {
  currentLangLibrary = getLanguageFromLS();
  if (currentLangLibrary === Movie.language.ENGLISH) {
    galleryEl.innerHTML =
      '<p class="message error animate__bounceInDown">Unknown error. Watched movies cannot be displayed.</p>';
  } else if (currentLangLibrary === Movie.language.UKRAINIAN) {
    galleryEl.innerHTML =
      '<p class="message error animate__bounceInDown">Невідома помилка. Додані фільми не відображаються.</p>';
  }
}


function clearPagination() {
  boxMainBbtnsEl.innerHTML = '';
}

function handledChangeMobile(e) {
  if (e.matches) {
    currentTotalFilmsInPage = MOBILE_FILMS;
       createMarkupFilms(currentLSWatchedFilms);
  }
}

function handledChangeTablet(e) {
  if (e.matches) {
    currentTotalFilmsInPage = TABLET_FILMS;
    
    createMarkupFilms(currentLSWatchedFilms);
    if (currentPage > totalPages) {
      currentPage = totalPages;
      createMarkupFilms(currentLSWatchedFilms);
    }
    createNumberLastBtn();
  }
}

function handledChangeDeskTop(e) {
  if (e.matches) {
    currentTotalFilmsInPage = DESKTOP_FILMS;

    createMarkupFilms(currentLSWatchedFilms);
    if (currentPage > totalPages) {
      currentPage = totalPages;
      createMarkupFilms(currentLSWatchedFilms);
    }
    createNumberLastBtn();
  }
}

// ---------------------------Pagination--------------------------------

function onClickBtnInMainBoxChangePage(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  scrollToStart();
  currentPage = Number(event.target.textContent);
  createMarkupFilms(currentLSWatchedFilms);
  pickOutCurrentPage(currentPage);
}

function onClickBtnInFirstBoxChangePage(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  } else if (event.target.textContent === '...') {
    currentPage = currentPage >= 6 ? currentPage - 5 : 1;
    scrollToStart();
    createMarkupFilms(currentLSWatchedFilms);
    pickOutCurrentPage(currentPage);
    return;
  }
  currentPage = 1;
  scrollToStart();
  createMarkupFilms(currentLSWatchedFilms);
  pickOutCurrentPage(currentPage);
}

function onClickBtnInLastBoxChangePage(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  } else if (event.target.textContent === '...') {
    currentPage = totalPages >= currentPage + 5 ? currentPage + 5 : totalPages;
    scrollToStart();
    createMarkupFilms(currentLSWatchedFilms);
    pickOutCurrentPage(currentPage);
    return;
  }
  currentPage = Number(event.target.textContent);
  scrollToStart();
  createMarkupFilms(currentLSWatchedFilms);
  pickOutCurrentPage(currentPage);
}

function onClickBtnArrowLeftChangePage() {
  if (currentPage === 1) {
    return;
  }
  currentPage -= 1;
  scrollToStart();
  createMarkupFilms(currentLSWatchedFilms);
  pickOutCurrentPage(currentPage);
}

function onClickBtnArrowRightChangePage() {
  if (currentPage === totalPages) {
    return;
  }
  currentPage += 1;
  scrollToStart();
  createMarkupFilms(currentLSWatchedFilms);
  pickOutCurrentPage(currentPage);
}

function markupBtn() {
  return `<li><button type="button" class="main-btn btn-pg"></button></li>`;
}

function makeMarkupBtns(totalPages) {
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  visibilityBtnsArrows();

  let markupBtns = '';
  let totalBtn = 0;
  if (totalPages <= 9) {
    boxFirstBtnEl.classList.add('btn-hidden');
    boxLastBtnEl.classList.add('btn-hidden');
    totalBtn = totalPages;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }

    addMarkupBtns(markupBtns);
    [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.firstElementChild.textContent = i + 1;
    });
    return;
  } else if (
    totalPages > 9 &&
    currentPage > 5 &&
    currentPage <= totalPages - 5
  ) {
    boxFirstBtnEl.classList.remove('btn-hidden');
    boxLastBtnEl.classList.remove('btn-hidden');
    totalBtn = 5;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
    [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.firstElementChild.textContent = currentPage - 2 + i;
    });

    return;
  } else if (totalPages > 9 && currentPage <= 5) {
    boxFirstBtnEl.classList.add('btn-hidden');
    boxLastBtnEl.classList.remove('btn-hidden');

    totalBtn = 7;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
    [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.firstElementChild.textContent = i + 1;
    });
    createNumberLastBtn();
    return;
  } else if (totalPages > 9 && currentPage > totalPages - 5) {
    boxFirstBtnEl.classList.remove('btn-hidden');
    boxLastBtnEl.classList.add('btn-hidden');
    totalBtn = 7;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
    [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.firstElementChild.textContent = totalPages - 6 + i;
    });

    createNumberLastBtn();
    return;
  }
}

function makeMarkupBtnsMobile(totalPages) {
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  visibilityBtnsArrows();

  let markupBtns = '';
  let totalBtn = 0;

  boxFirstBtnEl.classList.add('btn-hidden');
  boxLastBtnEl.classList.add('btn-hidden');
  if (totalPages <= 5 && totalPages > 0) {
    totalBtn = totalPages;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
    [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.firstElementChild.textContent = i + 1;
    });
    return;
  } else if (totalPages > 5 && currentPage <= 3) {
    totalBtn = 5;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
    [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.firstElementChild.textContent = i + 1;
    });
    return;
  } else if (
    totalPages > 5 &&
    currentPage > 3 &&
    currentPage <= totalPages - 2
  ) {
    totalBtn = 5;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
    [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.firstElementChild.textContent = currentPage - 2 + i;
    });
    return;
  } else if (totalPages > 5 && currentPage >= totalPages - 1) {
    totalBtn = 5;
    for (let i = 1; i <= totalBtn; i += 1) {
      markupBtns += markupBtn();
    }
    addMarkupBtns(markupBtns);
    [...boxMainBbtnsEl.children].map((btn, i) => {
      btn.firstElementChild.textContent = totalPages - 4 + i;
    });
    return;
  }
}

function addMarkupBtns(markupBtns) {
  boxMainBbtnsEl.innerHTML = markupBtns;
}

function createNumberLastBtn() {
  boxLastBtnEl.lastElementChild.firstElementChild.textContent = totalPages;
}

function pickOutCurrentPage(currentPage) {
  [...boxMainBbtnsEl.children].find(el => {
    if (el.firstElementChild.textContent === String(currentPage)) {
      el.firstElementChild.classList.add('btn-current-pages');
    }
  });
}

function getTotalPages(watchedFilmsLength, currentTotalFilmsInPage) {
  return Math.ceil(watchedFilmsLength / currentTotalFilmsInPage);
}

function hiddenBtnArrow() {
  btnArrowLeftEl.classList.add('btn-hidden');
  btnArrowRightEl.classList.add('btn-hidden');
}

function visibleBtnArrow() {
  btnArrowLeftEl.classList.remove('btn-hidden');
  btnArrowRightEl.classList.remove('btn-hidden');
}

function visibilityBtnsArrows() {
  if ((totalPages > 1) & (currentPage > 1) & (currentPage < totalPages)) {
    visibleBtnArrow();
  } else if (totalPages <= 1) {
    hiddenBtnArrow();
  } else if ((totalPages > 1) & (currentPage === 1)) {
    btnArrowRightEl.classList.remove('btn-hidden');
  } else if ((totalPages > 1) & (currentPage === totalPages)) {
    btnArrowLeftEl.classList.remove('btn-hidden');
  }
}

function refreshLibraryOnClickBtnModal(evt) {
  const currentPage = getCurrentPageFromLS();
  if (evt.target.name === btnNameKey.WATCHED) {
    if (currentPage === keyLS.VALUE_PAGE_LIBRARY_W) {
      createMarkupFilms(currentLSWatchedFilms);
    }
  }
  if (evt.target.name === btnNameKey.QUEUE) {
    if (currentPage === keyLS.VALUE_PAGE_LIBRARY_Q) {
      createMarkupFilms(currentLSWatchedFilms);
    }
  }
}
