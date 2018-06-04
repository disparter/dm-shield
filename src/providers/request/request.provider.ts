import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RequestProvider {

  public options: any;

  public setAcceptLanguage(language) {
    if (language) {
      this.options = {headers : new HttpHeaders().set("Accept-Language", language)};
    }
  }

}
