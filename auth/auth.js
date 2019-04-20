import { SignupForm } from './blocks/signup/signup';
import { SigninForm } from './blocks/signin/signin';
import { VerifyForm } from './blocks/verify/verify';

import { Verify } from './views/verify/verify'
import { Router } from '../libs/router';
/* eslint-disable */
import _ from './auth.scss';
/* eslint-enable */

window.SignupForm = SignupForm;
window.SigninForm = SigninForm;
window.VerifyForm = VerifyForm;

window.addEventListener('DOMContentLoaded', () => {
  const verifyView = new Verify();
  const router = new Router();

  verifyView.render(document.querySelector('.js-view-verify'));
  router.register('verify', verifyView);
  router.start();
})
