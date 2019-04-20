import { Content } from './blocks/content/content';
import { Letter } from './blocks/letter/letter';
import { Card } from './blocks/card/card';
import { Search } from './blocks/search/search'
import { Sidebar } from './views/sidebar/sidebar'

/* eslint-disable */
import _ from './messages.scss';
import { Router } from '../libs/router';

/* eslint-enable */

window.Content = Content;
window.Letter = Letter;
window.Card = Card;
window.Search = Search;

window.addEventListener('DOMContentLoaded', () => {
  let search = new Sidebar();
  search.render(document.querySelector('.js-view-sidebar'))
  search.filter()

  const router = new Router();
  router.register('messages', search, true);
  router.start();
});
