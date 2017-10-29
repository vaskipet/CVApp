import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  account = {} as Account

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

// Registration of the new user
  async register() {
    try {
      // creating new user
        await this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
        // if succesfull the user receives a message
        this.toast.create({
          message: "Account succesfully created!",
          duration: 3000
        }).present();
    }
    catch(e){
      console.error(e);
      this.toast.create({
        message: 'Please enter you information to the fields!',
        duration: 3000
      }).present();
    }
  }

}
// This app was made by Petteri Vaskin 1600373