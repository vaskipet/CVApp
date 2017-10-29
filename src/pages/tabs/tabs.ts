import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  // tab1Root: string;
  // tab2Root: string;
  // tab3Root: string;
  // tab4Root: string;
  tab1Root='AboutPage';
  tab2Root='CvPage';
  tab3Root='ProjectsPage';
  tab4Root='HobbiesPage';

  myIndex: number; //testing..


  constructor(public navCtrl: NavController, public navParams: NavParams) {
// the logic for the tabs (links etc.)
    // this.myIndex = navParams.fata.tabIndex || 0;
    // this.tab1Root = 'AboutPage';
    // this.tab2Root = 'CvPage';
    // this.tab3Root = 'ProjectsPage';
    // this.tab4Root = 'HobbiesPage';
  }



}
// This app was made by Petteri Vaskin 1600373