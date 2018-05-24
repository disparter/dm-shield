import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestProvider } from "../../providers/request/request.provider";
import 'rxjs/add/operator/map';

@Injectable()
export class AlignmentsProvider {
  private API_URL = 'https://ddnext-apis.herokuapp.com/v1/monsters/alignments';

  constructor(public http: HttpClient, private request: RequestProvider) { }

  public getAlignments() {
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
