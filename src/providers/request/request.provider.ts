import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestProvider {

  public options: any;

  constructor() {
  }

  public setAcceptLanguage(language) {
    if (language) {
      this.options = {'headers' : new HttpHeaders().set('Accept-Language', language)};
    }
  }

}
