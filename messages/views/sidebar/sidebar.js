import template from './sidebar.pug';
import { Block } from '../../../blocks/block';

import { Card } from '../../blocks/card/card'
import { Search } from '../../blocks/search/search';

/* eslint-disable */
import _ from './sidebar.scss';

/* eslint-enable */

export class Sidebar extends Block {
  get bemName () {
    return 'sidebar'
  }

  template (data) {
    return template(data)
  }

  constructor () {
    super();
    this.search = new Search();
    this.card = new Card();
  }

  render (el) {
    super.render(el);
    this.card.render(this.getElement('card'));
    this.search.render(this.getElement('search'));
  }
}
