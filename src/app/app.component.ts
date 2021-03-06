import {Component, ViewChild} from "@angular/core";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {Nav, Platform} from "ionic-angular";

import {Storage} from "@ionic/storage";
import {TranslateService} from "@ngx-translate/core";

import {AlignmentsPage} from "../pages/alignments/alignments";
import {ConditionsPage} from "../pages/conditions/conditions";
import {DamagesPage} from "../pages/damages/damages";
import {HomePage} from "../pages/home/home";
import {LanguageTypePage} from "../pages/language-types/language-types";
import {LicensePage} from "../pages/license/license";
import {MonsterTypePage} from "../pages/monster-types/monster-types";
import {SenseTypePage} from "../pages/senses-types/sense-types";
import {SettingsPage} from "../pages/settings/settings";
import {SizesPage} from "../pages/sizes/sizes";
import {SkillTypePage} from "../pages/skill-types/skill-types";
import {SpeedsPage} from "../pages/speeds/speeds";

import {defaultLanguage} from "../constants/language.constants";
import {RequestProvider} from "../providers/request/request.provider";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  @ViewChild(Nav) public nav: Nav;

  public rootPage: any = HomePage;

  public pages: Array<{ title: any, component: any, icon: string }>;

  constructor(private translate: TranslateService, public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen, private storage: Storage,
              private requestProvider: RequestProvider) {
    this.initializeApp();

    this.pages = [
      {title: "MENU.HOME", component: HomePage, icon: "home"},
      {title: "MENU.ALIGNMENTS", component: AlignmentsPage, icon: "logo-freebsd-devil"},
      {title: "MENU.CONDITIONS", component: ConditionsPage, icon: "nuclear"},
      {title: "MENU.DAMAGES", component: DamagesPage, icon: "thunderstorm"},
      {title: "MENU.LANGUAGE-TYPES", component: LanguageTypePage, icon: "school"},
      {title: "MENU.MONSTER-TYPES", component: MonsterTypePage, icon: "logo-snapchat"},
      {title: "MENU.SENSE-TYPES", component: SenseTypePage, icon: "glasses"},
      {title: "MENU.SIZES", component: SizesPage, icon: "podium"},
      {title: "MENU.SKILL-TYPES", component: SkillTypePage, icon: "hammer"},
      {title: "MENU.SPEEDS", component: SpeedsPage, icon: "move"},
      {title: "MENU.LICENSE", component: LicensePage, icon: null},
      {title: "MENU.SETTINGS", component: SettingsPage, icon: "settings"},
    ];
  }

  public initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initTranslate();
    });
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public initTranslate() {
    let language = defaultLanguage;
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(defaultLanguage);

    this.storage.get("language").then((value) => {
      if (value) {
        language = value;
      } else if (this.translate.getBrowserLang() !== undefined) {
        language = this.translate.getBrowserLang();
      } else if ((window as any).cordova) {
          language = navigator.language;
      }
      this.translate.use(language);
      this.requestProvider.setAcceptLanguage(language);
    });
  }
}
