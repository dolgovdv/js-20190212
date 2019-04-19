import { Block } from '../block'
// import { Textbox } from '../textbox/textbox';
import template from './gallerey.pug'
/* eslint-disable */
import _ from "./gallerey.scss"
/* eslint-enable */

export class Gallerey extends Block {
  get bemName () {
    return 'gallerey';
  }
  template (data) {
    return template(data);
  }

  constructor (options) {
    super(options);
    this.options = options;
    this.size = this.options.size;
    this.inLine = this.options.inLine;
    this.inLineElem = this.options.inLineElem;
  }
  render (el) {
    super.render(el);
    let coord = 0;
    let size = this.size;
    if (this.inLine) {
      let widthGallerey = document.getElementById('inLine__wrap');
      widthGallerey.style.display = 'flex';
      document.getElementById('btn__right').onclick = function () {
        coord = coord - 300;
        if (coord <= -((size * 300) - 900)) {
          coord = -((size * 300) - 900);
        }
        widthGallerey.style.left = coord + 'px';
      };
      document.getElementById('btn__left').onclick = function () {
        coord = coord + 300;
        if (coord > 0) {
          coord = 0;
        }
        widthGallerey.style.left = coord + 'px'
      };
    }
  }
}
