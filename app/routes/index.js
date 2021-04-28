import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  model() {
    const emberDataArr = this.store.peekAll('list-of-elements');
    const tomsterIdArray = emberDataArr.map(rec => rec.id);

    const availableArr = tomsterIdArray.slice(0, 2);
    const allocatedArr = tomsterIdArray.slice(2, 6);

    const dataObj = {
      leftList: availableArr,
      rightList: allocatedArr
    };

    return dataObj;
  }
}
