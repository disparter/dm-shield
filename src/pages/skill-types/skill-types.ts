import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { SkillTypesProvider } from "./skill-types-provider";

@Component({
  providers: [[SkillTypesProvider]],
  selector: "page-list",
  templateUrl: "skill-types.html",
})
export class SkillTypePage {
  public selectedItem: any;
  public items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public skillTypesProvider: SkillTypesProvider, private toast: ToastController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");

    this.items = [];
    skillTypesProvider.getTypes().then((result: any) => {
      for (const item of result) {
        this.items.push(item);
      }
    })
    .catch((error: any) => {
      const errorDetails = {
        duration: 3000,
        message: "Error searching for skill types " + error.error,
        position: "bottom",
      };
      this.toast.create(errorDetails).present();
    });
  }

  public itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SkillTypePage, {
      item,
    });
  }
}
