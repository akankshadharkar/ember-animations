import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    this.store.createRecord('list-of-elements', {
      id: 1
    });
    this.store.createRecord('list-of-elements', {
      id: 2
    });
    this.store.createRecord('list-of-elements', {
      id: 3
    });
    this.store.createRecord('list-of-elements', {
      id: 4
    });
    this.store.createRecord('list-of-elements', {
      id: 5
    });
    this.store.createRecord('list-of-elements', {
      id: 6
    });
  }
}
