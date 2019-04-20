import { Block } from '../block';
import template from './textbox.pug';
/* eslint-disable */
import _ from './textbox.scss';
/* eslint-enable */

export class Textbox extends Block {
  get bemName () {
    return 'textbox';
  }
  template (data) {
    return template(data);
  }
  get value () {
    if (this.options.required && this.getElement('input').value === '') {
      this.getElement('input').classList.add('error');
      return false;
    }
    if (this.getElement('input').classList.contains('error')) {
      this.getElement('input').classList.remove('error');
    }
    return this.getElement('input').value;
  }
}
