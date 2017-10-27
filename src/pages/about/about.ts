import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// lazy loading is initialized

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

doAlert(){
  // creating an alert to display for the user
  let alert = this.alertCtrl.create({
    title: 'Contact information',
    message: `Email: 1600373@student.laurea.fi
              Phone: 555-5555555`,
    buttons: ['OK']
  });
  // displaying alert
  alert.present()
}

logoutOfGoogle(){
  // creating another alert for the user
  let alert2 = this.alertCtrl.create({
    title: 'This doesn´t work... :(',
    message: '...which is very frustrating!',
    buttons: ['OK, I understand! No need to feel down :)']
  });
  // displaying alert
  alert2.present()
}


}
// <!-- this app is done byt Petteri Vaskin -->