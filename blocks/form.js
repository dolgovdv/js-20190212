import { Block } from './block';

export class Form extends Block {
  get bemName () {
    return 'form';
  }
  constructor (options) {
    super(options);
    this.fields = {};
  };
  addFields (FieldsConstructor, fieldName, fieldOptions) {
    this.fields[fieldName] = new FieldsConstructor(fieldOptions);
  };
  renderFields () {
    for (let field of this.fields) {
      field.render(this.getElement(field.options.name));
    }
  };
  render (el) {
    super.render(el);
    this.renderFields();
  };
  addOnSubmit (fn) {
    this.el.addEventListener('submit', fn);
  };
  removeOnSubmit (fn) {
    this.el.removeEventListener('submit', fn);
  };
}
