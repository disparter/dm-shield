import {Component} from "@angular/core";

import {RequestProvider} from "../../providers/request/request.provider";
import {Storage} from "@ionic/storage";
import {TranslateService} from "@ngx-translate/core";

import {availableLanguages} from "../../constants/language.constants";

@Component({
  templateUrl: "settings.html",
})
export class SettingsPage {
  public languages = availableLanguages;
  public selectedLanguage = "";

  private translate: TranslateService;

  constructor(translate: TranslateService, private storage: Storage, private requestProvider: RequestProvider) {
    this.translate = translate;
    this.storage.get("language").then((value) => {
      this.selectedLanguage = value;
    });
  }

  public applyLanguage() {
    this.storage.set("language", this.selectedLanguage).then((value) => {
      this.translate.use(this.selectedLanguage);
      this.requestProvider.setAcceptLanguage(this.selectedLanguage);
    });
  }
}
