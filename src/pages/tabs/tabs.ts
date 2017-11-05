import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {


  tab1Root='AboutPage';
  tab2Root='CvPage';
  tab3Root='ProjectsPage';
  tab4Root='HobbiesPage';

  myIndex: number; //testing..


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
// the logic for the tabs (links etc.)

  }



}
// This app was made by Petteri Vaskin 1600373