import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {

  @action
  toggleElementsBetweenLists(tomsterId) {
    console.log(tomsterId)
    
    let sourceArray, targetArray;

    if(this.model.available.includes(tomsterId)) {
      sourceArray = this.model.available;
      targetArray = this.model.allocated;
    }
    else {
      sourceArray = this.model.allocated;
      targetArray = this.model.available;
    }
    
    if(sourceArray.includes(tomsterId)) {
      const tomsterIndex = sourceArray.indexOf(tomsterId);
      sourceArray.removeAt(tomsterIndex);
      targetArray.pushObject(tomsterId);
    }
  }
}
