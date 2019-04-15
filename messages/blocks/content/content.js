import { Block } from '../../../blocks/block';
import template from './content.pug';
/* eslint-disable */
import _ from './content.scss';
/* eslint-enable */

export class Content extends Block {
  template (data) {
    return template(data);
  }
}
