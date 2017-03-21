import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  getFolderById(id?: string) {
    return this.http.get(this.apiUrl + '/items/get/Roman/' + (id !== undefined ? id : ''))
      .map((data: Response) => { return data.json(); })
      .catch((err: Response) => { debugger; return Observable.throw(err) });
  }

}
