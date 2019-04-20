import { View } from '../view';
import template from './sidebar.pug';
import { Search } from '../../blocks/search/search';
import { Card } from '../../blocks/card/card'

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

  constructor () {
    super();
    this.search = new Search();
    this.card = new Card({
      h5: 'Lorem Ipsum',
      text: 'Lorem Ipsum is simply dummy text of the printing Lorem Ipsum',
      url: 'background-image:url("https://js.cx/clipart/winnie-mult.jpg");'
    });
  }

  render (el) {
    super.render(el);
    this.search.render(this.getElement('search'));
    this.card.render(this.getElement('card'));
  }

  filter () {
    let input = document.getElementsByTagName('input')[0]
    input.onkeyup = () => {
      let input = document.querySelector('.search__input');
      let filter = input.value.toUpperCase();
      let mainCard = document.querySelector('.sidebar__card')
      let childrenDiv = mainCard.querySelectorAll('.card')
      for (let i = 0; i < childrenDiv.length;i++) {
        let text = childrenDiv[i].innerText

        if (text.toUpperCase().indexOf(filter) > -1) {
          childrenDiv[i].style.display = '';
        } else {
          childrenDiv[i].style.display = 'none';
        }
      }
    }
  }
}
