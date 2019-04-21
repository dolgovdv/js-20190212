import { Block } from '../block';
import { Textbox } from '../textbox/textbox'
import template from './email-helper.pug';

/* eslint-disable */
import _ from './email-helper.scss';
/* eslint-enable */

export class EmailHelper extends Block {
  get bemName () {
    return 'helper';
  }
  template (data) {
    return template(data);
  }
  get value () {
    return this.getElement('input').value;
  }
  constructor (options) {
    super(options);

    this.email = new Textbox({
      name: 'email',
      label: 'Введите email',
      value: '',
      placeholder: 'alexey.khabarov@mail.ru',
      required: false
    });

    this.helper = document.createElement('div');
    this.helper.style.position = 'absolute';
    this.helper.classList.add(this.bemName);
    this.helper.classList.toggle(`${this.bemName}_active`, false);
    console.log('constructor');
    document.querySelector('.email-helper__email').appendChild(this.helper);

    this.onShowList = this.onShowList.bind(this);
    this.onHideList = this.onHideList.bind(this);
  }

  delegate (eventName, element, cssSelector, callback) {
    let fn = event => {
      if (!event.target.matches(cssSelector)) {
        return;
      }
      callback(event);
    };

    element.addEventListener(eventName, fn);

    return this;
  }

  onShowList (event) {
    event.preventDefault();
    this.el.innerHTML = 'Привет';
    this.el.classList.toggle(`${this.bemName}_active`, true);

    let spanRect = event.target.getBoundingClientRect();
    let elRect = this.el.getBoundingClientRect();

    this.el.style.left = `${spanRect.left}px`

    let top = spanRect.bottom + this.indent;
    if (top + elRect.height > document.documentElement.clientHeight) {
      top = spanRect.top - elRect.height - this.indent;
    }
    console.log('call onShowList');

    this.el.style.top = `${top}px`;
  }
  onHideList () {
    this.el.classList.toggle(`${this.bemName}_active`, false);
    console.log('call onHideList');
  }

  render (el) {
    super.render(el);
    this.email.render(this.getElement('email'));
    console.log('render');
    this.delegate('click', this.el, '[data-tooltip]', this.onShowList);
    // this.delegate('click', document.body, '[data-tooltip]', this.onHideList);
  }
}
