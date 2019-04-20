import { Block } from '../block';
import template from './settingsmenu.pug';
/* eslint-disable */
import _ from './settingsmenu.scss';
/* eslint-enable */

export class SettingsMenu extends Block {
  get bemName () {
    return 'settings-menu';
  }

  template (data) {
    return template(data);
  }
  constructor (options = {}) {
    super(options);
  }
  addItem (itemOptions) {
    itemOptions.active = itemOptions.active || false;
    this.options.list = this.options.list || [];
    this.options.list.push(itemOptions);
  }
  render (el) {
    super.render(el);
  }
}
