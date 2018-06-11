import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { AlignmentsPage } from "../pages/alignments/alignments";
import { ConditionsPage } from "../pages/conditions/conditions";
import { DamagesPage } from "../pages/damages/damages";
import { HomePage } from "../pages/home/home";
import { LanguageTypePage } from "../pages/language-types/language-types";
import { LicensePage } from "../pages/license/license";
import { MonsterTypePage } from "../pages/monster-types/monster-types";
import { SenseTypePage } from "../pages/senses-types/sense-types";
import { SettingsPage } from "../pages/settings/settings";
import { SizesPage } from "../pages/sizes/sizes";
import { SkillTypePage } from "../pages/skill-types/skill-types";

import { SpeedsPage } from "../pages/speeds/speeds";
import { MyApp } from "./app.component";

import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgHttpLoaderModule } from "ng-http-loader/ng-http-loader.module";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader} from "@ngx-translate/http-loader";

import { IonicStorageModule } from "@ionic/storage";
import { RequestProvider } from "../providers/request/request.provider";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    MyApp,

    AlignmentsPage,
    ConditionsPage,
    DamagesPage,
    HomePage,
    LanguageTypePage,
    LicensePage,
    MonsterTypePage,
    SenseTypePage,
    SettingsPage,
    SizesPage,
    SkillTypePage,
    SpeedsPage,
  ],
  entryComponents: [
    MyApp,

    AlignmentsPage,
    ConditionsPage,
    DamagesPage,
    HomePage,
    LanguageTypePage,
    LicensePage,
    MonsterTypePage,
    SenseTypePage,
    SettingsPage,
    SizesPage,
    SkillTypePage,
    SpeedsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      driverOrder: ["indexeddb", "sqlite", "websql"],
      name: "__mydb",
    }),
    TranslateModule.forRoot({
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
      },
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RequestProvider,
  ],
})
export class AppModule {}
