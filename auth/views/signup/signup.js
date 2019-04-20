import { View } from '../view';
import template from './signup.pug';

import { SignupForm } from '../../blocks/signup/signup'

/* eslint-disable */
import _ from './signup.scss';
/* eslint-enable */

export class Signup extends View {
  get bemName () {
    return 'signup';
  }
  template (data) {
    return template(data);
  }
  constructor () {
    super();
    this.signupForm = new SignupForm();
  }
  render (el) {
    super.render(el);
    console.log(this.getElement('form'))
    this.signupForm.render(this.getElement('form'))
  }
}
