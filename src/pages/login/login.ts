import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  // this is an important parent. if the user is not loggedin then s/he can´t navigate
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
      this.navCtrl.setRoot('TabsPage');
    }
    catch(e) {
      console.error(e);
      this.toast.create({
        message: `Invalid username or password!`,
        duration: 2000
      }).present();
    }
  }

  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( res => {
      // console.logs are for testing
      // console.log('From --Google--');
      // console.log(res);
      this.loggedin = true;
      this.google.email = res.user.email;
      this.navCtrl.setRoot('TabsPage');
    })
  }


  // navigateToPage(pageName: string) {
  //   pageName === 'ShoppingListPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }
  navigateToPage(pageName: string) {
    pageName === 'AboutPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
// this app is done by Petteri Vaskin