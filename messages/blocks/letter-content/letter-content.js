import { Block } from '../../../blocks/block';
import template from './letter-content.pug';
/* eslint-disable */
import _ from './letter-content.scss';
/* eslint-enable */

export class LetterContent extends Block {
  template (data) {
    return template(data);
  }
}
