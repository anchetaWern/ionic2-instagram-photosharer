import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { PickerPage } from '../../pages/picker/picker';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;

  readonly APP_USERNAME: string = 'me';
  readonly APP_PASSWORD: string = 'secret';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  login() {
    let alert = this.alertCtrl.create({
      title: 'Login Failed',
      subTitle: 'The username or password you entered is incorrect.',
      buttons: ['OK']
    });

    if (this.username == this.APP_USERNAME && this.password == this.APP_PASSWORD) {
      this.navCtrl.push(PickerPage);
    } else {
      alert.present();
    }
    this.username = '';
    this.password = '';
  }

}
