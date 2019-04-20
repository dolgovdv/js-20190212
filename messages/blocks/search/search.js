import template from './search.pug';
import { Block } from '../../../blocks/block';
/* eslint-disable */
import _ from './search.scss';
import { Content } from '../content/content';

/* eslint-enable */

export class Search extends Block {
  get bemName () {
    return 'search';
  }

  template (data) {
    return template(data)
  }
}
