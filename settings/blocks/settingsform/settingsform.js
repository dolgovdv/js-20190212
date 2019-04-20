import { Block } from '../block';
import { SettingsMenu } from '../settingsmenu/settingsmenu';

import template from './settingsform.pug';
/* eslint-disable */
import _ from './settingsform.scss';
/* eslint-enable */

export class SettingsForm extends Block {
  get bemName () {
    return 'settings-form';
  }

  template (data) {
    return template(data);
  }
  constructor (options) {
    super(options);
    this.settingsMenu = new SettingsMenu(options.menu);
    this.form = new options.FormConstructor(options.formOptions);
  }
  render (el) {
    super.render(el);
    this.settingsMenu.render(this.getElement('settings-menu'));
    this.form.render(this.getElement('form'));
  }
}
