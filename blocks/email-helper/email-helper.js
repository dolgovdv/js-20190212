import { Block } from '../block';
import template from './email-helper.pug';

/* eslint-disable */
import _ from './email-helper.scss';
/* eslint-enable */

export class EmailHelper extends Block {
  get bemName () {
    return 'email-helper';
  }
  template (data) {
    return template(data);
  }
  get value () {
    return this.getElement('input').value;
  }
}
