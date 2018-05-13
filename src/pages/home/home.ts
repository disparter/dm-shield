import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { availableLanguages } from './home.constants';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  languages = availableLanguages;
  selectedLanguage = '';

  private translate: TranslateService;

  constructor(translate: TranslateService, private storage: Storage) {
    this.translate = translate;
    this.storage.get('language').then(value => {
      this.selectedLanguage = value;
    });
  }

  applyLanguage() {
    this.storage.set('language', this.selectedLanguage).then(value => {
      this.translate.use(this.selectedLanguage);
    });
  }

}
