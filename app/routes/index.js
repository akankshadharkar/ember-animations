import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  model() {
    const data = {
      "tomsters" : [
        {
          "id": 0,
          "imageUrl": "assets/images/zoey.png",
          "title" : "Akanksha"
        },
        {
          "id": 1,
          "imageUrl": "assets/images/munichZoey.png",
          "title" : "crushed"
        },
        {
          "id": 2,
          "imageUrl": "assets/images/cancerZoey.png",
          "title" : "it"
        },
        {
          "id": 3,
          "imageUrl": "assets/images/skylight.png",
          "title" : "!!!!"
        },
        {
          "id": 4,
          "imageUrl": "assets/images/zoey.png",
          "title" : ":)"
        },
        {
          "id": 5,
          "imageUrl": "assets/images/skylight.png",
          "title" : ":D"
        },{
          "id": 6,
          "imageUrl": "assets/images/skylight.png",
          "title" : "!!!!"
        }, {
          "id": 7,
          "imageUrl": "assets/images/zoey.png",
          "title" : ":)"
        },
        {
          "id": 8,
          "imageUrl": "assets/images/skylight.png",
          "title" : ":D"
        },{
          "id": 9,
          "imageUrl": "assets/images/skylight.png",
          "title" : "!!!!"
        }
      ],
      "available": [3,4,5,6,7,8,9],
      "allocated": [0,1,2]
    };
    return data;

    // elements.data.forEach((ms, i) => {
    //   this.store.createRecord('element', {
    //     "id": i,
    //     "title": ms.title,
    //     "imageUrl": ms.imageUrl
    //   });
    // });


    // const finalData = this.store.peekAll('element');
    // return finalData;

  }
}
