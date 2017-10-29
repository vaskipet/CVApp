import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    AngularFireAuthModule
  ],
})
export class RegisterPageModule {}
// This app was made by Petteri Vaskin 1600373