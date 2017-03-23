import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  readonly OWNER = 'Asaf';
  private apiUrl = 'http://hosting.webis.co.il:8085/api';

  constructor(private http: Http) { }

  getFolderById(id?: string) {
    return this.http.get(this.apiUrl + '/items/get/' + this.OWNER + '/' + (id !== undefined ? id : ''))
      .map((data: Response) => { return data.json(); })
      .catch((err: Response) => {
        return Observable.throw(err)
      });
  }

  createItem(parentId: string, type: string, name: string) {
    return this.http.post(this.apiUrl + '/items/create/', { parentId: parentId, type: type, name: name, owner: this.OWNER })
      .map((data: Response) => { return data.json(); })
      .catch((err: Response) => {
        return Observable.throw(err)
      });
  }

}
