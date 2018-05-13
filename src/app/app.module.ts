import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConditionsPage } from '../pages/conditions/conditions';
import { ResistancesPage } from '../pages/resistances/resistances';
import { LicensePage } from '../pages/license/license';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from "@ngx-translate/http-loader";

import { Globalization} from "@ionic-native/globalization";

import { IonicStorageModule } from '@ionic/storage';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConditionsPage,
    ResistancesPage,
    LicensePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConditionsPage,
    ResistancesPage,
    LicensePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Globalization,
  ]
})
export class AppModule {}
