import { NgModule } from '@angular/core';
import { IonicModule, Platform } from 'ionic-angular';

import { HomePage } from './home';

@NgModule({
  imports: [IonicModule],
  declarations: [HomePage],
  entryComponents: [HomePage]
})
export class HomeModule {
  constructor(platform: Platform) {
    platform.ready().then(() => {
    });
  }
}
