import { Block } from '../../block';
import template from './phoneField.pug';
/* eslint-disable */
import _ from './phoneField.scss';
/* eslint-enable */

export class PhoneField extends Block {
  get bemName () {
    return 'phoneField';
  }
  template (data) {
    return template(data);
  }
  get value () {
    console.log('ddddd', this)
    return this.getElement('input').value;
  }

  set value (value) {
    console.log('ddddd', this.getElement('input').value)
    this.getElement('input').value = value;
  }
}
