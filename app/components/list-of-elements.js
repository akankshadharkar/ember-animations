import Component from '@glimmer/component';
import fade from 'ember-animated/transitions/fade';
import move from 'ember-animated/motions/move';
import scale from 'ember-animated/motions/scale';
import { parallel } from 'ember-animated';
export default class ListOfElementsComponent extends Component {
  * transition({ sentSprites, receivedSprites, keptSprites }) {
    
    console.log("SENTTTT", sentSprites, "RECEIVED", receivedSprites, "KEPT", keptSprites);

    sentSprites.forEach(sprite => {
      parallel(move(sprite), scale(sprite));
    });

    keptSprites.forEach(sprite => {
      move(sprite);
    });

    // Removed sprites should exit to the right side of the window. We use
    // easeIn here so they start with no momentum and gradually speed up until
    // they leave the screen at top speed.
    // removedSprites.forEach(sprite => {
    //   sprite.endAtPixel({ x: window.innerWidth });
    //   move(sprite, { easing: easeIn });
    // });

    // // Kept sprites should ease out of their current position and ease in to
    // // their new position.
    // keptSprites.forEach(sprite => {
    //   move(sprite, { easing: easeInAndOut });
    // });

    // // Inserted sprites should come in from the right side of the window. We use
    // // easeOut here so they enter at top speed and gradually slow down as they
    // // approach their final position.
    // insertedSprites.forEach(sprite => {
    //   sprite.startAtPixel({ x: window.innerWidth });
    //   move(sprite, { easing: easeOut });
    // });
  }
}
