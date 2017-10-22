import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: string;
  tab2Root: string;


  constructor() {

    this.tab1Root = 'ShoppingListPage';
    this.tab2Root = 'AboutPage';
  }



}
