import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';

import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  account = {} as Account

  google = {
    name: '',
    email:''
  }

  // this is an important part. if the user is not loggedin then s/he can´t navigate
  loggedin = false;

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private toast: ToastController) {
  }

  async login() {
    try {
      //const result = ... jos ei toimi
      await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      this.toast.create({
        message: `Login Succesful!`,
        duration: 2000
      }).present();
      this.navCtrl.setRoot('MenuPage');
    }
    // if there is an error during logging in the user is informed
    catch(e) {
      console.error(e);
      this.toast.create({
        message: `Invalid username or password!`,
        duration: 2000
      }).present();
    }
  }

  // adding the google login functionality
  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( res => {
      this.loggedin = true;
      this.google.email = res.user.email;
      // setting the correct rootpage so that the menu navigation works
      this.navCtrl.setRoot('MenuPage');
    })
  }

  navigateToPage(pageName: string) {
    pageName === 'AboutPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
// This app was made by Petteri Vaskin 1600373