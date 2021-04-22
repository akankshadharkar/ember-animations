import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ResourcesAllocatedComponent extends Component {

  @action
  addition(x) {
    console.log(x);
  }
}
