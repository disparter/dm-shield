import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { SizesProvider } from "./sizes-provider";

@Component({
  providers: [[SizesProvider]],
  selector: "page-list",
  templateUrl: "sizes.html",
})
export class SizesPage {
  public selectedItem: any;
  public items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public sizesProvider: SizesProvider, private toast: ToastController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    this.items = [];
    sizesProvider.getSizes().then((result: any) => {
      for (const item of result) {
        this.items.push(item);
      }
    })
      .catch((error: any) => {
        const errorDetails = {
          duration: 3000,
          message: "Error searching for sizes " + error.error,
          position: "bottom",
        };
        this.toast.create(errorDetails).present();
      });
  }

  public itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SizesPage, {
      item,
    });
  }
}
