import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { SenseTypesProvider } from "./sense-types-provider";

@Component({
  providers: [[SenseTypesProvider]],
  selector: "page-list",
  templateUrl: "sense-types.html",
})
export class SenseTypePage {
  public selectedItem: any;
  public items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public senseTypesProvider: SenseTypesProvider, private toast: ToastController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    this.items = [];
    senseTypesProvider.getTypes().then((result: any) => {
      for (const item of result) {
        this.items.push(item);
      }
    })
      .catch((error: any) => {
        const errorDetails = {
          duration: 3000,
          message: "Error searching for senses types " + error.error,
          position: "bottom",
        };
        this.toast.create(errorDetails).present();
      });
  }

  public itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SenseTypePage, {
      item,
    });
  }
}
