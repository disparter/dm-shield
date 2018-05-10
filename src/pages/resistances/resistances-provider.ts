import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResistancesProvider {
  private API_URL = 'https://ddnext-apis.herokuapp.com/v1/resistances';

  constructor(public http: HttpClient) { }

  public getResistances() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL)
        .subscribe((result: any) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }

}
