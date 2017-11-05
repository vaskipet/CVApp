import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;

  // creating the page interface
  pages: PageInterface[] = [
    {title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 0, icon: 'help'},
    {title: 'CV', pageName: 'TabsPage', tabComponent: 'CvPage', index: 1, icon: 'list-box'},
    {title: 'Projects', pageName: 'TabsPage', tabComponent: 'ProjectsPage', index: 2, icon: 'logo-github'},
    {title: 'Hobbies', pageName: 'TabsPage', tabComponent: 'HobbiesPage', index: 3, icon: 'game-controller-b'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // functionality to navigate with the menu
 openPage(page: PageInterface){
   let params = {};
   if(page.index){
     params= {tabIndex: page.index};
   }
   if(this.nav.getActiveChildNav() && page.index != undefined) {
     this.nav.getActiveChildNav().select(page.index);
   } else {
     this.nav.setRoot(page.pageName, params);
   }

 }
//  when the page is activated so should the icon in the menu navigation
 isActive(page: PageInterface){
   let childNav = this.nav.getActiveChildNav();

   if(childNav){
     if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
       return 'primary';
     }
     return;
   }
   if(this.nav.getActive() && this.nav.getActive().name === page.pageName) {
     return 'primary';
   }

 }

}
