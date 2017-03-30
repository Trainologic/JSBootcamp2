import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Http, Response } from '@angular/http'
@Injectable()
export class ApiService {

  onItemGet: Subject<any> = new Subject();

  constructor(private http: Http) { }

  getItem() {
    this.http.get('http://hosting.webis.co.il:8085/api/items/get/Roman').subscribe((response) => {
      this.onItemGet.next(response.json());
    });
  }

}
