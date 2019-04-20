import { Block } from '../../../blocks/block';
import template from './letter.pug';
/* eslint-disable */
import _ from './letter.scss';
/* eslint-enable */

export class Letter extends Block {
  get bemName () {
    return 'letter';
  }
  template (data) {
    return template(data);
  }
  // constructor (options) {
  //   super(options);
  // }
  render (el) {
    super.render(el);
    this.content.render(this.getElement('content'));
  }
}
