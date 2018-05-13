import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ResistancesProvider } from './resistances-provider';


@Component({
  selector: 'page-list',
  templateUrl: 'resistances.html',
  providers: [[ResistancesProvider]]
})
export class ResistancesPage {
  items: Array<{title: string}>;

  constructor(public conditionsProvider:ResistancesProvider, private toast: ToastController) {
    this.items = [];
    conditionsProvider.getResistances().then((result: any) => {
      for (let i = 0; i < result.length; i++) {
        this.items.push(result[i]);
      }
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Error searching for resistances ' + error.error, position: 'botton', duration: 3000 }).present();
    });
  }
}
