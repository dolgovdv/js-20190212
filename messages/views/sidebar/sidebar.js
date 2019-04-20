import { View } from '../view';
import template from './sidebar.pug';
import { Search } from '../../blocks/search/search';
import { MessageCard } from '../../blocks/message-card/message-card'
/* eslint-disable */
import _ from './sidebar.scss';

/* eslint-enable */

export class Sidebar extends View {
  get bemName () {
    return 'sidebar'
  }
  template (data) {
    return template(data)
  }
  constructor (options, list) {
    super(options);
    this.search = new Search(options);
    if (list) {
      list.forEach(item => {
        this.card = new MessageCard(item);
      });
    } else {
      this.card = new MessageCard({
        h5: options.h5 || 'No title',
        text: options.text || 'no text',
        url: options.url || ''
      });
    }
  }
  // filter () {
  //   let input = document.getElementsByTagName('input')[0]
  //   input.onkeyup = () => {
  //     let input = document.querySelector('.search__input');
  //     let filter = input.value.toUpperCase();
  //     let mainCard = document.querySelector('.sidebar__card')
  //     let childrenDiv = mainCard.querySelectorAll('.message-card')
  //     for (let i = 0; i < childrenDiv.length;i++) {
  //       let text = childrenDiv[i].innerText
  //
  //       if (text.toUpperCase().indexOf(filter) > -1) {
  //         childrenDiv[i].style.display = '';
  //       } else {
  //         childrenDiv[i].style.display = 'none';
  //       }
  //     }
  //   }
  // }
  render (el) {
    if (!el) return;

    super.render(el);
    this.search.render(this.getElement('search'));
    this.card.render(this.getElement('cards'));
  }
}
