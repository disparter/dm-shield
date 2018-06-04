import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { ConditionsProvider } from "./conditions-provider";

@Component({
  providers: [[ConditionsProvider]],
  selector: "page-list",
  templateUrl: "conditions.html",
})
export class ConditionsPage {
  public selectedItem: any;
  public items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public conditionsProvider: ConditionsProvider, private toast: ToastController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    this.items = [];
    conditionsProvider.getConditions().then((result: any) => {
      for (const item of result) {
        this.items.push(item);
      }
    })
    .catch((error: any) => {
      const errorDetails = {
        duration: 3000,
        message: "Error searching for conditions " + error.error,
        position: "bottom",
      };
      this.toast.create(errorDetails).present();
    });
  }

  public itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ConditionsPage, {
      item,
    });
  }
}
