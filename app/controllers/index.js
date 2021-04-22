import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {

  @action
  toggleElementsBetweenLists(tomsterObj) { 
    let sourceArray, targetArray;

    if(this.model.available.includes(tomsterObj)) {
      sourceArray = this.model.available;
      targetArray = this.model.allocated;
    }
    else {
      sourceArray = this.model.allocated;
      targetArray = this.model.available;
    }
    
    if(sourceArray.includes(tomsterObj)) {
      const tomsterIndex = sourceArray.indexOf(tomsterObj);
      sourceArray.removeAt(tomsterIndex);
      targetArray.pushObject(tomsterObj);
    }
  }
}
