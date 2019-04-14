import { Block } from '../block';
import { Textbox } from '../textbox/textbox';
import template from './phonenumber.pug';
/* eslint-disable */
import _ from './phonenumber.scss';
/* eslint-enable */

export class Phonenumber extends Block {
  get bemName () {
    return 'phonenumber';
  }
  template (data) {
    return template(data);
  }
  constructor (options) {
    super(options);

    this.phonenumber = new Textbox({
      name: 'phonenumber',
      label: 'Телефонный номер',
      placeholder: '8-999-9999999',
      value: '',
      required: true
    });
  }
  render (el) {
    super.render(el);
    this.phonenumber.render(this.getElement('phonenumber'));

    this.el.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      console.log(this.phonenumber.value);
    })
    this.el.querySelector('input').addEventListener('blur', event => {
      if (this.phonenumber.value.search('[0-9]{1}-[0-9]{3}-[0-9]{7}$') === 0) {
        return
      }
      let error = document.body.querySelector('.phonenumber__error');
      console.log('error', error)
      this.el.querySelector('input').classList.add('error');
      error.textContent = 'invalid phone number';
      event.preventDefault();
    })
    this.el.querySelector('input').addEventListener('focus', event => {
      this.el.value = '';
      let error = document.body.querySelector('.phonenumber__error');
      this.el.querySelector('input').classList.remove('error');
      error.textContent = '';
    })
  }
}
