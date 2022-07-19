import { Movie } from './fetchMovie';
import { genreFind } from './workWithGenres';
import { getCurrenDataFromLS } from './currentPageData';
// import { noYearVariableLang } from './languageSwitch';

const body = document.querySelector('body');
console.log('~ body', body);
const gallery = document.querySelector('.gallery');
const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal-info__container');
// const modalWindow = document.querySelector('.modal');

gallery.addEventListener('click', onImageClick);
modalBtn.addEventListener('click', onCloseClick);
backdrop.addEventListener('click', onCloseClickBackdrop);

function onImageClick(e) {
  const movies = getCurrenDataFromLS();
  e.preventDefault();
  let ID = Number(e.target.dataset.id);

  movies.map(movie => {
    if (movie.id !== ID) {
      return;
    }
    modalMarkup(movie);
  });

  if (e.target !== e.currentTarget) {
    body.classList.add('modal-open');
    backdrop.classList.remove('is-hidden');
  }
}

function onCloseClickBackdrop(e) {
  if (e.target === e.currentTarget) {
    body.classList.remove('modal-open');
    backdrop.classList.add('is-hidden');
  }
}

function onCloseClick(e) {
  body.classList.remove('modal-open');
  backdrop.classList.add('is-hidden');
}

function modalMarkup({
  poster_path,
  title,
  original_title,
  genre_ids,
  overview,
  vote_count,
  vote_average,
  popularity,
}) {
  const makeMarkupModal = `
      <img src="${
        poster_path
          ? Movie.IMG_PATH + poster_path
          : 'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'
      }" alt="${title}" class="modal-info__img">
      <div class="modal-info">
          <h2 class="modal-info__movie-name">${title.toUpperCase()}</h2>
              <ul class="modal-info__list">
              <li class="modal-info__item">
                    <p class="modal-info__title">Vote / Votes<p>
                    <div class="modal-info__content">
                        <span class="modal-info__content-color"> ${
                          Math.round(vote_average * 10) / 10
                        } </span> / <span class="modal-info__content-color modal-info__content-color--votes">${vote_count}</span>
                    </div>
                </li>
                <li class="modal-info__item">
                    <p class="modal-info__title">Popularity</p>
                    <div class="modal-info__content">${popularity.toFixed(
                      1
                    )}</div>
                </li>
                  <li class="modal-info__item">
                      <p class="modal-info__title">Original Title</p>
                      <div class="modal-info__content modal-info__content--text ">${original_title.toUpperCase()}</div>
                  </li>
                  <li class="modal-info__item">
                      <p class="modal-info__title">Genre</p>
                      <div class="modal-info__content modal-info__content--text">${genreFind(
                        genre_ids
                      )}</div>
                  </li>
              </ul>
                  <p class="modal-info__article-title">About</p>
                  <p class="modal-info__article">${overview}</p>
                  <div class="container-btn">
            <button type="button" class="btn">add to Watched</button>
            <button type="button" class="btn">add to queue</button>
        </div>`;
  return (modal.innerHTML = makeMarkupModal);
}
