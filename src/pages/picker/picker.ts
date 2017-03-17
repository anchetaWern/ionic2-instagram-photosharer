import { Component } from '@angular/core';
import { ImagePicker, Instagram } from 'ionic-native';

@Component({
  templateUrl: 'picker.html'
})
export class PickerPage {

  picked_image: string;
  has_picked_image: boolean = false;
  caption: string;
  readonly DEFAULT_IMAGE: string = 'http://placehold.it/500x500';

  constructor() {
    this.picked_image = this.DEFAULT_IMAGE;
  }

  pickImage() {
    let options = {
      maximumImagesCount: 1,
      width: 500,
      height: 500,
      quality: 50,
      outputType: 1
    };

    ImagePicker.getPictures(options).then((results) => {
      this.picked_image = 'data:image/jpeg;base64,' + results[0];
      this.has_picked_image = true;
    }, (err: any) => {
      console.log(err);
      this.has_picked_image = false;
    });

  }

  shareImage() {
    Instagram.share(this.picked_image, this.caption)
      .then(() => {
        this.picked_image = this.DEFAULT_IMAGE;
        this.has_picked_image = false;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

}
