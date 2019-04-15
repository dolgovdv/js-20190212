import template from './card.pug';
import { Block } from '../../../blocks/block';
/* eslint-disable */
import _ from './card.scss';
import { Content } from '../content/content';

/* eslint-enable */

export class Card extends Block {
  template (data) {
    return template(data)
  }
}
