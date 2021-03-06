import { Movie } from './fetchMovie';
import { refs, setLanguageToLS } from './languageSwitch';
import {
  onClickENBtnMarkupFilms,
  onClickUABtnMarkupFilms,
} from './watchedMovies';
import { renderFooter } from './footerTranslation';
import Loader from './loader';
import { translatePageLibrary } from './translateLibrary';
import { translateAuthForms } from './translateAuthForms';

const loader = new Loader();

refs.btnSwitchEN.addEventListener('click', onClickEN);
refs.btnSwitchUA.addEventListener('click', onClickUA);

function onClickEN() {
  setLanguageToLS(Movie.language.ENGLISH);
  onClickENBtnMarkupFilms();
  translatePageLibrary();
  renderFooter();
  translateAuthForms();
  loader.disable('loader');  
}

function onClickUA() {
  setLanguageToLS(Movie.language.UKRAINIAN);
  onClickUABtnMarkupFilms();
  translatePageLibrary();
  renderFooter();
  translateAuthForms();
  loader.disable('loader'); 
}
