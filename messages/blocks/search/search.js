import template from './search.pug';
import { Block } from '../../../blocks/block';
/* eslint-disable */
import _ from './search.scss';

/* eslint-enable */

export class Search extends Block {
  get bemName () {
    return 'search';
  }
  template (data) {
    return template(data);
  }
}
