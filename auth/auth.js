import { Signup } from './blocks/signup/signup';
import { Signin } from './blocks/signin/signin';
// import { Verify } from './blocks/verify/verify';

import { Verify } from './views/verify/verify'
import { Router } from '../libs/router';
/* eslint-disable */
import _ from './auth.scss';
/* eslint-enable */

window.Signup = Signup;
window.Signin = Signin;
// window.Verify = Verify;

window.addEventListener('DOMContentLoaded', () => {
  const VerifyView = new Verify();
  const router = new Router();

  VerifyView.render(document.querySelector('.js-view-verify'));
  router.register('card', VerifyView);
  router.start();
})
