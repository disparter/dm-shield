import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { RequestProvider } from "../../providers/request/request.provider";

@Injectable()
export class ConditionsProvider {
  private API_URL = "https://ddnext-apis.herokuapp.com/v1/conditions";

  constructor(public http: HttpClient, private request: RequestProvider) { }

  public getConditions() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL, this.request.options)
        .subscribe((result: any) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }

}
