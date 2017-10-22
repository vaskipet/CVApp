import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  account = {} as Account

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private navParams: NavParams, private toast: ToastController) {
  }

  async login() {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      // console.log(result);
      this.toast.create({
        message: `Login Succesful!`,
        duration: 2000
      }).present();
      // this.navCtrl.setRoot('ShoppingListPage');
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

  navigateToPage(pageName: string) {
    pageName === 'ShoppingListPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
// this app is done by Petteri Vaskin