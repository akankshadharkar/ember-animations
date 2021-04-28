import Model, { attr }  from '@ember-data/model';

export default class ElementModel extends Model {
  @attr imageUrl;
  @attr title;
}
