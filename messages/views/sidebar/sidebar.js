import template from './sidebar.pug';
import { Block } from '../../../blocks/block';
/* eslint-disable */
import _ from './sidebar.scss';

/* eslint-enable */

export class Sidebar extends Block {
  template (data) {
    return template(data)
  }
}
