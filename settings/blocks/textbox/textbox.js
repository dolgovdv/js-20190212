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
    return this.getElement('input').value;
  }
}
