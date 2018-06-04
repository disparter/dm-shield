import { Component } from "@angular/core";

import { TranslateService } from "@ngx-translate/core";
import { availableLanguages } from "../../constants/language.constants";

import { Storage } from "@ionic/storage";
import { RequestProvider } from "../../providers/request/request.provider";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})

export class HomePage {

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
