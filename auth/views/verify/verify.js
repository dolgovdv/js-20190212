import { View } from '../view';
import template from './verify.pug';

import { Verify } from '../../blocks/verify/verify'

/* eslint-disable */
import _ from './verify.scss';
/* eslint-enable */

export class VerifyView extends View {
  get bemName () {
    return 'verify';
  }
  template (data) {
    return template(data);
  }
  constructor () {
    super();
    this.verify = new Verify();
  }
  render (el) {
    super.render(el);
    this.veify.render(this.getElement('verify'))
  }
}
