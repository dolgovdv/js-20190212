import { Block } from '../block'
// import { Textbox } from '../textbox/textbox';
import template from './galarey.pug'
/* eslint-disable */
import _ from "./galarey.scss"
/* eslint-enable */

export class Galarey extends Block {
  get bemName () {
    return 'galarey';
  }
  template (data) {
    return template(data);
  }
  run (view, size) {
    let coord = 0;
    if (view) {
      const widthGalarey = document.getElementById('inLine__wrap');
      widthGalarey.style.display = 'flex';
      document.getElementById('btn__left').onclick = function () {
        coord = coord - 300;
        if (coord < -((size * 300) - 900)) {
          coord = -((size * 300) - 900);
        }
        widthGalarey.style.left = coord + 'px'
      };
      document.getElementById('btn__right').onclick = function () {
        coord = coord + 300;
        if (coord > 0) {
          coord = 0;
        }
        widthGalarey.style.left = coord + 'px'
      };
    }
    let heightCoord = 300;
    const rowStyle = document.getElementById('inRow');
    document.getElementById('btn__more').onclick = function () {
      if (heightCoord >= ((size / 3) * 300)) {
        return;
      }
      heightCoord = heightCoord + 300;
      rowStyle.style.height = heightCoord + 'px';
    };
    document.getElementById('btn__hidden').onclick = function () {
      heightCoord = 300;
      rowStyle.style.height = heightCoord + 'px';
    };
  }
}
