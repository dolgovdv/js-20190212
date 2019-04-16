import { Block } from '../../../blocks/block';
import { Content } from '../content/content';
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
  constructor (options) {
    super(options);
    this.content = new Content({
      text: options.text
    });
  }
  render (el) {
    super.render(el);
    this.content.render(this.getElement('content'));
  }
}
