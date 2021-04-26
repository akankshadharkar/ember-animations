import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {

  @action
  toggleElementsBetweenLists(tomsterObj) { 
    let sourceArray, targetArray;

    if(this.model.leftList.includes(tomsterObj)) {
      sourceArray = this.model.leftList;
      targetArray = this.model.rightList;
    }
    else {
      sourceArray = this.model.rightList;
      targetArray = this.model.leftList;
    }

    if(sourceArray.includes(tomsterObj)) {
      const tomsterIndex = sourceArray.indexOf(tomsterObj);
      sourceArray.removeAt(tomsterIndex);
      targetArray.pushObject(tomsterObj);
    }
  }
}
