import {
  SettingsMenu
} from '../../blocks/settingsmenu/settingsmenu';
import {
  View
} from '../view';
import template from './menu.pug';

export class Menu extends View {
  get bemName () {
    return 'menu';
  }

  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.settingsMenu = new SettingsMenu();
  }

  render (el, state) {
    super.render(el, state);
    this.settingsMenu.addItem({
      href: '#persondata',
      text: 'Личные данные'
    });
    this.settingsMenu.addItem({
      href: '#security',
      text: 'Безопасность'
    });
    this.settingsMenu.render(this.getElement('place'));
  }
}
