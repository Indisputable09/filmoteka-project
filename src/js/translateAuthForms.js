import { getLanguageFromLS } from './languageSwitch';
import { Movie } from './fetchMovie';
import { LS_LOGIN_KEY } from './authAndLogIn';

const refs = {
  signupTitle: document.querySelector('.sign-up__title'),
  liginTitle: document.querySelector('.login__title'),
  ligoutTitle: document.querySelector('.logout__title'),
  loginUsername: document.querySelector('#login-username'),
  loginEmail: document.querySelector('#login-email'),
  loginPassword: document.querySelector('#login-password'),
  signupEmail: document.querySelector('#signup-email'),
  signupPassword: document.querySelector('#signup-password'),
  loginBtn: document.querySelector('#login__button'),
  loginHeaderBtn: document.querySelector('.login__button--form'),
  logoutButton: document.querySelector('.logout__button--form'),
  liginLink: document.querySelector('.login__link'),
  signupLink: document.querySelector('.sign-up__link'),
  signupBtn: document.querySelector('#signup__button'),
  signupBtnHeader: document.querySelector('.signup__button'),
  logoutBtn: document.querySelector('#logout__button'),
  logoutText: document.querySelector('.logout-modal__text'),
  logoutModal: document.querySelector('.logout-modal'),
};

export async function translateAuthForms() {
  const username = await localStorage.getItem(LS_LOGIN_KEY);
  const lang = await getLanguageFromLS();
  if (lang === Movie.language.ENGLISH) {
    refs.signupTitle.textContent = 'Sign Up';
    refs.signupEmail.placeholder = 'Email';
    refs.signupPassword.placeholder = 'Password';
    refs.signupBtn.textContent = 'Sign Up';
    refs.signupLink.textContent = 'Already have an account?';
    //   -------LOGIN-------
    refs.liginTitle.textContent = 'Log In';
    refs.loginUsername.placeholder = 'Username';
    refs.loginEmail.placeholder = 'Email';
    refs.loginPassword.placeholder = 'Password';
    refs.loginHeaderBtn.textContent = 'Log In';
    refs.liginLink.textContent = 'Want to create a new account?';
    //   -------LOGOUT-------
    refs.ligoutTitle.textContent = 'Log Out';
    refs.logoutText.textContent = `You are logged in as ${username}`;
    refs.logoutButton.textContent = 'Log Out';
  }

  if (lang === Movie.language.UKRAINIAN) {
    refs.signupTitle.textContent = '????????????????????';
    refs.signupEmail.placeholder = '??????????';
    refs.signupPassword.placeholder = '????????????';
    refs.signupBtn.textContent = '????????????????????';
    refs.signupLink.textContent = '?????? ?? ?????????????????? ???????????';
    //   -------LOGIN-------
    refs.liginTitle.textContent = '????????';
    refs.loginUsername.placeholder = "????'?? ??????????????????????";
    refs.loginEmail.placeholder = '??????????';
    refs.loginPassword.placeholder = '????????????';
    refs.loginHeaderBtn.textContent = '????????';
    refs.liginLink.textContent = '???????????????? ?????????? ?????????????????? ???????????';
    //   -------LOGOUT-------
    refs.ligoutTitle.textContent = '??????????';
    refs.logoutText.textContent = `???? ?????????????? ???? ${username}`;
    refs.logoutButton.textContent = `??????????`;
  }
}
translateAuthForms();
