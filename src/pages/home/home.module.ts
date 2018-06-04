import { NgModule } from "@angular/core";
import { IonicModule, Platform } from "ionic-angular";

import { HomePage } from "./home";

@NgModule({
  declarations: [HomePage],
  entryComponents: [HomePage],
  imports: [IonicModule],
})
export class HomeModule {
  constructor(platform: Platform) {
    platform.ready();
  }
}
