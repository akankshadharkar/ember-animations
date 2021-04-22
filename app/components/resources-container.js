import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class ResourcesContainerComponent extends Component {

  @action
  toggleData(e) {
    const idInList = this.args.elements.available.findIndex((n) => console.log(n.id));
    // if(idInListA >= 0) {
    //   this.listA.removeAt(idInListA);
    //   this.listB.pushObject('ankush');
    // }
  }

}
