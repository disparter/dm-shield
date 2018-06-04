import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { SpeedsProvider } from "./speeds-provider";

@Component({
  providers: [[SpeedsProvider]],
  selector: "page-list",
  templateUrl: "speeds.html",
})
export class SpeedsPage {
  private selectedItem: any;
  private items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public speedsProvider: SpeedsProvider,
              private toast: ToastController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    this.items = [];
    speedsProvider.getSpeeds().then((result: any) => {
      for (const item of result) {
        this.items.push(item);
      }
    })
    .catch((error: any) => {
      const errorDetails = {
        duration: 3000,
        message: "Error searching for speed types " + error.error,
        position: "botton",
      };
      this.toast.create(errorDetails).present();
    });
  }

  public itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SpeedsPage, { item });
  }
}
