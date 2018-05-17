import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { SkillTypesProvider } from './skill-types-provider';

@Component({
  selector: 'page-list',
  templateUrl: 'skill-types.html',
  providers: [[SkillTypesProvider]]
})
export class SkillTypePage {
  selectedItem: any;
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public skillTypesProvider:SkillTypesProvider, private toast: ToastController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    skillTypesProvider.getTypes().then((result: any) => {
      for (let i = 0; i < result.length; i++) {
        this.items.push(result[i]);
      }
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Error searching for skill types ' + error.error, position: 'botton', duration: 3000 }).present();
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SkillTypePage, {
      item: item
    });
  }
}
